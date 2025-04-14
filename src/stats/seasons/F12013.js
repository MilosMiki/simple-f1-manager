export const F1_2013_POINTS_SYSTEM = [
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

export const F1_2013_POINTS_FL = 0;
export const F1_2013_POINTS_POLE = 0;

export const F1_2013_TEAMS = [
  {
    id: 1,
    name: "Red Bull Racing-Renault",
    shortName: "Red Bull",
    country: "Austria",
    reliability: 90,
    chassis: 117,
    engine: 93,
    tyreConservation: 90,
    color: "#5a00ee", // Jaguar Green (Likely carried over color representation)
  },
  {
    id: 2,
    name: "McLaren-Mercedes",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 94,
    chassis: 85,
    engine: 96,
    tyreConservation: 90,
    color: "#808080", // McLaren Silver
  },
  {
    id: 3,
    name: "Ferrari",
    shortName: "Ferrari",
    country: "Italy",
    reliability: 93,
    chassis: 95,
    engine: 94,
    tyreConservation: 93,
    color: "#DC0000", // Ferrari Red
  },
  {
    id: 4,
    name: "Mercedes AMG Petronas F1 Team", // Official full name
    shortName: "Mercedes",
    country: "Germany",
    reliability: 93,
    chassis: 94,
    engine: 96,
    tyreConservation: 92,
    color: "#bbbbbb", // Petronas Green/Blue (Likely carried over color representation)
  },
  {
    id: 5,
    name: "Lotus F1 Team-Renault", // Official full name
    shortName: "Lotus",
    country: "United Kingdom", // Team based in Enstone, UK
    reliability: 91,
    chassis: 93,
    engine: 93,
    tyreConservation: 99,
    color: "#663300", // Black and Gold (iconic Lotus livery return)
  },
  {
    id: 6,
    name: "Sahara Force India-Mercedes", // Official full name
    shortName: "Force India",
    country: "India",
    reliability: 86,
    chassis: 89,
    engine: 96,
    tyreConservation: 88,
    color: "#ff8c00", // Spyker Orange
  },
  {
    id: 7,
    name: "Sauber-Ferrari",
    shortName: "Sauber",
    country: "Switzerland",
    reliability: 90,
    chassis: 92,
    engine: 94,
    tyreConservation: 91,
    color: "#000000", // Dark Green (Likely carried over color representation)
  },
  {
    id: 8,
    name: "Williams-Renault", // Engine change
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 88,
    chassis: 91,
    engine: 94,
    tyreConservation: 90,
    color: "#005Aee", // Williams Blue
  },
  {
    id: 9,
    name: "Scuderia Toro Rosso-Ferrari", // Official full name
    shortName: "Toro Rosso",
    country: "Italy",
    reliability: 83,
    chassis: 86,
    engine: 91,
    tyreConservation: 86,
    color: "#4682b4", // Steel Blue
  },
  {
    id: 10,
    name: "Caterham F1 Team-Renault", // Rebranded from Team Lotus
    shortName: "Caterham",
    country: "Malaysia", // Team still operating from UK base
    reliability: 85,
    chassis: 88,
    engine: 93,
    tyreConservation: 87,
    color: "#00ff00", // Caterham Green
  },
  {
    id: 11,
    name: "Marussia F1 Team-Cosworth", // Rebranded from Virgin Racing
    shortName: "Marussia",
    country: "Russia", // Team still operating from UK base
    reliability: 75,
    chassis: 80,
    engine: 89,
    tyreConservation: 80,
    color: "#ff5555", // Red
  }
];

export const F1_2013_DRIVERS = [
  {
    id: 1,
    no: 1,
    name: "Sebastian Vettel",
    country: "Germany",
    teamId: 1, // Red Bull Racing-Renault
    performance: 96,
    reliability: 92,
    consistency: 90,
    tyreConservation: 92,
    racecraft: 96
  },
  {
    id: 2,
    no: 2,
    name: "Mark Webber",
    country: "Australia",
    teamId: 1, // Red Bull Racing-Renault
    performance: 82,
    reliability: 85,
    consistency: 91,
    tyreConservation: 95,
    racecraft: 96
  },
  {
    id: 3,
    no: 3,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 2, // McLaren-Mercedes
    performance: 96,
    reliability: 94,
    consistency: 95,
    tyreConservation: 94,
    racecraft: 97
  },
  {
    id: 4,
    no: 4,
    name: "Sergio Pérez",
    country: "Mexico",
    teamId: 2, // McLaren-Mercedes
    performance: 83,
    reliability: 88,
    consistency: 85,
    tyreConservation: 99,
    racecraft: 95
  },
  {
    id: 5,
    no: 5,
    name: "Fernando Alonso",
    country: "Spain",
    teamId: 3, // Ferrari
    performance: 97,
    reliability: 93,
    consistency: 96,
    tyreConservation: 94,
    racecraft: 98
  },
  {
    id: 6,
    no: 6,
    name: "Felipe Massa",
    country: "Brazil",
    teamId: 3, // Ferrari
    performance: 93,
    reliability: 91,
    consistency: 92,
    tyreConservation: 92,
    racecraft: 94
  },
  {
    id: 7,
    no: 7,
    name: "Kimi Räikkönen",
    country: "Finland",
    teamId: 5, // Lotus F1 Team-Renault
    performance: 95,
    reliability: 91,
    consistency: 94,
    tyreConservation: 94,
    racecraft: 96
  },
  {
    id: 8,
    no: 8,
    name: "Romain Grosjean",
    country: "France",
    teamId: 5, // Lotus F1 Team-Renault
    performance: 92,
    reliability: 89,
    consistency: 90,
    tyreConservation: 92,
    racecraft: 93
  },
  {
    id: 9,
    no: 9,
    name: "Nico Rosberg",
    country: "Germany",
    teamId: 4, // Mercedes AMG Petronas F1 Team
    performance: 94,
    reliability: 92,
    consistency: 93,
    tyreConservation: 93,
    racecraft: 95
  },
  {
    id: 10,
    no: 10,
    name: "Lewis Hamilton",
    country: "United Kingdom",
    teamId: 4, // Mercedes AMG Petronas F1 Team
    performance: 96,
    reliability: 90,
    consistency: 94,
    tyreConservation: 92,
    racecraft: 97
  },
  {
    id: 11,
    no: 11,
    name: "Nico Hülkenberg",
    country: "Germany",
    teamId: 7, // Sauber-Ferrari
    performance: 89,
    reliability: 88,
    consistency: 87,
    tyreConservation: 87,
    racecraft: 90
  },
  {
    id: 12,
    no: 12,
    name: "Esteban Gutiérrez",
    country: "Mexico",
    teamId: 7, // Sauber-Ferrari
    performance: 79,
    reliability: 86,
    consistency: 88,
    tyreConservation: 85,
    racecraft: 75
  },
  {
    id: 13,
    no: 14,
    name: "Paul di Resta",
    country: "United Kingdom",
    teamId: 6, // Sahara Force India-Mercedes
    performance: 88,
    reliability: 84,
    consistency: 86,
    tyreConservation: 86,
    racecraft: 89
  },
  {
    id: 14,
    no: 15,
    name: "Adrian Sutil",
    country: "Germany",
    teamId: 6, // Sahara Force India-Mercedes
    performance: 87,
    reliability: 82,
    consistency: 85,
    tyreConservation: 85,
    racecraft: 88
  },
  {
    id: 15,
    no: 16,
    name: "Pastor Maldonado",
    country: "Venezuela",
    teamId: 8, // Williams-Renault
    performance: 87,
    reliability: 86,
    consistency: 85,
    tyreConservation: 86,
    racecraft: 88
  },
  {
    id: 16,
    no: 17,
    name: "Valtteri Bottas",
    country: "Finland",
    teamId: 8, // Williams-Renault
    performance: 85,
    reliability: 84,
    consistency: 83,
    tyreConservation: 85,
    racecraft: 87
  },
  {
    id: 17,
    no: 18,
    name: "Jean-Éric Vergne",
    country: "France",
    teamId: 9, // Scuderia Toro Rosso-Ferrari
    performance: 84,
    reliability: 80,
    consistency: 82,
    tyreConservation: 83,
    racecraft: 86
  },
  {
    id: 18,
    no: 19,
    name: "Daniel Ricciardo",
    country: "Australia",
    teamId: 9, // Scuderia Toro Rosso-Ferrari
    performance: 86,
    reliability: 78,
    consistency: 84,
    tyreConservation: 84,
    racecraft: 87
  },
  {
    id: 19,
    no: 20,
    name: "Charles Pic",
    country: "France",
    teamId: 10, // Caterham F1 Team-Renault
    performance: 78,
    reliability: 83,
    consistency: 76,
    tyreConservation: 78,
    racecraft: 80
  },
  {
    id: 20,
    no: 21,
    name: "Giedo van der Garde",
    country: "Netherlands",
    teamId: 10, // Caterham F1 Team-Renault
    performance: 76,
    reliability: 81,
    consistency: 74,
    tyreConservation: 76,
    racecraft: 78
  },
  {
    id: 21,
    no: 22,
    name: "Jules Bianchi",
    country: "France",
    teamId: 11, // Marussia F1 Team-Cosworth
    performance: 77,
    reliability: 77,
    consistency: 75,
    tyreConservation: 77,
    racecraft: 79
  },
  {
    id: 22,
    no: 23,
    name: "Max Chilton",
    country: "United Kingdom",
    teamId: 11, // Marussia F1 Team-Cosworth
    performance: 75,
    reliability: 75,
    consistency: 73,
    tyreConservation: 75,
    racecraft: 77
  }
];

export const F1_2013_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "17 March 2013",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "24 March 2013",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 3,
    name: "Chinese Grand Prix",
    shortName: "CHN",
    circuit: "Shanghai International Circuit, Shanghai",
    date: "14 April 2013",
    trackId: "shanghai",
    country: "China"
  },
  {
    id: 4,
    name: "Bahrain Grand Prix",
    shortName: "BHR",
    circuit: "Bahrain International Circuit, Sakhir",
    date: "21 April 2013",
    trackId: "bahrain",
    country: "Bahrain"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "12 May 2013",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "26 May 2013",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 7,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "9 June 2013",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 8,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "30 June 2013",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 9,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Nürburgring, Nürburg",
    date: "7 July 2013",
    trackId: "nurburgring",
    country: "Germany"
  },
  {
    id: 10,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "28 July 2013",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 11,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "25 August 2013",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 12,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "8 September 2013",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 13,
    name: "Singapore Grand Prix",
    shortName: "SIN",
    circuit: "Marina Bay Street Circuit, Singapore",
    date: "22 September 2013",
    trackId: "singapore",
    country: "Singapore"
  },
  {
    id: 14,
    name: "Korean Grand Prix",
    shortName: "KOR",
    circuit: "Korean International Circuit, Yeongam",
    date: "6 October 2013",
    trackId: "yeongam",
    country: "South Korea"
  },
  {
    id: 15,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka International Racing Course, Suzuka",
    date: "13 October 2013",
    trackId: "suzuka",
    country: "Japan"
  },
  {
    id: 16,
    name: "Indian Grand Prix",
    shortName: "IND",
    circuit: "Buddh International Circuit, Greater Noida",
    date: "27 October 2013",
    trackId: "buddh",
    country: "India"
  },
  {
    id: 17,
    name: "Abu Dhabi Grand Prix",
    shortName: "ABU",
    circuit: "Yas Marina Circuit, Abu Dhabi",
    date: "3 November 2013",
    trackId: "yasmarina",
    country: "United Arab Emirates"
  },
  {
    id: 18,
    name: "United States Grand Prix",
    shortName: "USA",
    circuit: "Circuit of the Americas, Austin",
    date: "17 November 2013",
    trackId: "austin",
    country: "USA"
  },
  {
    id: 19,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "24 November 2013",
    trackId: "saopaulo",
    country: "Brazil"
  }
];