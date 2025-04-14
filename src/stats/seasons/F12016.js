export const F1_2016_POINTS_SYSTEM = [
  25 + (1/30),        // 1st
  18 + (1/(30**2)),    // 2nd
  15 + (1/(30**3)),    // 3rd
  12 + (1/(30**4)),    // 4th
  10 + (1/(30**5)),    // 5th
  8 + (1/(30**6)),    // 6th
  6 + (1/(30**7)),    // 7th
  4 + (1/(30**8)),    // 8th
  2 + (1/(30**9)),    // 9th
  1 + (1/(30**10)),   // 10th
  0 + (1/(30**11)),   // 11th
  0 + (1/(30**12)),   // 12th
  0 + (1/(30**13)),   // 13th
  0 + (1/(30**14)),   // 14th
  0 + (1/(30**15)),   // 15th
  0 + (1/(30**16)),   // 16th
  0 + (1/(30**17)),   // 17th
  0 + (1/(30**18)),   // 18th
  0 + (1/(30**19)),   // 19th
  0 + (1/(30**20)),   // 20th
  0 + (1/(30**21)),   // 21st
  0 + (1/(30**22)),    // 22nd
  0 + (1/(30**23)),   // 23rd
  0 + (1/(30**24)),    // 24th
  0 + (1/(30**25)),   // 25th
  0 + (1/(30**26))    // 26th
];

export const F1_2016_POINTS_FL = 0;
export const F1_2016_POINTS_POLE = 0;

export const F1_2016_TEAMS = [
  {
    id: 1,
    name: "Red Bull Racing-TAG Heuer", // Name change
    shortName: "Red Bull",
    country: "Austria",
    reliability: 90, // Hypothetical value
    chassis: 95, // Hypothetical value
    engine: 90, // Hypothetical value (TAG Heuer rebranded Renault)
    tyreConservation: 92, // Hypothetical value
    color: "#5a00ee",
  },
  {
    id: 2,
    name: "McLaren-Honda",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 75, // Hypothetical value (continued development)
    chassis: 88, // Hypothetical value
    engine: 78, // Hypothetical value (continued development)
    tyreConservation: 85, // Hypothetical value
    color: "#808080",
  },
  {
    id: 3,
    name: "Scuderia Ferrari",
    shortName: "Ferrari",
    country: "Italy",
    reliability: 91, // Hypothetical value
    chassis: 93, // Hypothetical value
    engine: 94, // Hypothetical value
    tyreConservation: 95, // Hypothetical value
    color: "#DC0000",
  },
  {
    id: 4,
    name: "Mercedes AMG Petronas F1 Team",
    shortName: "Mercedes",
    country: "Germany",
    reliability: 97, // Hypothetical value
    chassis: 99, // Hypothetical value
    engine: 99, // Hypothetical value
    tyreConservation: 93, // Hypothetical value
    color: "#bbbbbb",
  },
  {
    id: 5,
    name: "Lotus F1 Team-Mercedes", // Renamed to Renault
    shortName: "Renault",
    country: "France", // Team ownership change
    reliability: 82, // Hypothetical value (works team return)
    chassis: 86, // Hypothetical value (new works team)
    engine: 96, // Hypothetical value
    tyreConservation: 89, // Hypothetical value
    color: "#FFD800", // Renault Yellow
  },
  {
    id: 6,
    name: "Sahara Force India-Mercedes",
    shortName: "Force India",
    country: "India",
    reliability: 90, // Hypothetical value
    chassis: 90, // Hypothetical value
    engine: 97, // Hypothetical value
    tyreConservation: 96, // Hypothetical value
    color: "#ff8c00",
  },
  {
    id: 7,
    name: "Sauber-Ferrari",
    shortName: "Sauber",
    country: "Switzerland",
    reliability: 84, // Hypothetical value
    chassis: 80, // Hypothetical value
    engine: 92, // Hypothetical value (older spec Ferrari engine)
    tyreConservation: 90, // Hypothetical value
    color: "#000000",
  },
  {
    id: 8,
    name: "Williams Martini Racing-Mercedes",
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 94, // Hypothetical value
    chassis: 91, // Hypothetical value
    engine: 98, // Hypothetical value
    tyreConservation: 87, // Hypothetical value
    color: "#005Aee",
  },
  {
    id: 9,
    name: "Scuderia Toro Rosso-Ferrari",
    shortName: "Toro Rosso",
    country: "Italy",
    reliability: 80, // Hypothetical value
    chassis: 83, // Hypothetical value
    engine: 91, // Hypothetical value (older spec Ferrari engine initially)
    tyreConservation: 88, // Hypothetical value
    color: "#4682b4",
  },
  {
    id: 10,
    name: "Manor Racing MRT-Mercedes", // Official full name
    shortName: "Manor",
    country: "United Kingdom",
    reliability: 72, // Hypothetical value
    chassis: 65, // Hypothetical value
    engine: 95, // Hypothetical value
    tyreConservation: 75, // Hypothetical value
    color: "#ff5555", // Likely retained similar color
  },
  {
    id: 11,
    name: "Haas F1 Team-Ferrari", // New entry
    shortName: "Haas",
    country: "United States", // New team
    reliability: 85, // Hypothetical value (new team with Ferrari partnership)
    chassis: 78, // Hypothetical value (new team with Ferrari partnership)
    engine: 93, // Hypothetical value
    tyreConservation: 80, // Hypothetical value
    color: "#303030", // Red and Black
  }
];

