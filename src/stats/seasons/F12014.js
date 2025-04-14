export const F1_2014_POINTS_SYSTEM = [
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

export const F1_2014_POINTS_FL = 0;
export const F1_2014_POINTS_POLE = 0;
export const F1_2014_DOUBLE_POINTS = true;

export const F1_2014_TEAMS = [
  {
    id: 1,
    name: "Infiniti Red Bull Racing-Renault", // Name change
    shortName: "Red Bull",
    country: "Austria", // Operating from UK
    reliability: 70, // Hypothetical value
    chassis: 105, // Hypothetical value
    engine: 85, // Hypothetical value (new engine regulations)
    tyreConservation: 90, // Hypothetical value
    color: "#5a00ee", // Jaguar Green (Likely carried over color representation)
  },
  {
    id: 2,
    name: "McLaren-Mercedes", // Engine change
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 85, // Hypothetical value
    chassis: 80, // Hypothetical value
    engine: 100, // Hypothetical value (new engine regulations)
    tyreConservation: 80, // Hypothetical value
    color: "#808080", // McLaren Silver
  },
  {
    id: 3,
    name: "Scuderia Ferrari",
    shortName: "Ferrari",
    country: "Italy",
    reliability: 88, // Hypothetical value
    chassis: 85, // Hypothetical value
    engine: 92, // Hypothetical value (new engine regulations)
    tyreConservation: 95, // Hypothetical value
    color: "#DC0000", // Ferrari Red
  },
  {
    id: 4,
    name: "Mercedes AMG Petronas F1 Team",
    shortName: "Mercedes",
    country: "Germany",
    reliability: 89, // Hypothetical value
    chassis: 94, // Hypothetical value
    engine: 100, // Hypothetical value (new engine regulations)
    tyreConservation: 88, // Hypothetical value
    color: "#bbbbbb", // Petronas Green/Blue (Likely carried over color representation)
  },
  {
    id: 5,
    name: "Lotus F1 Team-Renault",
    shortName: "Lotus",
    country: "United Kingdom",
    reliability: 83, // Hypothetical value
    chassis: 85, // Hypothetical value
    engine: 88, // Hypothetical value (new engine regulations)
    tyreConservation: 100, // Hypothetical value
    color: "#663300", // Black and Gold
  },
  {
    id: 6,
    name: "Sahara Force India-Mercedes",
    shortName: "Force India",
    country: "India",
    reliability: 87, // Hypothetical value
    chassis: 85, // Hypothetical value
    engine: 98, // Hypothetical value (new engine regulations)
    tyreConservation: 98, // Hypothetical value
    color: "#ff8c00", // Spyker Orange
  },
  {
    id: 7,
    name: "Sauber-Ferrari",
    shortName: "Sauber",
    country: "Switzerland",
    reliability: 89, // Hypothetical value
    chassis: 75, // Hypothetical value
    engine: 92, // Hypothetical value (new engine regulations)
    tyreConservation: 95, // Hypothetical value
    color: "#000000", // Dark Green (Likely carried over color representation)
  },
  {
    id: 8,
    name: "Williams Martini Racing-Mercedes", // New sponsor, engine change
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 95, // Hypothetical value
    chassis: 88, // Hypothetical value
    engine: 110, // Hypothetical value (new engine regulations)
    tyreConservation: 85, // Hypothetical value
    color: "#005Aee", // Williams Blue
  },
  {
    id: 9,
    name: "Scuderia Toro Rosso-Renault", // Engine change
    shortName: "Toro Rosso",
    country: "Italy", // Operating from UK
    reliability: 70, // Hypothetical value
    chassis: 75, // Hypothetical value
    engine: 81, // Hypothetical value (new engine regulations)
    tyreConservation: 85, // Hypothetical value
    color: "#4682b4", // Steel Blue
  },
  {
    id: 10,
    name: "Caterham F1 Team-Renault",
    shortName: "Caterham",
    country: "Malaysia", // Operating from UK
    reliability: 60, // Hypothetical value
    chassis: 65, // Hypothetical value
    engine: 75, // Hypothetical value (new engine regulations)
    tyreConservation: 65, // Hypothetical value
    color: "#00ff00", // Caterham Green
  },
  {
    id: 11,
    name: "Marussia F1 Team-Ferrari", // Engine change
    shortName: "Marussia",
    country: "Russia", // Operating from UK
    reliability: 85, // Hypothetical value
    chassis: 55, // Hypothetical value
    engine: 82, // Hypothetical value (new engine regulations)
    tyreConservation: 65, // Hypothetical value
    color: "#ff5555", // Red
  }
];

export const F1_2014_DRIVERS = [
  {
    id: 1,
    no: 1,
    name: "Sebastian Vettel",
    country: "Germany",
    teamId: 1, // Infiniti Red Bull Racing-Renault
    performance: 70,
    reliability: 90,
    consistency: 119,
    tyreConservation: 91,
    racecraft: 96
  },
  {
    id: 2,
    no: 3,
    name: "Daniel Ricciardo",
    country: "Australia",
    teamId: 1, // Infiniti Red Bull Racing-Renault
    performance: 63,
    reliability: 85,
    consistency: 114,
    tyreConservation: 90,
    racecraft: 92
  },
  {
    id: 3,
    no: 22,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 2, // McLaren-Mercedes
    performance: 64,
    reliability: 93,
    consistency: 119,
    tyreConservation: 95,
    racecraft: 93
  },
  {
    id: 4,
    no: 20,
    name: "Kevin Magnussen",
    country: "Denmark",
    teamId: 2, // McLaren-Mercedes
    performance: 59,
    reliability: 82,
    consistency: 108,
    tyreConservation: 85,
    racecraft: 87
  },
  {
    id: 5,
    no: 14,
    name: "Fernando Alonso",
    country: "Spain",
    teamId: 3, // Scuderia Ferrari
    performance: 77,
    reliability: 94,
    consistency: 117,
    tyreConservation: 95,
    racecraft: 100
  },
  {
    id: 6,
    no: 7,
    name: "Kimi Räikkönen",
    country: "Finland",
    teamId: 3, // Scuderia Ferrari
    performance: 65,
    reliability: 90,
    consistency: 122,
    tyreConservation: 93,
    racecraft: 95
  },
  {
    id: 7,
    no: 44,
    name: "Lewis Hamilton",
    country: "United Kingdom",
    teamId: 4, // Mercedes AMG Petronas F1 Team
    performance: 72,
    reliability: 92,
    consistency: 121,
    tyreConservation: 94,
    racecraft: 98
  },
  {
    id: 8,
    no: 6,
    name: "Nico Rosberg",
    country: "Germany",
    teamId: 4, // Mercedes AMG Petronas F1 Team
    performance: 70,
    reliability: 94,
    consistency: 120,
    tyreConservation: 93,
    racecraft: 96
  },
  {
    id: 9,
    no: 8,
    name: "Romain Grosjean",
    country: "France",
    teamId: 5, // Lotus F1 Team-Renault
    performance: 63,
    reliability: 85,
    consistency: 111,
    tyreConservation: 89,
    racecraft: 90
  },
  {
    id: 10,
    no: 13,
    name: "Pastor Maldonado",
    country: "Venezuela",
    teamId: 5, // Lotus F1 Team-Renault
    performance: 57,
    reliability: 78,
    consistency: 105,
    tyreConservation: 83,
    racecraft: 85
  },
  {
    id: 11,
    no: 27,
    name: "Nico Hülkenberg",
    country: "Germany",
    teamId: 6, // Sahara Force India-Mercedes
    performance: 64,
    reliability: 88,
    consistency: 114,
    tyreConservation: 88,
    racecraft: 91
  },
  {
    id: 12,
    no: 11,
    name: "Sergio Pérez",
    country: "Mexico",
    teamId: 6, // Sahara Force India-Mercedes
    performance: 61,
    reliability: 84,
    consistency: 110,
    tyreConservation: 90,
    racecraft: 89
  },
  {
    id: 13,
    no: 99,
    name: "Adrian Sutil",
    country: "Germany",
    teamId: 7, // Sauber-Ferrari
    performance: 55,
    reliability: 82,
    consistency: 106,
    tyreConservation: 82,
    racecraft: 83
  },
  {
    id: 14,
    no: 21,
    name: "Esteban Gutiérrez",
    country: "Mexico",
    teamId: 7, // Sauber-Ferrari
    performance: 53,
    reliability: 80,
    consistency: 104,
    tyreConservation: 80,
    racecraft: 81
  },
  {
    id: 15,
    no: 19,
    name: "Felipe Massa",
    country: "Brazil",
    teamId: 8, // Williams Martini Racing-Mercedes
    performance: 63,
    reliability: 89,
    consistency: 113,
    tyreConservation: 87,
    racecraft: 90
  },
  {
    id: 16,
    no: 77,
    name: "Valtteri Bottas",
    country: "Finland",
    teamId: 8, // Williams Martini Racing-Mercedes
    performance: 60,
    reliability: 87,
    consistency: 111,
    tyreConservation: 86,
    racecraft: 88
  },
  {
    id: 17,
    no: 25,
    name: "Jean-Éric Vergne",
    country: "France",
    teamId: 9, // Scuderia Toro Rosso-Renault
    performance: 58,
    reliability: 80,
    consistency: 107,
    tyreConservation: 83,
    racecraft: 85
  },
  {
    id: 18,
    no: 26,
    name: "Daniil Kvyat",
    country: "Russia",
    teamId: 9, // Scuderia Toro Rosso-Renault
    performance: 54,
    reliability: 75,
    consistency: 103,
    tyreConservation: 80,
    racecraft: 82
  },
  {
    id: 19,
    no: 10,
    name: "Kamui Kobayashi",
    country: "Japan",
    teamId: 10, // Caterham F1 Team-Renault
    performance: 53,
    reliability: 80,
    consistency: 102,
    tyreConservation: 78,
    racecraft: 81
  },
  {
    id: 20,
    no: 9,
    name: "Marcus Ericsson",
    country: "Sweden",
    teamId: 10, // Caterham F1 Team-Renault
    performance: 47,
    reliability: 75,
    consistency: 98,
    tyreConservation: 74,
    racecraft: 76
  },
  {
    id: 21,
    no: 17,
    name: "Jules Bianchi",
    country: "France",
    teamId: 11, // Marussia F1 Team-Ferrari
    performance: 51,
    reliability: 78,
    consistency: 102,
    tyreConservation: 77,
    racecraft: 79
  },
  {
    id: 22,
    no: 4,
    name: "Max Chilton",
    country: "United Kingdom",
    teamId: 11, // Marussia F1 Team-Ferrari
    performance: 45,
    reliability: 75,
    consistency: 97,
    tyreConservation: 73,
    racecraft: 75
  }
];

export const F1_2014_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "16 March 2014",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "30 March 2014",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 3,
    name: "Bahrain Grand Prix",
    shortName: "BHR",
    circuit: "Bahrain International Circuit, Sakhir",
    date: "6 April 2014",
    trackId: "bahrain",
    country: "Bahrain"
  },
  {
    id: 4,
    name: "Chinese Grand Prix",
    shortName: "CHN",
    circuit: "Shanghai International Circuit, Shanghai",
    date: "20 April 2014",
    trackId: "shanghai",
    country: "China"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "11 May 2014",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "25 May 2014",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 7,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "8 June 2014",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 8,
    name: "Austrian Grand Prix",
    shortName: "AUT",
    circuit: "Red Bull Ring, Spielberg",
    date: "22 June 2014",
    trackId: "a1ring",
    country: "Austria"
  },
  {
    id: 9,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "6 July 2014",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 10,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Hockenheimring, Hockenheim",
    date: "20 July 2014",
    trackId: "hockenheimnew",
    country: "Germany"
  },
  {
    id: 11,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "27 July 2014",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 12,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "24 August 2014",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 13,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "7 September 2014",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 14,
    name: "Singapore Grand Prix",
    shortName: "SIN",
    circuit: "Marina Bay Street Circuit, Singapore",
    date: "21 September 2014",
    trackId: "singapore",
    country: "Singapore"
  },
  {
    id: 15,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka International Racing Course, Suzuka",
    date: "5 October 2014",
    trackId: "suzuka",
    country: "Japan"
  },
  {
    id: 16,
    name: "Russian Grand Prix",
    shortName: "RUS",
    circuit: "Sochi Autodrom, Sochi",
    date: "12 October 2014",
    trackId: "sochi",
    country: "Russia"
  },
  {
    id: 17,
    name: "United States Grand Prix",
    shortName: "USA",
    circuit: "Circuit of the Americas, Austin",
    date: "2 November 2014",
    trackId: "austin",
    country: "USA"
  },
  {
    id: 18,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "9 November 2014",
    trackId: "saopaulo",
    country: "Brazil"
  },
  {
    id: 19,
    name: "Abu Dhabi Grand Prix",
    shortName: "ABU",
    circuit: "Yas Marina Circuit, Abu Dhabi",
    date: "23 November 2014",
    trackId: "yasmarina",
    country: "United Arab Emirates"
  }
];