const market = window.MILLENIA_MARKET;
const CUSTOM_PIN_STORAGE_KEY = "milleniaEmsCustomPins";
const state = {
  visibleLayers: new Set(market.layerDefinitions.filter((layer) => layer.defaultOn).map((layer) => layer.id)),
  leafletLayers: {},
  markerIndex: [],
  distanceLayer: L.layerGroup(),
  pinEditMode: false,
  customPins: loadCustomPins(),
  basePins: createBasePinMap()
};

const map = L.map("map", {
  zoomControl: false,
  scrollWheelZoom: true
}).setView([28.5016, -81.4182], 10);

state.distanceLayer.addTo(map);

L.control.zoom({ position: "bottomleft" }).addTo(map);

L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
  maxZoom: 19,
  attribution: "Tiles &copy; Esri"
}).addTo(map);

L.tileLayer("https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", {
  maxZoom: 19,
  opacity: 0.72,
  attribution: "Labels &copy; Esri"
}).addTo(map);

function init() {
  market.layerDefinitions.forEach((definition) => {
    state.leafletLayers[definition.id] = L.layerGroup().addTo(map);
  });

  renderLayerControls();
  renderLegend();
  renderPolygons();
  renderRings();
  renderPoints();
  renderRoutes();
  renderHeat();
  updateMetrics();
  renderAssetOptions();
  bindInteractions();
  setLens("executive");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function layerDefinition(id) {
  return market.layerDefinitions.find((layer) => layer.id === id);
}

function renderLayerControls() {
  const controls = document.querySelector("#layerControls");
  controls.innerHTML = "";

  market.layerDefinitions.forEach((definition) => {
    const count = getLayerAssetCount(definition.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "layer-toggle";
    button.dataset.layer = definition.id;
    button.setAttribute("aria-pressed", state.visibleLayers.has(definition.id));
    button.innerHTML = `
      <span class="layer-swatch" style="background:${definition.color}"></span>
      <span class="layer-copy"><strong>${definition.label}</strong><span>${definition.description}</span></span>
      <span class="layer-count">${count}</span>
    `;
    controls.appendChild(button);
  });
}

function renderLegend() {
  const legend = document.querySelector("#legend");
  legend.innerHTML = market.layerDefinitions.map((definition) => `
    <div class="legend-item">
      <span class="legend-dot" style="background:${definition.color}"></span>
      <span>${definition.label}</span>
    </div>
  `).join("");
}

function renderPolygons() {
  market.polygons.forEach((asset) => {
    const polygon = L.polygon(asset.coordinates, {
      color: asset.color,
      fillColor: asset.color,
      fillOpacity: asset.layer === "serviceAreas" ? 0.2 : 0.1,
      opacity: asset.layer === "serviceAreas" ? 0.95 : 0.78,
      weight: asset.layer === "serviceAreas" ? 4 : 2,
      dashArray: asset.layer === "growthMarket" ? "8 7" : null
    });

    decorateShape(polygon, asset);
    addManagedLayer(asset.layer, polygon);
  });
}

function renderRings() {
  (market.rings || []).forEach((asset) => {
    const halo = L.circle(asset.center, {
      radius: asset.radius,
      color: "#ffffff",
      fill: false,
      opacity: 0.88,
      weight: 8,
      interactive: false
    });
    addManagedLayer(asset.layer, halo);

    const boundary = L.circle(asset.center, {
      radius: asset.radius,
      color: "#ffffff",
      fillColor: "#ffffff",
      fillOpacity: 0.075,
      opacity: 1,
      weight: 3
    });
    decorateShape(boundary, asset);
    addManagedLayer(asset.layer, boundary);

    const centerIcon = L.divIcon({
      className: "",
      html: `<div class="center-dot" aria-hidden="true"></div>`,
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });
    const centerMarker = L.marker(asset.center, { icon: centerIcon, zIndexOffset: 900 });
    decorateShape(centerMarker, asset);
    addManagedLayer(asset.layer, centerMarker);

    const labelIcon = L.divIcon({
      className: "",
      html: `<div class="radius-label"><strong>10 MI</strong><span>EMS radius</span></div>`,
      iconSize: [118, 38],
      iconAnchor: [59, 19]
    });
    const labelMarker = L.marker(asset.labelCoords || [asset.center[0] + 0.145, asset.center[1]], {
      icon: labelIcon,
      interactive: false,
      zIndexOffset: 850
    });
    addManagedLayer(asset.layer, labelMarker);
  });
}

function renderPoints() {
  market.points.forEach((asset) => {
    applySavedCoordinate(asset);
    const definition = layerDefinition(asset.layer);
    const icon = L.divIcon({
      className: "",
      html: `<div class="marker-pin" style="background:${definition.color}"><span>${markerLetter(asset)}</span></div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 29],
      popupAnchor: [0, -26]
    });
    const marker = L.marker(asset.coords, {
      icon,
      draggable: state.pinEditMode
    });
    decorateShape(marker, asset);
    marker.on("dragend", () => handlePinDragEnd(asset, marker));
    addManagedLayer(asset.layer, marker);
    state.markerIndex.push({ asset, marker });
  });
}

function renderRoutes() {
  market.routes.forEach((asset) => {
    const route = L.polyline([asset.from, asset.to], {
      color: asset.color,
      opacity: 0.82,
      weight: 4,
      dashArray: "10 8"
    });
    decorateShape(route, asset);
    addManagedLayer(asset.layer, route);
  });
}

function renderHeat() {
  market.heat.forEach((asset) => {
    const circle = L.circle(asset.coords, {
      radius: asset.radius,
      color: asset.color,
      fillColor: asset.color,
      fillOpacity: 0.16,
      opacity: 0.6,
      weight: 2
    });
    decorateShape(circle, asset);
    addManagedLayer(asset.layer, circle);
  });
}

function decorateShape(shape, asset) {
  shape.bindPopup(`
    <h3 class="popup-title">${asset.name}</h3>
    <p class="popup-copy">${asset.category || asset.type || ""}</p>
    <p class="popup-copy">${asset.notes || ""}</p>
  `);
  shape.on("click", () => updateDetail(asset));
}

function addManagedLayer(layerId, shape) {
  const group = state.leafletLayers[layerId];
  shape._marketLayer = layerId;
  shape.addTo(group);
  if (!state.visibleLayers.has(layerId)) {
    group.removeLayer(shape);
  }
}

function markerLetter(asset) {
  if (asset.layer === "hca") return "H";
  if (asset.layer === "center") return "M";
  if (asset.layer === "home") return "M";
  if (asset.layer === "advent") return "A";
  if (asset.layer === "orlandoHealth") return "O";
  if (asset.layer === "ocfr") return "C";
  if (asset.layer === "ofr") return "F";
  return "M";
}

function getLayerAssetCount(layerId) {
  return [
    ...market.points,
    ...market.polygons,
    ...(market.rings || []),
    ...market.routes,
    ...market.heat
  ].filter((asset) => asset.layer === layerId).length;
}

function updateDetail(asset) {
  const detail = document.querySelector("#detailCard");
  detail.classList.remove("is-hidden");
  const canEditPin = Array.isArray(asset.coords);
  const pinWasMoved = canEditPin && Boolean(state.customPins[getAssetKey(asset)]);
  detail.innerHTML = `
    <button class="detail-close" type="button" aria-label="Close selected asset panel">×</button>
    <span class="status-pill">${asset.system || asset.type || asset.category}</span>
    <h2>${asset.name}</h2>
    <p>${asset.notes || ""}</p>
    <div class="detail-meta">
      <span>${asset.category || asset.type || "Market asset"}</span>
      <span>${asset.priority || asset.intensity || "Strategic"}</span>
      <span>${asset.address || "Operational geography"}</span>
      <span>${layerDefinition(asset.layer).label}</span>
    </div>
    ${canEditPin ? `
      <div class="pin-tools">
        <span>${state.pinEditMode ? "Pins unlocked: drag this marker to the correct spot." : "Pins locked. Unlock pins to move this marker."}</span>
        <button type="button" class="text-button" data-reset-pin="${escapeHtml(getAssetKey(asset))}" ${pinWasMoved ? "" : "disabled"}>Reset Pin</button>
      </div>
    ` : ""}
  `;
  bindDetailClose();
  bindPinReset();
}

function toggleLayer(layerId) {
  const definition = layerDefinition(layerId);
  const group = state.leafletLayers[layerId];
  if (state.visibleLayers.has(layerId)) {
    state.visibleLayers.delete(layerId);
    map.removeLayer(group);
  } else {
    state.visibleLayers.add(layerId);
    map.addLayer(group);
  }

  document.querySelector(`[data-layer="${definition.id}"]`).setAttribute("aria-pressed", state.visibleLayers.has(layerId));
  updateMetrics();
}

function updateMetrics() {
  const visiblePoints = market.points.filter((asset) => state.visibleLayers.has(asset.layer));
  const stationCount = visiblePoints.filter((asset) => asset.category === "EMS Station" || asset.category === "Fire/EMS Station").length;
  const competitorCount = visiblePoints.filter((asset) => ["advent", "orlandoHealth"].includes(asset.layer)).length;
  const routeCount = state.visibleLayers.has("ops") ? market.routes.length : 0;

  document.querySelector("#facilityCount").textContent = visiblePoints.filter((asset) => asset.category !== "EMS Station" && asset.category !== "Fire/EMS Station").length;
  document.querySelector("#stationCount").textContent = stationCount;
  document.querySelector("#competitorCount").textContent = competitorCount;
  document.querySelector("#routeCount").textContent = routeCount;
}

function bindInteractions() {
  document.querySelector("#layerControls").addEventListener("click", (event) => {
    const button = event.target.closest("[data-layer]");
    if (button) toggleLayer(button.dataset.layer);
  });

  document.querySelector("#toggleAll").addEventListener("click", () => {
    const shouldShowAll = state.visibleLayers.size !== market.layerDefinitions.length;
    market.layerDefinitions.forEach((definition) => {
      const group = state.leafletLayers[definition.id];
      if (shouldShowAll) {
        state.visibleLayers.add(definition.id);
        map.addLayer(group);
      } else {
        state.visibleLayers.delete(definition.id);
        map.removeLayer(group);
      }
    });
    document.querySelector("#toggleAll").textContent = shouldShowAll ? "All Off" : "All On";
    renderLayerControls();
    updateMetrics();
  });

  document.querySelector("#resetView").addEventListener("click", () => {
    map.setView(market.center, 11);
  });

  document.querySelector("#printView").addEventListener("click", () => window.print());
  bindDetailClose();
  document.querySelector("#pinEditMode").addEventListener("click", togglePinEditMode);

  document.querySelector("#locationSearch").addEventListener("input", (event) => {
    searchAssets(event.target.value);
  });

  document.querySelector("#calculateDistance").addEventListener("click", calculateDistance);
  document.querySelector("#clearDistance").addEventListener("click", clearDistance);

  document.querySelectorAll("[data-focus]").forEach((button) => {
    button.addEventListener("click", () => focusMap(button.dataset.focus));
  });

  document.querySelectorAll("[data-lens]").forEach((button) => {
    button.addEventListener("click", () => setLens(button.dataset.lens));
  });
}

function togglePinEditMode() {
  state.pinEditMode = !state.pinEditMode;
  document.body.classList.toggle("pin-editing", state.pinEditMode);

  const button = document.querySelector("#pinEditMode");
  button.textContent = state.pinEditMode ? "Lock Pins" : "Unlock Pins";
  button.setAttribute("aria-pressed", state.pinEditMode);

  state.markerIndex.forEach(({ marker }) => {
    if (!marker.dragging) return;
    if (state.pinEditMode) {
      marker.dragging.enable();
    } else {
      marker.dragging.disable();
    }
  });
}

function handlePinDragEnd(asset, marker) {
  const next = marker.getLatLng();
  asset.coords = [Number(next.lat.toFixed(7)), Number(next.lng.toFixed(7))];
  state.customPins[getAssetKey(asset)] = asset.coords;
  saveCustomPins();
  renderAssetOptions();
  updateDetail(asset);
}

function getAssetKey(asset) {
  return `${asset.layer}::${asset.name}`;
}

function applySavedCoordinate(asset) {
  const saved = state.customPins[getAssetKey(asset)];
  if (Array.isArray(saved) && saved.length === 2) {
    asset.coords = saved;
  }
}

function loadCustomPins() {
  try {
    return JSON.parse(localStorage.getItem(CUSTOM_PIN_STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function createBasePinMap() {
  return Object.fromEntries(
    market.points
      .filter((asset) => Array.isArray(asset.coords))
      .map((asset) => [getAssetKey(asset), [...asset.coords]])
  );
}

function saveCustomPins() {
  localStorage.setItem(CUSTOM_PIN_STORAGE_KEY, JSON.stringify(state.customPins));
}

function bindPinReset() {
  const reset = document.querySelector("[data-reset-pin]");
  if (!reset) return;
  reset.addEventListener("click", () => {
    const key = reset.dataset.resetPin;
    const match = state.markerIndex.find(({ asset }) => getAssetKey(asset) === key);
    if (!match) return;
    delete state.customPins[key];
    saveCustomPins();
    const baseCoords = state.basePins[key];
    if (!baseCoords) return;
    match.asset.coords = baseCoords;
    match.marker.setLatLng(baseCoords);
    renderAssetOptions();
    updateDetail(match.asset);
  }, { once: true });
}

function bindDetailClose() {
  const close = document.querySelector(".detail-close");
  if (!close) return;
  close.addEventListener("click", () => {
    document.querySelector("#detailCard").classList.add("is-hidden");
  }, { once: true });
}

function renderAssetOptions() {
  const originOptions = document.querySelector("#originOptions");
  const destinationOptions = document.querySelector("#destinationOptions");
  const origins = getOriginAssets();
  const destinations = getDestinationAssets();

  originOptions.innerHTML = origins.map((asset) => {
    const label = `${asset.name} | ${asset.system || layerDefinition(asset.layer).label} | ${asset.address || asset.category}`;
    return `<option value="${escapeHtml(label)}"></option>`;
  }).join("");

  destinationOptions.innerHTML = destinations.map((asset) => {
    const label = `${asset.name} | ${asset.system || layerDefinition(asset.layer).label} | ${asset.address || asset.category}`;
    return `<option value="${escapeHtml(label)}"></option>`;
  }).join("");
}

function getDistanceAssets() {
  const assets = market.points.filter((asset) => Array.isArray(asset.coords));
  const millenia = assets.find((asset) => asset.layer === "center");
  return [
    ...(millenia ? [{ ...millenia, aliases: ["4056 Millenia Blvd", "456 Millenia Blvd", "456 Millennium Boulevard", "4056 Millennium Boulevard", "HCA Millenia", "HCA Millennia", "ACA Millenia", "ACA Millennia", "Millenia ER", "Millennia ER"] }] : []),
    ...assets.filter((asset) => asset !== millenia)
  ];
}

function getOriginAssets() {
  return getDistanceAssets().filter((asset) => {
    return asset.layer === "ocfr"
      || asset.layer === "ofr"
      || asset.category === "EMS Station"
      || asset.category === "Fire/EMS Station";
  });
}

function getDestinationAssets() {
  return getDistanceAssets().filter((asset) => {
    return asset.layer === "center"
      || asset.layer === "home"
      || asset.layer === "hca"
      || asset.layer === "advent"
      || asset.layer === "orlandoHealth"
      || /hospital|er|fsed|emergency/i.test(`${asset.name} ${asset.category}`);
  });
}

function calculateDistance() {
  const from = resolveAsset(document.querySelector("#distanceFrom").value, getOriginAssets());
  const to = resolveAsset(document.querySelector("#distanceTo").value, getDestinationAssets());
  const compare = resolveAsset(document.querySelector("#distanceCompare").value, getDestinationAssets()) || getMilleniaAsset();
  const result = document.querySelector("#distanceResult");

  if (!from || !to || !compare) {
    result.textContent = "I need an EMS/fire origin and a destination. Try Station 33, OCFR Station 70, Orlando Fire Station 11, AdventHealth Millenia, ORMC, or 4056 Millenia Blvd.";
    result.classList.add("warning");
    return;
  }

  const destinationMiles = haversineMiles(from.coords, to.coords);
  const compareMiles = haversineMiles(from.coords, compare.coords);
  const delta = destinationMiles - compareMiles;
  const deltaAbs = Math.abs(delta);
  const deltaLabel = getDeltaLabel(delta, to, compare);
  result.classList.remove("warning");
  result.innerHTML = `
    <div class="distance-comparison">
      <div>
        <span class="result-label">To selected destination</span>
        <strong>${destinationMiles.toFixed(2)} mi</strong>
        <small>${from.name} to ${to.name}</small>
      </div>
      <div>
        <span class="result-label">To HCA Millenia</span>
        <strong>${compareMiles.toFixed(2)} mi</strong>
        <small>${from.name} to ${compare.name}</small>
      </div>
      <div class="${delta <= 0 ? "advantage" : "bypass"}">
        <span class="result-label">Mileage Difference</span>
        <strong>${deltaAbs.toFixed(2)} mi</strong>
        <small>${deltaLabel}</small>
      </div>
    </div>
  `;

  drawDistanceComparison(from, to, compare, destinationMiles, compareMiles);
}

function clearDistance() {
  state.distanceLayer.clearLayers();
  document.querySelector("#distanceFrom").value = "";
  document.querySelector("#distanceTo").value = "";
  document.querySelector("#distanceCompare").value = "4056 Millenia Blvd";
  document.querySelector("#distanceResult").textContent = "Pick an EMS/fire origin and a destination to compare against HCA Millenia.";
  document.querySelector("#distanceResult").classList.remove("warning");
}

function resolveAsset(value, pool = getDistanceAssets()) {
  const query = normalizeSearch(value.split("|")[0]);
  if (!query) return null;

  return pool.find((asset) => {
    const searchText = normalizeSearch([
      asset.name,
      asset.system,
      asset.category,
      asset.address,
      asset.priority,
      ...(asset.aliases || [])
    ].filter(Boolean).join(" "));
    const queryTokens = query.split(" ").filter((token) => token.length > 2);
    return searchText.includes(query)
      || query.includes(normalizeSearch(asset.name))
      || queryTokens.every((token) => searchText.includes(token));
  }) || null;
}

function normalizeSearch(value) {
  return value
    .toLowerCase()
    .replace(/millennium/g, "millenia")
    .replace(/millennia/g, "millenia")
    .replace(/aca/g, "hca")
    .replace(/orange county/g, "ocfr orange county")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getMilleniaAsset() {
  return getDistanceAssets().find((asset) => asset.layer === "center") || null;
}

function getDeltaLabel(delta, to, compare) {
  if (Math.abs(delta) < 0.01) {
    return `${to.name} and ${compare.name} are effectively equal distance from this origin.`;
  }
  if (delta > 0) {
    return `${to.name} is ${delta.toFixed(2)} miles farther than HCA Millenia from this origin.`;
  }
  return `${to.name} is ${Math.abs(delta).toFixed(2)} miles closer than HCA Millenia from this origin.`;
}

function haversineMiles(from, to) {
  const earthRadiusMiles = 3958.7613;
  const toRadians = (degrees) => degrees * Math.PI / 180;
  const dLat = toRadians(to[0] - from[0]);
  const dLon = toRadians(to[1] - from[1]);
  const lat1 = toRadians(from[0]);
  const lat2 = toRadians(to[0]);
  const a = Math.sin(dLat / 2) ** 2
    + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return earthRadiusMiles * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function drawDistanceComparison(from, to, compare, destinationMiles, compareMiles) {
  state.distanceLayer.clearLayers();
  const destinationLine = L.polyline([from.coords, to.coords], {
    color: "#ffffff",
    weight: 5,
    opacity: 0.92,
    dashArray: "12 8"
  }).addTo(state.distanceLayer);

  L.polyline([from.coords, to.coords], {
    color: "#18201f",
    weight: 2,
    opacity: 0.9,
    dashArray: "12 8"
  }).addTo(state.distanceLayer);

  L.polyline([from.coords, compare.coords], {
    color: "#f28c28",
    weight: 5,
    opacity: 0.95
  }).addTo(state.distanceLayer);

  L.polyline([from.coords, compare.coords], {
    color: "#ffffff",
    weight: 2,
    opacity: 0.95
  }).addTo(state.distanceLayer);

  const midpoint = [
    (from.coords[0] + to.coords[0]) / 2,
    (from.coords[1] + to.coords[1]) / 2
  ];
  L.marker(midpoint, {
    icon: L.divIcon({
      className: "",
      html: `<div class="distance-map-label selected-route">${destinationMiles.toFixed(2)} mi</div>`,
      iconSize: [86, 28],
      iconAnchor: [43, 14]
    }),
    interactive: false
  }).addTo(state.distanceLayer);

  const compareMidpoint = [
    (from.coords[0] + compare.coords[0]) / 2,
    (from.coords[1] + compare.coords[1]) / 2
  ];
  L.marker(compareMidpoint, {
    icon: L.divIcon({
      className: "",
      html: `<div class="distance-map-label hca-route">${compareMiles.toFixed(2)} mi HCA</div>`,
      iconSize: [104, 28],
      iconAnchor: [52, 14]
    }),
    interactive: false
  }).addTo(state.distanceLayer);

  map.fitBounds(L.latLngBounds([from.coords, to.coords, compare.coords]), { padding: [70, 70] });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[char]));
}

function searchAssets(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return;

  const match = state.markerIndex.find(({ asset }) => {
    return [asset.name, asset.system, asset.category, asset.address, asset.notes]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(normalized));
  });

  if (!match) return;
  if (!state.visibleLayers.has(match.asset.layer)) {
    toggleLayer(match.asset.layer);
  }
  map.setView(match.asset.coords, 14);
  match.marker.openPopup();
  updateDetail(match.asset);
}

function focusMap(focus) {
  if (focus === "core") {
    map.fitBounds(L.latLngBounds(market.polygons.find((asset) => asset.id === "core").coordinates), { padding: [28, 28] });
  }
  if (focus === "growth") {
    map.fitBounds(L.latLngBounds(market.polygons.find((asset) => asset.id === "growth").coordinates), { padding: [28, 28] });
  }
  if (focus === "ems") {
    const stations = market.points.filter((asset) => asset.category === "EMS Station").map((asset) => asset.coords);
    map.fitBounds(L.latLngBounds(stations), { padding: [32, 32] });
  }
}

function setLens(lens) {
  document.querySelectorAll("[data-lens]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lens === lens);
  });
  document.querySelector("#lensNarrative").textContent = market.lensNarratives[lens];
}

init();