export const F1_2016_DRIVERS = [
  {
    id: 1,
    no: 44,
    name: "Lewis Hamilton",
    country: "United Kingdom",
    teamId: 4, // Mercedes AMG Petronas F1 Team
    performance: 98, // Hypothetical value
    reliability: 96, // Hypothetical value
    consistency: 97, // Hypothetical value
    tyreConservation: 93, // Hypothetical value
    racecraft: 97 // Hypothetical value
  },
  {
    id: 2,
    no: 6,
    name: "Nico Rosberg",
    country: "Germany",
    teamId: 4, // Mercedes AMG Petronas F1 Team
    performance: 97, // Hypothetical value
    reliability: 97, // Hypothetical value
    consistency: 96, // Hypothetical value
    tyreConservation: 92, // Hypothetical value
    racecraft: 96 // Hypothetical value
  },
  {
    id: 3,
    no: 5,
    name: "Sebastian Vettel",
    country: "Germany",
    teamId: 3, // Scuderia Ferrari
    performance: 95, // Hypothetical value
    reliability: 92, // Hypothetical value
    consistency: 95, // Hypothetical value
    tyreConservation: 95, // Hypothetical value
    racecraft: 95 // Hypothetical value
  },
  {
    id: 4,
    no: 7,
    name: "Kimi Räikkönen",
    country: "Finland",
    teamId: 3, // Scuderia Ferrari
    performance: 93, // Hypothetical value
    reliability: 91, // Hypothetical value
    consistency: 94, // Hypothetical value
    tyreConservation: 94, // Hypothetical value
    racecraft: 94 // Hypothetical value
  },
  {
    id: 5,
    no: 3,
    name: "Daniel Ricciardo",
    country: "Australia",
    teamId: 1, // Red Bull Racing-TAG Heuer
    performance: 94, // Hypothetical value
    reliability: 90, // Hypothetical value
    consistency: 93, // Hypothetical value
    tyreConservation: 92, // Hypothetical value
    racecraft: 96 // Hypothetical value
  },
  {
    id: 6,
    no: 26,
    name: "Daniil Kvyat",
    country: "Russia",
    teamId: 1, // Red Bull Racing-TAG Heuer
    performance: 88, // Hypothetical value
    reliability: 88, // Hypothetical value
    consistency: 90, // Hypothetical value
    tyreConservation: 90, // Hypothetical value
    racecraft: 91 // Hypothetical value
  },
  {
    id: 7,
    no: 19,
    name: "Felipe Massa",
    country: "Brazil",
    teamId: 8, // Williams Martini Racing-Mercedes
    performance: 90, // Hypothetical value
    reliability: 93, // Hypothetical value
    consistency: 92, // Hypothetical value
    tyreConservation: 87, // Hypothetical value
    racecraft: 93 // Hypothetical value
  },
  {
    id: 8,
    no: 77,
    name: "Valtteri Bottas",
    country: "Finland",
    teamId: 8, // Williams Martini Racing-Mercedes
    performance: 91, // Hypothetical value
    reliability: 92, // Hypothetical value
    consistency: 93, // Hypothetical value
    tyreConservation: 86, // Hypothetical value
    racecraft: 94 // Hypothetical value
  },
  {
    id: 9,
    no: 11,
    name: "Sergio Pérez",
    country: "Mexico",
    teamId: 6, // Sahara Force India-Mercedes
    performance: 88, // Hypothetical value
    reliability: 90, // Hypothetical value
    consistency: 91, // Hypothetical value
    tyreConservation: 96, // Hypothetical value
    racecraft: 92 // Hypothetical value
  },
  {
    id: 10,
    no: 27,
    name: "Nico Hülkenberg",
    country: "Germany",
    teamId: 6, // Sahara Force India-Mercedes
    performance: 89, // Hypothetical value
    reliability: 91, // Hypothetical value
    consistency: 90, // Hypothetical value
    tyreConservation: 95, // Hypothetical value
    racecraft: 93 // Hypothetical value
  },
  {
    id: 11,
    no: 8,
    name: "Romain Grosjean",
    country: "France",
    teamId: 11, // Haas F1 Team-Ferrari
    performance: 87, // Hypothetical value
    reliability: 85, // Hypothetical value
    consistency: 88, // Hypothetical value
    tyreConservation: 80, // Hypothetical value
    racecraft: 90 // Hypothetical value
  },
  {
    id: 12,
    no: 21,
    name: "Esteban Gutiérrez",
    country: "Mexico",
    teamId: 11, // Haas F1 Team-Ferrari
    performance: 82, // Hypothetical value
    reliability: 83, // Hypothetical value
    consistency: 85, // Hypothetical value
    tyreConservation: 78, // Hypothetical value
    racecraft: 86 // Hypothetical value
  },
  {
    id: 13,
    no: 20,
    name: "Kevin Magnussen",
    country: "Denmark",
    teamId: 5, // Renault
    performance: 85, // Hypothetical value
    reliability: 82, // Hypothetical value
    consistency: 87, // Hypothetical value
    tyreConservation: 89, // Hypothetical value
    racecraft: 88 // Hypothetical value
  },
  {
    id: 14,
    no: 30,
    name: "Jolyon Palmer",
    country: "United Kingdom",
    teamId: 5, // Renault
    performance: 83, // Hypothetical value
    reliability: 80, // Hypothetical value
    consistency: 84, // Hypothetical value
    tyreConservation: 87, // Hypothetical value
    racecraft: 86 // Hypothetical value
  },
  {
    id: 15,
    no: 14,
    name: "Fernando Alonso",
    country: "Spain",
    teamId: 2, // McLaren-Honda
    performance: 92, // Hypothetical value
    reliability: 75, // Hypothetical value
    consistency: 95, // Hypothetical value
    tyreConservation: 85, // Hypothetical value
    racecraft: 98 // Hypothetical value
  },
  {
    id: 16,
    no: 22,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 2, // McLaren-Honda
    performance: 89, // Hypothetical value
    reliability: 78, // Hypothetical value
    consistency: 94, // Hypothetical value
    tyreConservation: 84, // Hypothetical value
    racecraft: 95 // Hypothetical value
  },
  {
    id: 17,
    no: 55,
    name: "Carlos Sainz Jr.",
    country: "Spain",
    teamId: 9, // Scuderia Toro Rosso-Ferrari
    performance: 84, // Hypothetical value
    reliability: 80, // Hypothetical value
    consistency: 86, // Hypothetical value
    tyreConservation: 88, // Hypothetical value
    racecraft: 89 // Hypothetical value
  },
  {
    id: 18,
    no: 33,
    name: "Max Verstappen",
    country: "Netherlands",
    teamId: 9, // Scuderia Toro Rosso-Ferrari
    performance: 86, // Hypothetical value
    reliability: 79, // Hypothetical value
    consistency: 85, // Hypothetical value
    tyreConservation: 87, // Hypothetical value
    racecraft: 94 // Hypothetical value
  },
  {
    id: 19,
    no: 9,
    name: "Marcus Ericsson",
    country: "Sweden",
    teamId: 7, // Sauber-Ferrari
    performance: 80, // Hypothetical value
    reliability: 84, // Hypothetical value
    consistency: 83, // Hypothetical value
    tyreConservation: 90, // Hypothetical value
    racecraft: 85 // Hypothetical value
  },
  {
    id: 20,
    no: 12,
    name: "Felipe Nasr",
    country: "Brazil",
    teamId: 7, // Sauber-Ferrari
    performance: 81, // Hypothetical value
    reliability: 83, // Hypothetical value
    consistency: 84, // Hypothetical value
    tyreConservation: 89, // Hypothetical value
    racecraft: 86 // Hypothetical value
  },
  {
    id: 21,
    no: 94,
    name: "Pascal Wehrlein",
    country: "Germany",
    teamId: 10, // Manor Racing MRT-Mercedes
    performance: 78, // Hypothetical value
    reliability: 72, // Hypothetical value
    consistency: 80, // Hypothetical value
    tyreConservation: 75, // Hypothetical value
    racecraft: 78 // Hypothetical value
  },
  {
    id: 22,
    no: 88,
    name: "Rio Haryanto",
    country: "Indonesia",
    teamId: 10, // Manor Racing MRT-Mercedes
    performance: 75, // Hypothetical value
    reliability: 70, // Hypothetical value
    consistency: 78, // Hypothetical value
    tyreConservation: 73, // Hypothetical value
    racecraft: 75 // Hypothetical value
  }
];

