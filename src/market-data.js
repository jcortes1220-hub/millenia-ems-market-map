window.MILLENIA_MARKET = {
  center: [28.4913699, -81.4275971],
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
      center: [28.4913699, -81.4275971],
      radius: 16093.44,
      priority: "Market boundary",
      notes: "Exact 10-mile service radius from HCA Florida Millenia Emergency at 4056 Millenia Blvd."
    }
  ],
  points: [
    { layer: "center", name: "HCA Millenia FSED", system: "HCA Florida", category: "Millenia ER Center Point", address: "4056 Millenia Blvd, Orlando, FL 32839", coords: [28.4913699, -81.4275971], priority: "Command", notes: "Freestanding emergency department and center point for the exact 10-mile service radius." },
    { layer: "home", name: "Home Base Hospital", system: "Home Base Layer", category: "Hospital", address: "700 W Oak St, Orlando, FL 32805", coords: [28.3002, -81.4111], priority: "Source layer", notes: "Imported from the HOME BASE layer. This point is separate from the Millenia ER center point and can be used for distance comparisons or transfer-market context." },

    { layer: "hca", name: "HCA Florida Hunter's Creek Emergency", system: "HCA Florida", category: "Sister FSED", address: "3051 Town Center Blvd, Orlando, FL 32837", coords: [28.364255838484, -81.424378263048], priority: "Network", notes: "Pin geocoded to the listed street address." },
    { layer: "hca", name: "HCA Florida Downtown Emergency", system: "HCA Florida", category: "Sister FSED", address: "1414 S Orange Ave, Orlando, FL 32806", coords: [28.525696021516, -81.376531192341], priority: "Network", notes: "Pin geocoded to the listed street address." },
    { layer: "hca", name: "HCA Florida Airport North Emergency", system: "HCA Florida", category: "Sister FSED", address: "7450 Narcoossee Rd, Orlando, FL 32822", coords: [28.460182068623, -81.272080600137], priority: "Network", notes: "Pin geocoded to the listed street address." },
    { layer: "hca", name: "HCA Florida West Orange Emergency", system: "HCA Florida", category: "Sister FSED", address: "1320 Daniels Rd, Winter Garden, FL 34787", coords: [28.548505603591, -81.583933654048], priority: "Network", notes: "Address updated from current HCA listing and geocoded to Daniels Rd." },

    { layer: "advent", name: "AdventHealth Millenia ER", system: "AdventHealth", category: "Freestanding ER", address: "4633 Vineland Rd, Orlando, FL 32811", coords: [28.4921, -81.4415], priority: "Closest competitor", notes: "Source: ADVENT HEALTH CSV." },
    { layer: "advent", name: "AdventHealth Orlando", system: "AdventHealth", category: "Main Hospital", address: "601 E Rollins St, Orlando, FL 32803", coords: [28.5733, -81.3691], priority: "Regional", notes: "Source: ADVENT HEALTH CSV." },
    { layer: "advent", name: "AdventHealth East Orlando", system: "AdventHealth", category: "Main Hospital", address: "7727 Lake Underhill Rd, Orlando, FL 32822", coords: [28.5392, -81.2818], priority: "Regional", notes: "Source: ADVENT HEALTH CSV." },
    { layer: "advent", name: "AdventHealth Winter Park", system: "AdventHealth", category: "Main Hospital", address: "200 N Lakemont Ave, Winter Park, FL 32792", coords: [28.5985, -81.3266], priority: "Regional", notes: "Source: ADVENT HEALTH CSV." },
    { layer: "advent", name: "AdventHealth Celebration", system: "AdventHealth", category: "Main Hospital", address: "400 Celebration Pl, Celebration, FL 34747", coords: [28.3336, -81.5428], priority: "Regional", notes: "Source: ADVENT HEALTH CSV." },
    { layer: "advent", name: "AdventHealth Kissimmee", system: "AdventHealth", category: "Main Hospital", address: "2450 N Orange Blossom Trl, Kissimmee, FL 34744", coords: [28.3243, -81.4046], priority: "Regional", notes: "Source: ADVENT HEALTH CSV." },
    { layer: "advent", name: "AdventHealth Altamonte Springs", system: "AdventHealth", category: "Main Hospital", address: "601 E Altamonte Dr, Altamonte Springs, FL 32701", coords: [28.6656, -81.3708], priority: "Regional", notes: "Source: ADVENT HEALTH CSV." },
    { layer: "advent", name: "AdventHealth Meadow Woods ER", system: "AdventHealth", category: "Freestanding ER", address: "12242 S Orange Ave, Orlando, FL 32824", coords: [28.3863, -81.3655], priority: "Competitor", notes: "Source: ADVENT HEALTH CSV." },
    { layer: "advent", name: "AdventHealth Lake Nona ER", system: "AdventHealth", category: "Freestanding ER", address: "10080 Lake Nona Blvd, Orlando, FL 32827", coords: [28.4250, -81.2531], priority: "Competitor", notes: "Source: ADVENT HEALTH CSV." },
    { layer: "advent", name: "AdventHealth Palm Parkway ER", system: "AdventHealth", category: "Freestanding ER", address: "7823 Palm Pkwy, Orlando, FL 32836", coords: [28.3882, -81.4916], priority: "Tourism competitor", notes: "Source: ADVENT HEALTH CSV." },
    { layer: "advent", name: "AdventHealth Flamingo Crossings ER", system: "AdventHealth", category: "Freestanding ER", address: "13323 Hartzog Rd, Winter Garden, FL 34787", coords: [28.3639, -81.6175], priority: "Growth competitor", notes: "Source: ADVENT HEALTH CSV." },
    { layer: "advent", name: "AdventHealth Waterford Lakes ER", system: "AdventHealth", category: "Freestanding ER", address: "13691 E Colonial Dr, Orlando, FL 32826", coords: [28.5671, -81.1832], priority: "East competitor", notes: "Source: ADVENT HEALTH CSV." },

    { layer: "orlandoHealth", name: "Orlando Health Orlando Regional Medical Center ER", system: "Orlando Health", category: "Main Hospital ER", address: "29 W Sturtevant St, Orlando, FL 32806", coords: [28.5266, -81.3777], priority: "Trauma", notes: "Source: ORLANDO HEALTH CSV." },
    { layer: "orlandoHealth", name: "Orlando Health Dr. P. Phillips Hospital ER", system: "Orlando Health", category: "Main Hospital ER", address: "9400 Turkey Lake Rd, Orlando, FL 32819", coords: [28.4317, -81.4752], priority: "Tourism", notes: "Source: ORLANDO HEALTH CSV." },
    { layer: "orlandoHealth", name: "Orlando Health Health Central Hospital ER", system: "Orlando Health", category: "Main Hospital ER", address: "10000 W Colonial Dr, Ocoee, FL 34761", coords: [28.5524, -81.5292], priority: "West", notes: "Source: ORLANDO HEALTH CSV." },
    { layer: "orlandoHealth", name: "Orlando Health Arnold Palmer Hospital for Children ER", system: "Orlando Health", category: "Pediatric Hospital ER", address: "92 W Miller St, Orlando, FL 32806", coords: [28.5262, -81.3789], priority: "Pediatric", notes: "Source: ORLANDO HEALTH CSV." },
    { layer: "orlandoHealth", name: "Orlando Health Winnie Palmer Hospital for Women & Babies", system: "Orlando Health", category: "Women & Babies Hospital", address: "83 W Miller St, Orlando, FL 32806", coords: [28.5254, -81.3794], priority: "Specialty", notes: "Source: ORLANDO HEALTH CSV." },
    { layer: "orlandoHealth", name: "Orlando Health Horizon West Hospital ER", system: "Orlando Health", category: "Main Hospital ER", address: "17000 Porter Rd, Winter Garden, FL 34787", coords: [28.4443, -81.6430], priority: "Growth", notes: "Source: ORLANDO HEALTH CSV." },
    { layer: "orlandoHealth", name: "Orlando Health Lake Mary Hospital ER", system: "Orlando Health", category: "Main Hospital ER", address: "380 Rinehart Rd, Lake Mary, FL 32746", coords: [28.7587, -81.3532], priority: "Regional", notes: "Source: ORLANDO HEALTH CSV." },
    { layer: "orlandoHealth", name: "Orlando Health ER and Medical Pavilion - Osceola", system: "Orlando Health", category: "Freestanding ER", address: "1001 E Osceola Pkwy, Kissimmee, FL 34744", coords: [28.3423, -81.3896], priority: "Competitor", notes: "Source: ORLANDO HEALTH CSV." },
    { layer: "orlandoHealth", name: "Orlando Health Emergency Room - Randal Park", system: "Orlando Health", category: "Freestanding ER", address: "10155 Dowden Rd, Orlando, FL 32832", coords: [28.4318, -81.2430], priority: "Competitor", notes: "Source: ORLANDO HEALTH CSV." },
    { layer: "orlandoHealth", name: "Orlando Health Emergency Room - Four Corners", system: "Orlando Health", category: "Freestanding ER", address: "16966 Cagan Ridge Blvd, Clermont, FL 34714", coords: [28.3458, -81.6764], priority: "Peripheral", notes: "Source: ORLANDO HEALTH CSV." },
    { layer: "orlandoHealth", name: "Orlando Health Emergency Room - Longwood", system: "Orlando Health", category: "Freestanding ER", address: "575 W State Rd 434, Longwood, FL 32750", coords: [28.6965, -81.3548], priority: "Regional", notes: "Source: ORLANDO HEALTH CSV." },
    { layer: "orlandoHealth", name: "Orlando Health South Lake Hospital ER", system: "Orlando Health", category: "Main Hospital ER", address: "1900 Don Wickham Dr, Clermont, FL 34711", coords: [28.5576, -81.7260], priority: "Peripheral", notes: "Source: ORLANDO HEALTH CSV." },
    { layer: "orlandoHealth", name: "Orlando Health South Lake Hospital ER - Blue Cedar", system: "Orlando Health", category: "Freestanding ER", address: "22316 US Hwy 27, Leesburg, FL 34748", coords: [28.8477, -81.8795], priority: "Peripheral", notes: "Source: ORLANDO HEALTH CSV." },

    { layer: "ocfr", name: "OCFR Station 33 - Engine 33", system: "Orange County Fire Rescue", category: "EMS Station", address: "1700 S Apopka Vineland Rd, Orlando, FL 32835", coords: [28.520859134376, -81.507980934199], priority: "Support", notes: "MetroWest / Kirkman. Pin geocoded to the listed street address." },
    { layer: "ocfr", name: "OCFR Station 50 - Engine 50", system: "Orange County Fire Rescue", category: "EMS Station", address: "1415 29th St, Orlando, FL 32805", coords: [28.512744959977, -81.399309480828], priority: "Core", notes: "Central-West Orlando. Pin geocoded to the listed street address." },
    { layer: "ocfr", name: "OCFR Station 51 - Engine 51", system: "Orange County Fire Rescue", category: "EMS Station", address: "1700 W Oak Ridge Rd, Orlando, FL 32809", coords: [28.472472378334, -81.400868066918], priority: "Core south", notes: "Oak Ridge / Florida Mall corridor. Pin geocoded to the listed street address." },
    { layer: "ocfr", name: "OCFR Station 52 - Engine 52", system: "Orange County Fire Rescue", category: "EMS Station", address: "4765 W Sand Lake Rd, Orlando, FL 32819", coords: [28.450167976173, -81.441562976687], priority: "Tourism", notes: "Dr. Phillips / Sand Lake. Pin geocoded to the listed street address." },
    { layer: "ocfr", name: "OCFR Station 53 - Engine 53", system: "Orange County Fire Rescue", category: "EMS Station", address: "1270 La Quinta Dr, Orlando, FL 32809", coords: [28.440657461932, -81.39982421176], priority: "South", notes: "Florida Mall / OBT. Pin geocoded to the listed street address." },
    { layer: "ocfr", name: "OCFR Station 70 - Engine 70", system: "Orange County Fire Rescue", category: "EMS Station", address: "1027 E Wallace St, Orlando, FL 32809", coords: [28.471416969068, -81.365638691446], priority: "South Orlando", notes: "Corrected from the I-Drive address in the source CSV and geocoded to Wallace St." },
    { layer: "ocfr", name: "OCFR Station 71 - Engine 71", system: "Orange County Fire Rescue", category: "EMS Station", address: "4405 St Florian Way, Orlando, FL 32822", coords: [28.482438017839, -81.284909677359], priority: "East", notes: "Airport east corridor. Pin geocoded to the listed street address." },
    { layer: "ocfr", name: "OCFR Station 72 - Engine 72", system: "Orange County Fire Rescue", category: "EMS Station", address: "3705 Conway Rd, Orlando, FL 32812", coords: [28.4992550292, -81.330728497069], priority: "Residential", notes: "Conway / SoDo. Pin geocoded to the listed street address." },
    { layer: "ocfr", name: "OCFR Station 31 - Engine 100", system: "Orange County Fire Rescue", category: "EMS Station", address: "6116 S Apopka Vineland Rd, Orlando, FL 32819", coords: [28.462502721763, -81.500528854653], priority: "West tourism", notes: "Universal / I-Drive west. Pin geocoded to the listed street address." },

    { layer: "ofr", name: "Orlando Fire Station 1", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "78 W Central Blvd, Orlando, FL 32801", coords: [28.542043663693, -81.380383922514], priority: "Downtown", notes: "Pin geocoded to the listed street address." },
    { layer: "ofr", name: "Orlando Fire Station 3", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "2406 N Elizabeth Ave, Orlando, FL 32804", coords: [28.572753390953, -81.384941143589], priority: "College Park", notes: "Address updated and pin geocoded to the listed street address." },
    { layer: "ofr", name: "Orlando Fire Station 5", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "1818 S Orange Ave, Orlando, FL 32806", coords: [28.520935065319, -81.376460662929], priority: "SoDo", notes: "Pin geocoded to the listed street address." },
    { layer: "ofr", name: "Orlando Fire Station 6", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "3113 E Robinson St, Orlando, FL 32803", coords: [28.546202918549, -81.345432517823], priority: "East city", notes: "Address updated and pin geocoded to the listed street address." },
    { layer: "ofr", name: "Orlando Fire Station 7", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "601 S Goldwyn Ave, Orlando, FL 32805", coords: [28.534384703434, -81.417921672814], priority: "Core city", notes: "Pin geocoded to the listed street address." },
    { layer: "ofr", name: "Orlando Fire Station 8", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "6651 S Shoalcreek Dr, Orlando, FL 32812", coords: [28.467000368237, -81.316068644541], priority: "Airport west", notes: "Address updated and pin geocoded to the listed street address." },
    { layer: "ofr", name: "Orlando Fire Station 10", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "5655 W Vineland Rd, Orlando, FL 32819", coords: [28.482963112788, -81.456297865496], priority: "Universal / Kirkman", notes: "Address updated and pin geocoded to the listed street address." },
    { layer: "ofr", name: "Orlando Fire Station 11", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "4911 Curry Ford Rd, Orlando, FL 32812", coords: [28.524576024397, -81.325169383234], priority: "East city", notes: "Address updated and pin geocoded to the listed street address." },
    { layer: "ofr", name: "Orlando Fire Station 12", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "1588 Park Center Dr, Orlando, FL 32835", coords: [28.522506610233, -81.471728477734], priority: "MetroWest", notes: "Address updated and pin geocoded to the listed street address." },
    { layer: "ofr", name: "Orlando Fire Station 14", system: "Orlando Fire Rescue", category: "Fire/EMS Station", address: "5450 S Econlockhatchee Trl, Orlando, FL 32829", coords: [28.485222445585, -81.250920647415], priority: "Southeast city", notes: "Address updated and pin geocoded to the listed street address." }
  ],
  routes: [
    { layer: "ops", name: "Millenia to ORMC Transfer Corridor", category: "Transfer Route", color: "#18201f", from: [28.4913699, -81.4275971], to: [28.5266, -81.3777], priority: "Trauma", notes: "I-4 east/north movement toward downtown tertiary care." },
    { layer: "ops", name: "Millenia to Dr. Phillips Corridor", category: "Tourism Route", color: "#c75b12", from: [28.4913699, -81.4275971], to: [28.4317, -81.4752], priority: "Tourism", notes: "Sand Lake and Turkey Lake competitive destination corridor." },
    { layer: "ops", name: "John Young / Hunters Creek Corridor", category: "EMS Corridor", color: "#0f766e", from: [28.4913699, -81.4275971], to: [28.3674, -81.4186], priority: "South", notes: "North-south EMS movement through Oak Ridge, Hunters Creek, and Osceola approach." },
    { layer: "ops", name: "Kirkman / MetroWest Corridor", category: "EMS Corridor", color: "#6750a4", from: [28.4913699, -81.4275971], to: [28.5207, -81.5092], priority: "Growth", notes: "MetroWest, Universal, and Conroy relationship route." },
    { layer: "ops", name: "Airport North / 528 Corridor", category: "Growth Corridor", color: "#2f6f9f", from: [28.4913699, -81.4275971], to: [28.4622, -81.2795], priority: "East", notes: "Connects Millenia market intelligence to Airport North HCA sister FSED context." }
  ],
  heat: [
    { layer: "ops", name: "Millenia Mall / I-4 Demand Node", coords: [28.4861, -81.4328], radius: 1300, intensity: "High", color: "#b43b48", notes: "Retail, interstate, and visitor traffic incident concentration." },
    { layer: "ops", name: "Universal / Kirkman Demand Node", coords: [28.4734, -81.4621], radius: 1800, intensity: "High", color: "#c75b12", notes: "Hotel, attraction, and arterial traffic pressure." },
    { layer: "ops", name: "Oak Ridge / John Young Demand Node", coords: [28.4660, -81.4219], radius: 1450, intensity: "Moderate", color: "#3f7d48", notes: "Residential EMS demand and south corridor access." },
    { layer: "ops", name: "I-Drive / Convention Demand Node", coords: [28.4149, -81.4610], radius: 1600, intensity: "High", color: "#c79824", notes: "Tourism and convention corridor pressure near International Drive." }
  ],
  lensNarratives: {
    executive: "Executive lens emphasizes source-backed market share pressure: the core ZIP cluster overlaps intense AdventHealth and Orlando Health competition inside the 10-mile Millenia operating ring.",
    ems: "EMS lens highlights unit-level OCFR assets, Orlando Fire station proximity, and destination choices along I-4, Kirkman, Conroy, John Young, Sand Lake, and 528.",
    growth: "Growth lens expands beyond the core ZIP set into Horizon West, Ocoee, Windermere, East Orlando, College Park, Baldwin Park, and Pine Hills zip-code opportunities."
  },
  sources: [
    "10 MIL - Sheet1.csv",
    "ADVENT HEALTH - Sheet1.csv",
    "CORE SERVICE AREA - Sheet1.csv",
    "EXTENDED GROWTH MARKET - Sheet1.csv",
    "HCA FSED SISTERS - Sheet1.csv",
    "HOME BASE - Sheet1.csv",
    "OCFR EMS UNITS _ STATIONS - Sheet1.csv",
    "ORL FIRE - Sheet1.csv",
    "ORLANDO HEALTH - Sheet1.csv",
    "radius-around-point.kml"
  ]
};
