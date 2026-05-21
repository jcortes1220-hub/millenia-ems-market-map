# Millenia ER EMS Market Dashboard

Static executive-style EMS market dashboard for HCA Florida Millenia Emergency. It is structured for GitHub Pages deployment and uses Google My Maps-style operational layer logic.

## What It Includes

- Core service area and extended growth market polygons
- HCA Florida Millenia Emergency and HCA sister FSED network context
- AdventHealth hospital and freestanding ER layer
- Orlando Health hospital and freestanding ER layer
- Orange County Fire Rescue station layer
- Orlando Fire Rescue station layer
- EMS operational routes, demand nodes, and corridor overlays
- Filterable map layers, search, quick-focus buttons, KPI cards, and print view

## Project Structure

```text
millenia-ems-market-dashboard/
  index.html
  manifest.webmanifest
  data/
    10 MIL - Sheet1.csv
    ADVENT HEALTH - Sheet1.csv
    CORE SERVICE AREA - Sheet1.csv
    EXTENDED GROWTH MARKET - Sheet1.csv
    HCA FSED SISTERS - Sheet1.csv
    HOME BASE - Sheet1.csv
    OCFR EMS UNITS _ STATIONS - Sheet1.csv
    ORL FIRE - Sheet1.csv
    ORLANDO HEALTH - Sheet1.csv
    radius-around-point.kml
  src/
    app.js
    market-data.js
    styles.css
```

## GitHub Pages Deployment

1. Upload this folder to a GitHub repository.
2. In the repository, go to `Settings` > `Pages`.
3. Set the source to the branch and folder that contains `index.html`.
4. Open the GitHub Pages URL after it publishes.

No build step is required. The dashboard uses CDN-hosted Leaflet, OpenStreetMap tiles, and Lucide icons.

## Data Notes

The `data/` folder preserves the original Google My Maps source exports. The browser dashboard uses `src/market-data.js` as a normalized display layer so GitHub Pages can load quickly without a server-side geocoder.

The map is an operational planning dashboard, not a legally authoritative GIS file. Before using it for final market decisions, validate station locations, active apparatus, transport protocols, and facility status with internal HCA resources, EMS contacts, and official agency sources.

One source-validation flag is intentionally preserved: `HOME BASE - Sheet1.csv` lists `700 W Oak St, Orlando, FL 32805`. The dashboard keeps the source text and maps the point to the common 700 W Oak St HCA Osceola operational context until that row is corrected.
