window.MILLENIA_MARKET = {
  center: [28.491343, -81.427606],
  sourceFolder: "./data/",
  layerDefinitions: [
    { id: "center", label: "Millenia ER Center Point", description: "Radius + 4056 Millenia Blvd", color: "#f28c28", defaultOn: true },
    { id: "serviceAreas", label: "Core Service Area", description: "All items", color: "#f2df3a", defaultOn: true },
    { id: "growthMarket", label: "Extended Growth Market", description: "All items", color: "#4fa86b", defaultOn: true },
    { id: "advent", label: "Advent Health", description: "All items", color: "#4f8edb", defaultOn: true },
    { id: "orlandoHealth", label: "Orlando Health", description: "All items", color: "#9a2f68", defaultOn: true },
    { id: "ocfr", label: "OCFR EMS Units / Stations", description: "All items", color: "#8c39bd", defaultOn: true },
    { id: "home", label: "Home Base", description: "Home Base Hospital", color: "#f28c28", defaultOn: true },
    { id: "ofr", label: "ORL Fire", description: "All items", color: "#5b463e", defaultOn: true },
    { id: "hca", label: "HCA FSED Sisters", description: "All items", color: "#f28c28", defaultOn: true },
    {
      id: "growth-opportunity-corridors",
      name: "GROWTH OPPORTUNITY CORRIDORS",
      subtitle: "ZIP-Based Demographic Trends",
      count: 8,
      color: "#4f9b8f",
      category: "market",
      description: "ZIP-based demographic trends highlighting multilingual population growth, care access needs, and community demand signals across West Orlando and Millenia-adjacent corridors.",
      defaultOn: true
    },
    { id: "ops", label: "EMS Operations", description: "Corridors and demand overlays", color: "#18201f", defaultOn: true }
  ],
  marketZipCodes: {
    core: ["32839", "32809", "32811", "32805", "32819", "32835", "32801", "32806", "32812", "32824", "32837", "32821", "32803"],
    growth: ["34786", "34761", "34734", "32836", "32822", "32804", "32814", "32808"]
  },
  polygons: [
    {
      id: "core",
      layer: "serviceAreas",
      name: "Core Service Area ZIP Cluster",
      type: "Core market from CSV ZIP layer",
      color: "#0f766e",
      notes: "CSV ZIPs: 32839, 32809, 32811, 32805, 32819, 32835, 32801, 32806, 32812, 32824, 32837, 32821, 32803.",
      coordinates: [
        [28.5825, -81.4800],
        [28.5840, -81.3430],
        [28.5240, -81.3020],
        [28.3980, -81.3480],
        [28.3740, -81.4710],
        [28.4660, -81.5520]
      ]
    },
    {
      id: "growth",
      layer: "growthMarket",
      name: "Extended Growth Market ZIP Cluster",
      type: "Growth market from CSV ZIP layer",
      color: "#c75b12",
      notes: "CSV ZIPs: 34786, 34761, 34734, 32836, 32822, 32804, 32814, 32808.",
      coordinates: [
        [28.6530, -81.6760],
        [28.6820, -81.2310],
        [28.5660, -81.1800],
        [28.3650, -81.2730],
        [28.3500, -81.6460],
        [28.5190, -81.7040]
      ]
    }
  ],
  rings: [
    {
      id: "ten-mile",
      layer: "center",
      name: "HCA Millenia FSED",
      category: "10-Mile Service Radius",
      center: [28.491343, -81.427606],
      radius: 16093.44,
      priority: "Market boundary",
      notes: "Exact 10-mile service radius from HCA Florida Millenia Emergency at 4056 Millenia Blvd."
    }
  ],
  points: [
    { layer: "center", name: "HCA Millenia FSED", system: "HCA Florida", category: "Millenia ER Center Point", address: "4056 Millenia Blvd, Orlando, FL 32839", coords: [28.491343, -81.427606], priority: "Command", notes: "Freestanding emergency department and center point for the exact 10-mile service radius." },
    { layer: "home", name: "Home Base Hospital", system: "Home Base Layer", category: "Hospital", address: "700 W Oak St, Orlando, FL 32805", coords: [28.3002, -81.4111], priority: "Source layer", notes: "Imported from the HOME BASE layer. This point is separate from the Millenia ER center point and can be used for distance comparisons or transfer-market context." },

    { layer: "hca", name: "HCA Florida Airport North Emergency", system: "HCA Florida", category: "Sister FSED", address: "5597 Lee Vista Blvd, Orlando, FL 32812", coords: [28.4705, -81.3075], priority: "Network", notes: "Pin updated from user-provided HCA coordinate list." },
    { layer: "hca", name: "HCA Florida Hunter's Creek Emergency", system: "HCA Florida", category: "Sister FSED", address: "12100 S John Young Pkwy, Orlando, FL 32837", coords: [28.390763, -81.426131], priority: "Network", notes: "Pin updated from user-provided HCA coordinate list." },
    { layer: "hca", name: "HCA Florida Baldwin Park Emergency", system: "HCA Florida", category: "Sister FSED", address: "", coords: [28.5793, -81.3090], priority: "Network", notes: "Pin updated from user-provided HCA coordinate list." },
    { layer: "hca", name: "HCA Florida Maitland Emergency", system: "HCA Florida", category: "Sister FSED", address: "", coords: [28.6468, -81.4145], priority: "Network", notes: "Pin updated from user-provided HCA coordinate list." },
    { layer: "hca", name: "HCA Florida Downtown Emergency", system: "HCA Florida", category: "Sister FSED", address: "", coords: [28.5707, -81.3894], priority: "Network", notes: "Pin updated from user-provided HCA coordinate list." },
    { layer: "hca", name: "HCA Florida Heathrow Emergency", system: "HCA Florida", category: "Sister FSED", address: "", coords: [28.7747, -81.3615], priority: "Network", notes: "Pin updated from user-provided HCA coordinate list." },
    { layer: "hca", name: "HCA Florida Casselberry Emergency", system: "HCA Florida", category: "Sister FSED", address: "", coords: [28.6618, -81.3237], priority: "Network", notes: "Pin updated from user-provided HCA coordinate list." },
    { layer: "hca", name: "HCA Florida Wekiva Emergency", system: "HCA Florida", category: "Sister FSED", address: "", coords: [28.6903, -81.5063], priority: "Network", notes: "Pin updated from user-provided HCA coordinate list." },
    { layer: "hca", name: "HCA Florida West Volusia Emergency", system: "HCA Florida", category: "Sister FSED", address: "", coords: [28.9450, -81.3008], priority: "Network", notes: "Pin updated from user-provided HCA coordinate list." },
    { layer: "hca", name: "HCA Florida Mount Dora Emergency", system: "HCA Florida", category: "Sister FSED", address: "", coords: [28.8024, -81.6440], priority: "Network", notes: "Pin updated from user-provided HCA coordinate list." },
    { layer: "hca", name: "HCA Florida Osceola Hospital", system: "HCA Florida", category: "Hospital", address: "", coords: [28.3035, -81.4078], priority: "Network", notes: "Pin updated from user-provided HCA coordinate list." },
    { layer: "hca", name: "HCA Florida Poinciana Hospital", system: "HCA Florida", category: "Hospital", address: "", coords: [28.1404, -81.4695], priority: "Network", notes: "Pin updated from user-provided HCA coordinate list." },
    { layer: "hca", name: "HCA Florida Lake Monroe Hospital", system: "HCA Florida", category: "Hospital", address: "", coords: [28.7997, -81.2863], priority: "Network", notes: "Pin updated from user-provided HCA coordinate list." },

    { layer: "advent", name: "AdventHealth Orlando", system: "AdventHealth", category: "Main Hospital", address: "601 E Rollins St, Orlando, FL 32803", coords: [28.576405, -81.369381], priority: "Regional", notes: "Pin updated from user-provided AdventHealth coordinate list." },
    { layer: "advent", name: "AdventHealth East Orlando", system: "AdventHealth", category: "Main Hospital", address: "7727 Lake Underhill Rd, Orlando, FL 32822", coords: [28.523837, -81.286746], priority: "Regional", notes: "Pin updated from user-provided AdventHealth coordinate list." },
    { layer: "advent", name: "AdventHealth Winter Park", system: "AdventHealth", category: "Main Hospital", address: "200 N Lakemont Ave, Winter Park, FL 32792", coords: [28.598317, -81.326387], priority: "Regional", notes: "Pin updated from user-provided AdventHealth coordinate list." },
    { layer: "advent", name: "AdventHealth Altamonte Springs", system: "AdventHealth", category: "Main Hospital", address: "601 E Altamonte Dr, Altamonte Springs, FL 32701", coords: [28.664010, -81.378118], priority: "Regional", notes: "Pin updated from user-provided AdventHealth coordinate list." },
    { layer: "advent", name: "AdventHealth Celebration", system: "AdventHealth", category: "Main Hospital", address: "400 Celebration Pl, Celebration, FL 34747", coords: [28.317467, -81.537589], priority: "Regional", notes: "Pin updated from user-provided AdventHealth coordinate list." },
    { layer: "advent", name: "AdventHealth Kissimmee", system: "AdventHealth", category: "Main Hospital", address: "2450 N Orange Blossom Trl, Kissimmee, FL 34744", coords: [28.331217, -81.404336], priority: "Regional", notes: "Pin updated from user-provided AdventHealth coordinate list." },
    { layer: "advent", name: "AdventHealth Millenia ER", system: "AdventHealth", category: "Freestanding ER", address: "4633 Vineland Rd, Orlando, FL 32811", coords: [28.495587, -81.433668], priority: "Closest competitor", notes: "Pin updated from user-provided AdventHealth coordinate list." },
    { layer: "advent", name: "AdventHealth Waterford Lakes ER", system: "AdventHealth", category: "Freestanding ER", address: "13691 E Colonial Dr, Orlando, FL 32826", coords: [28.567842, -81.191650], priority: "East competitor", notes: "Pin updated from user-provided AdventHealth coordinate list." },
    { layer: "advent", name: "AdventHealth Lake Nona ER", system: "AdventHealth", category: "Freestanding ER", address: "9975 Tavistock Lakes Blvd, Orlando, FL 32827", coords: [28.386476, -81.242036], priority: "Competitor", notes: "Pin updated from user-provided AdventHealth coordinate list." },
    { layer: "advent", name: "AdventHealth Centra Care Hunter's Creek", system: "AdventHealth", category: "Centra Care", address: "3299 Greenwald Way N, Kissimmee, FL 34741", coords: [28.3364, -81.4257], priority: "South competitor", notes: "Pin updated from user-provided AdventHealth coordinate list." },

    { layer: "orlandoHealth", name: "Orlando Health Orlando Regional Medical Center", system: "Orlando Health", category: "Main Hospital", address: "52 W Underwood St, Orlando, FL 32806", coords: [28.523163, -81.381689], priority: "Trauma", notes: "Pin updated from user-provided Orlando Health coordinate list." },
    { layer: "orlandoHealth", name: "Orlando Health Dr. P. Phillips Hospital", system: "Orlando Health", category: "Main Hospital", address: "9400 Turkey Lake Rd, Orlando, FL 32819", coords: [28.429430, -81.478643], priority: "Tourism", notes: "Pin updated from user-provided Orlando Health coordinate list." },
    { layer: "orlandoHealth", name: "Orlando Health Health Central Hospital", system: "Orlando Health", category: "Main Hospital", address: "10000 W Colonial Dr, Ocoee, FL 34761", coords: [28.552160, -81.528553], priority: "West", notes: "Pin updated from user-provided Orlando Health coordinate list." },
    { layer: "orlandoHealth", name: "Orlando Health Horizon West Hospital", system: "Orlando Health", category: "Main Hospital", address: "17000 Porter Rd, Winter Garden, FL 34787", coords: [28.495919, -81.617420], priority: "Growth", notes: "Pin updated from user-provided Orlando Health coordinate list." },
    { layer: "orlandoHealth", name: "Orlando Health Winnie Palmer Hospital for Women & Babies", system: "Orlando Health", category: "Women & Babies Hospital", address: "83 W Miller St, Orlando, FL 32806", coords: [28.5214, -81.3781], priority: "Specialty", notes: "Pin updated from user-provided Orlando Health coordinate list." },
    { layer: "orlandoHealth", name: "Orlando Health Arnold Palmer Hospital for Children", system: "Orlando Health", category: "Pediatric Hospital", address: "92 W Miller St, Orlando, FL 32806", coords: [28.5212, -81.3784], priority: "Pediatric", notes: "Pin updated from user-provided Orlando Health coordinate list." },
    { layer: "orlandoHealth", name: "Orlando Health Emergency Room - Waterford Lakes", system: "Orlando Health", category: "Freestanding ER", address: "11898 Lake Underhill Rd, Orlando, FL 32825", coords: [28.543959, -81.208242], priority: "East competitor", notes: "Pin updated from user-provided Orlando Health coordinate list." },
    { layer: "orlandoHealth", name: "Orlando Health Emergency Room and Medical Pavilion - Osceola", system: "Orlando Health", category: "Freestanding ER", address: "1001 E Osceola Pkwy, Kissimmee, FL 34744", coords: [28.3462, -81.3898], priority: "South competitor", notes: "Pin updated from user-provided Orlando Health coordinate list." },
    { layer: "orlandoHealth", name: "Orlando Health Emergency Room - Randal Park", system: "Orlando Health", category: "Freestanding ER", address: "10155 Dowden Rd, Orlando, FL 32832", coords: [28.428909, -81.242512], priority: "East competitor", notes: "Pin updated from user-provided Orlando Health coordinate list." },
    { layer: "orlandoHealth", name: "Orlando Health Emergency Room - Reunion Village", system: "Orlando Health", category: "Freestanding ER", address: "8011 Osceola Polk Line Rd, Kissimmee, FL 34747", coords: [28.2658, -81.6488], priority: "Southwest competitor", notes: "Pin updated from user-provided Orlando Health coordinate list." },
    { layer: "orlandoHealth", name: "Orlando Health Emergency Room - Longwood", system: "Orlando Health", category: "Freestanding ER", address: "450 W SR 434, Longwood, FL 32750", coords: [28.694145, -81.346821], priority: "North competitor", notes: "Pin updated from user-provided Orlando Health coordinate list." },

    { layer: "ocfr", name: "Orange County Fire Station 36", system: "Orange County Fire Rescue", category: "EMS Station", address: "12252 Winter Garden Vineland Rd, Orlando, FL 32836", coords: [28.3867, -81.5485], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 41", system: "Orange County Fire Rescue", category: "EMS Station", address: "4412 Fairview Ave, Orlando, FL 32804", coords: [28.5962, -81.4378], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 42", system: "Orange County Fire Rescue", category: "EMS Station", address: "5420 Silver Star Rd, Orlando, FL 32808", coords: [28.5779, -81.4512], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 50", system: "Orange County Fire Rescue", category: "EMS Station", address: "1415 29th St, Orlando, FL 32805", coords: [28.5112, -81.4018], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 51", system: "Orange County Fire Rescue", category: "EMS Station", address: "1700 W Oak Ridge Rd, Orlando, FL 32809", coords: [28.4718, -81.4045], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 52", system: "Orange County Fire Rescue", category: "EMS Station", address: "4765 W Sand Lake Rd, Orlando, FL 32819", coords: [28.450761, -81.441543], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 53", system: "Orange County Fire Rescue", category: "EMS Station", address: "1270 LaQuinta Dr, Orlando, FL 32809", coords: [28.4345, -81.3843], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 54", system: "Orange County Fire Rescue", category: "EMS Station", address: "6500 Central Florida Pkwy, Orlando, FL 32821", coords: [28.403877, -81.464964], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 55", system: "Orange County Fire Rescue", category: "EMS Station", address: "801 Greenway Professional Ct, Orlando, FL 32824", coords: [28.3566, -81.3592], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 56", system: "Orange County Fire Rescue", category: "EMS Station", address: "13303 International Dr, Orlando, FL 32821", coords: [28.4190, -81.4637], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 57", system: "Orange County Fire Rescue", category: "EMS Station", address: "6014 Destination Pkwy, Orlando, FL 32819", coords: [28.423403, -81.459045], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 58", system: "Orange County Fire Rescue", category: "EMS Station", address: "2900 Deerfield Blvd, Orlando, FL 32837", coords: [28.3617, -81.4148], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 63", system: "Orange County Fire Rescue", category: "EMS Station", address: "2450 N Goldenrod Rd, Winter Park, FL 32792", coords: [28.5752, -81.2868], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 66", system: "Orange County Fire Rescue", category: "EMS Station", address: "996 N Semoran Blvd, Orlando, FL 32807", coords: [28.5604, -81.3092], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 68", system: "Orange County Fire Rescue", category: "EMS Station", address: "1945 S Goldenrod Rd, Orlando, FL 32822", coords: [28.5207, -81.2869], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 70", system: "Orange County Fire Rescue", category: "EMS Station", address: "1027 E Wallace St, Orlando, FL 32806", coords: [28.4588, -81.3652], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 72", system: "Orange County Fire Rescue", category: "EMS Station", address: "3705 S Conway Rd, Orlando, FL 32812", coords: [28.5034, -81.3308], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 73", system: "Orange County Fire Rescue", category: "EMS Station", address: "811 First St, Orlando, FL 32824", coords: [28.3874, -81.3761], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 76", system: "Orange County Fire Rescue", category: "EMS Station", address: "11351 Narcoossee Rd, Orlando, FL 32832", coords: [28.3942, -81.2459], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },
    { layer: "ocfr", name: "Orange County Fire Station 77", system: "Orange County Fire Rescue", category: "EMS Station", address: "11501 Moss Park Rd, Orlando, FL 32832", coords: [28.4080, -81.2274], priority: "OCFR", notes: "Pin updated from user-provided Orange County Fire Rescue coordinate list." },

    { layer: "ofr", name: "Orlando Fire Station 1", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "78 W Central Blvd, Orlando, FL 32801", coords: [28.5417, -81.3805], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 2", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "1215 W Robinson St, Orlando, FL 32805", coords: [28.5457, -81.3959], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 3", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "2406 N Elizabeth Ave, Orlando, FL 32804", coords: [28.5737, -81.3928], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 4", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "900 N Ferncreek Ave, Orlando, FL 32803", coords: [28.5594, -81.3527], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 5", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "1818 S Orange Ave, Orlando, FL 32806", coords: [28.5219, -81.3769], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 6", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "3113 E Robinson St, Orlando, FL 32803", coords: [28.5467, -81.3408], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 7", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "601 S Goldwyn Ave, Orlando, FL 32805", coords: [28.5341, -81.4087], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 8", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "6651 Shoalcreek Dr, Orlando, FL 32812", coords: [28.4687, -81.3095], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 9", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "3856 Center Loop, Orlando, FL 32808", coords: [28.5862, -81.4470], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 10", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "5655 Vineland Rd, Orlando, FL 32819", coords: [28.482963, -81.456298], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 11", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "4925 Curry Ford Rd, Orlando, FL 32812", coords: [28.5246, -81.3252], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 12", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "1588 Park Center Dr, Orlando, FL 32835", coords: [28.5419, -81.4411], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 13", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "330 S Kirkman Rd, Orlando, FL 32811", coords: [28.5380, -81.4593], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 14", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "1900 S Orange Blossom Trail, Orlando, FL 32805", coords: [28.5185, -81.3954], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 15", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "10181 University Blvd, Orlando, FL 32817", coords: [28.5976, -81.2434], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 16", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "7339 Curry Ford Rd, Orlando, FL 32822", coords: [28.5117, -81.2864], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." },
    { layer: "ofr", name: "Orlando Fire Station 17", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "9500 Dowden Rd, Orlando, FL 32832", coords: [28.4338, -81.2432], priority: "OFR", notes: "Pin updated from user-provided Orlando Fire Rescue coordinate list." }
  ],
  routes: [
    { layer: "ops", name: "Millenia to ORMC Transfer Corridor", category: "Transfer Route", color: "#18201f", from: [28.491343, -81.427606], to: [28.523163, -81.381689], priority: "Trauma", notes: "I-4 east/north movement toward downtown tertiary care." },
    { layer: "ops", name: "Millenia to Dr. Phillips Corridor", category: "Tourism Route", color: "#c75b12", from: [28.491343, -81.427606], to: [28.429430, -81.478643], priority: "Tourism", notes: "Sand Lake and Turkey Lake competitive destination corridor." },
    { layer: "ops", name: "John Young / Hunters Creek Corridor", category: "EMS Corridor", color: "#0f766e", from: [28.491343, -81.427606], to: [28.390763, -81.426131], priority: "South", notes: "North-south EMS movement through Oak Ridge, Hunters Creek, and Osceola approach." },
    { layer: "ops", name: "Kirkman / MetroWest Corridor", category: "EMS Corridor", color: "#6750a4", from: [28.491343, -81.427606], to: [28.5207, -81.5092], priority: "Growth", notes: "MetroWest, Universal, and Conroy relationship route." },
    { layer: "ops", name: "Airport North / 528 Corridor", category: "Growth Corridor", color: "#2f6f9f", from: [28.491343, -81.427606], to: [28.4705, -81.3075], priority: "East", notes: "Connects Millenia market intelligence to Airport North HCA sister FSED context." }
  ],
  heat: [
    { layer: "ops", name: "Millenia Mall / I-4 Demand Node", coords: [28.4861, -81.4328], radius: 1300, intensity: "High", color: "#b43b48", notes: "Retail, interstate, and visitor traffic incident concentration." },
    { layer: "ops", name: "Universal / Kirkman Demand Node", coords: [28.4734, -81.4621], radius: 1800, intensity: "High", color: "#c75b12", notes: "Hotel, attraction, and arterial traffic pressure." },
    { layer: "ops", name: "Oak Ridge / John Young Demand Node", coords: [28.4660, -81.4219], radius: 1450, intensity: "Moderate", color: "#3f7d48", notes: "Residential EMS demand and south corridor access." },
    { layer: "ops", name: "I-Drive / Convention Demand Node", coords: [28.4149, -81.4610], radius: 1600, intensity: "High", color: "#c79824", notes: "Tourism and convention corridor pressure near International Drive." }
  ],
  growthOpportunityCorridors: [
    { layer: "growth-opportunity-corridors", zip: "32818", name: "ZIP 32818 Growth Opportunity Corridor", area: "Pine Hills / West Orlando", coords: [28.5835, -81.5005], trendPercent: 19.63, estimatedPopulation: 12280, category: "ZIP-Based Demographic Trend", priority: "Highest community demand signal", source: "ZipAtlas", notes: "ZipAtlas-derived demographic trend signal for Pine Hills / West Orlando." },
    { layer: "growth-opportunity-corridors", zip: "32808", name: "ZIP 32808 Growth Opportunity Corridor", area: "West Orlando", coords: [28.5806, -81.4383], trendPercent: 18.53, estimatedPopulation: 11639, category: "ZIP-Based Demographic Trend", priority: "Highest community demand signal", source: "ZipAtlas", notes: "ZipAtlas-derived demographic trend signal for West Orlando." },
    { layer: "growth-opportunity-corridors", zip: "32805", name: "ZIP 32805 Growth Opportunity Corridor", area: "Holden Heights / Rio Grande", coords: [28.5323, -81.4028], trendPercent: 8.23, estimatedPopulation: 1464, category: "ZIP-Based Demographic Trend", priority: "Core cultural access", source: "ZipAtlas", notes: "ZipAtlas-derived demographic trend signal for Holden Heights / Rio Grande." },
    { layer: "growth-opportunity-corridors", zip: "32810", name: "ZIP 32810 Growth Opportunity Corridor", area: "Northwest Orlando", coords: [28.6254, -81.4086], trendPercent: 6.99, estimatedPopulation: 2638, category: "ZIP-Based Demographic Trend", priority: "Northwest access", source: "ZipAtlas", notes: "ZipAtlas-derived demographic trend signal for Northwest Orlando." },
    { layer: "growth-opportunity-corridors", zip: "32839", name: "ZIP 32839 Growth Opportunity Corridor", area: "Millenia / Oak Ridge", coords: [28.4884, -81.4082], trendPercent: 6.88, estimatedPopulation: 3391, category: "ZIP-Based Demographic Trend", priority: "Millenia core", source: "ZipAtlas", notes: "ZipAtlas-derived demographic trend signal for Millenia / Oak Ridge, including HCA Millenia's home ZIP." },
    { layer: "growth-opportunity-corridors", zip: "32835", name: "ZIP 32835 Growth Opportunity Corridor", area: "MetroWest", coords: [28.5255, -81.4895], trendPercent: 6.39, estimatedPopulation: 3186, category: "ZIP-Based Demographic Trend", priority: "West corridor access", source: "ZipAtlas", notes: "ZipAtlas-derived demographic trend signal for MetroWest." },
    { layer: "growth-opportunity-corridors", zip: "32811", name: "ZIP 32811 Growth Opportunity Corridor", area: "Kirkman / Malibu Groves", coords: [28.5221, -81.4439], trendPercent: 4.42, estimatedPopulation: 1777, category: "ZIP-Based Demographic Trend", priority: "Kirkman corridor", source: "ZipAtlas", notes: "ZipAtlas-derived demographic trend signal for Kirkman / Malibu Groves." },
    { layer: "growth-opportunity-corridors", zip: "32809", name: "ZIP 32809 Growth Opportunity Corridor", area: "Sky Lake / Oak Ridge South", coords: [28.4566, -81.3986], trendPercent: 3.46, estimatedPopulation: 1011, category: "ZIP-Based Demographic Trend", priority: "South core access", source: "ZipAtlas", notes: "ZipAtlas-derived demographic trend signal for Sky Lake / Oak Ridge South." }
  ],
  lensNarratives: {
    executive: "Executive lens emphasizes source-backed market share pressure: the core ZIP cluster overlaps intense AdventHealth and Orlando Health competition inside the 10-mile Millenia operating ring, plus multilingual population growth trends and language-access demand signals across West Orlando and Millenia-adjacent ZIP corridors.",
    ems: "EMS lens highlights unit-level OCFR assets, Orlando Fire station proximity, and destination choices along I-4, Kirkman, Conroy, John Young, Sand Lake, and 528.",
    growth: "Growth lens expands beyond the core ZIP set into Horizon West, Ocoee, Windermere, East Orlando, College Park, Baldwin Park, Pine Hills, and culturally specific ZIP opportunities."
  },
  sources: [
    "10 MIL - Sheet1.csv",
    "ADVENT HEALTH - Sheet1.csv",
    "CORE SERVICE AREA - Sheet1.csv",
    "EXTENDED GROWTH MARKET - Sheet1.csv",
    "HCA FSED SISTERS - Sheet1.csv",
    "GROWTH OPPORTUNITY CORRIDORS - Sheet1.csv",
    "HOME BASE - Sheet1.csv",
    "OCFR EMS UNITS _ STATIONS - Sheet1.csv",
    "ORL FIRE - Sheet1.csv",
    "ORLANDO HEALTH - Sheet1.csv",
    "radius-around-point.kml"
  ]
};