export const F1_2016_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "20 March 2016",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Bahrain Grand Prix",
    shortName: "BHR",
    circuit: "Bahrain International Circuit, Sakhir",
    date: "3 April 2016",
    trackId: "bahrain",
    country: "Bahrain"
  },
  {
    id: 3,
    name: "Chinese Grand Prix",
    shortName: "CHN",
    circuit: "Shanghai International Circuit, Shanghai",
    date: "17 April 2016",
    trackId: "shanghai",
    country: "China"
  },
  {
    id: 4,
    name: "Russian Grand Prix",
    shortName: "RUS",
    circuit: "Sochi Autodrom, Sochi",
    date: "1 May 2016",
    trackId: "sochi",
    country: "Russia"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "15 May 2016",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "29 May 2016",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 7,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "12 June 2016",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 8,
    name: "European Grand Prix",
    shortName: "EUR",
    circuit: "Baku City Circuit, Baku",
    date: "19 June 2016",
    trackId: "baku",
    country: "Azerbaijan"
  },
  {
    id: 9,
    name: "Austrian Grand Prix",
    shortName: "AUT",
    circuit: "Red Bull Ring, Spielberg",
    date: "3 July 2016",
    trackId: "a1ring", // Updated ID as requested
    country: "Austria"
  },
  {
    id: 10,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "10 July 2016",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 11,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "24 July 2016",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 12,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Hockenheimring, Hockenheim",
    date: "31 July 2016",
    trackId: "hockenheimnew", // Updated ID as requested
    country: "Germany"
  },
  {
    id: 13,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "28 August 2016",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 14,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "4 September 2016",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 15,
    name: "Singapore Grand Prix",
    shortName: "SIN",
    circuit: "Marina Bay Street Circuit, Singapore",
    date: "18 September 2016",
    trackId: "singapore",
    country: "Singapore"
  },
  {
    id: 16,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "2 October 2016",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 17,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka International Racing Course, Suzuka",
    date: "9 October 2016",
    trackId: "suzuka",
    country: "Japan"
  },
  {
    id: 18,
    name: "United States Grand Prix",
    shortName: "USA",
    circuit: "Circuit of the Americas, Austin",
    date: "23 October 2016",
    trackId: "austin",
    country: "USA"
  },
  {
    id: 19,
    name: "Mexican Grand Prix",
    shortName: "MEX",
    circuit: "Autódromo Hermanos Rodríguez, Mexico City",
    date: "30 October 2016",
    trackId: "mexico",
    country: "Mexico"
  },
  {
    id: 20,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "13 November 2016",
    trackId: "saopaulo",
    country: "Brazil"
  },
  {
    id: 21,
    name: "Abu Dhabi Grand Prix",
    shortName: "ABU",
    circuit: "Yas Marina Circuit, Abu Dhabi",
    date: "27 November 2016",
    trackId: "yasmarina",
    country: "United Arab Emirates"
  }
];