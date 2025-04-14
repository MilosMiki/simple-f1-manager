export const F1_2012_POINTS_SYSTEM = [
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

export const F1_2012_POINTS_FL = 0;
export const F1_2012_POINTS_POLE = 0;

export const F1_2012_TEAMS = [
  {
    id: 1,
    name: "Red Bull Racing-Renault",
    shortName: "Red Bull",
    country: "Austria",
    reliability: 95,
    chassis: 97,
    engine: 95,
    tyreConservation: 95,
    color: "#5a00ee", // Jaguar Green
  },
  {
    id: 2,
    name: "McLaren-Mercedes",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 94,
    chassis: 96,
    engine: 96,
    tyreConservation: 94,
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
    color: "#bbbbbb", // Petronas Green/Blue
  },
  {
    id: 5,
    name: "Lotus F1 Team-Renault", // Official full name
    shortName: "Lotus",
    country: "United Kingdom", // Team based in Enstone, UK
    reliability: 91,
    chassis: 93,
    engine: 94,
    tyreConservation: 93,
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
    color: "#000000", // Dark Green
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
    name: "HRT F1 Team-Cosworth", // Official full name
    shortName: "HRT",
    country: "Spain",
    reliability: 73,
    chassis: 78,
    engine: 88,
    tyreConservation: 78,
    color: "#947a27", // Magenta
  },
  {
    id: 12,
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

export const F1_2012_DRIVERS = [
  {
    id: 1,
    no: 1,
    name: "Sebastian Vettel",
    country: "Germany",
    teamId: 1, // Red Bull Racing-Renault
    performance: 98,
    reliability: 87,
    consistency: 90,
    tyreConservation: 90,
    racecraft: 98
  },
  {
    id: 2,
    no: 2,
    name: "Mark Webber",
    country: "Australia",
    teamId: 1, // Red Bull Racing-Renault
    performance: 88,
    reliability: 93,
    consistency: 95,
    tyreConservation: 92,
    racecraft: 96
  },
  {
    id: 3,
    no: 3,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 2, // McLaren-Mercedes
    performance: 97,
    reliability: 94,
    consistency: 96,
    tyreConservation: 95,
    racecraft: 97
  },
  {
    id: 4,
    no: 4,
    name: "Lewis Hamilton",
    country: "United Kingdom",
    teamId: 2, // McLaren-Mercedes
    performance: 99,
    reliability: 92,
    consistency: 90,
    tyreConservation: 92,
    racecraft: 98
  },
  {
    id: 5,
    no: 5,
    name: "Fernando Alonso",
    country: "Spain",
    teamId: 3, // Ferrari
    performance: 97,
    reliability: 93,
    consistency: 93,
    tyreConservation: 100,
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
    name: "Michael Schumacher",
    country: "Germany",
    teamId: 4, // Mercedes AMG Petronas F1 Team
    performance: 96,
    reliability: 70,
    consistency: 70,
    tyreConservation: 96,
    racecraft: 75
  },
  {
    id: 8,
    no: 8,
    name: "Nico Rosberg",
    country: "Germany",
    teamId: 4, // Mercedes AMG Petronas F1 Team
    performance: 96,
    reliability: 90,
    consistency: 93,
    tyreConservation: 92,
    racecraft: 95
  },
  {
    id: 9,
    no: 9,
    name: "Kimi Räikkönen",
    country: "Finland",
    teamId: 5, // Lotus F1 Team-Renault
    performance: 95,
    reliability: 91,
    consistency: 94,
    tyreConservation: 99,
    racecraft: 96
  },
  {
    id: 10,
    no: 10,
    name: "Romain Grosjean",
    country: "France",
    teamId: 5, // Lotus F1 Team-Renault
    performance: 92,
    reliability: 70,
    consistency: 90,
    tyreConservation: 92,
    racecraft: 93
  },
  {
    id: 11,
    no: 11,
    name: "Paul di Resta",
    country: "United Kingdom",
    teamId: 6, // Sahara Force India-Mercedes
    performance: 89,
    reliability: 84,
    consistency: 87,
    tyreConservation: 87,
    racecraft: 90
  },
  {
    id: 12,
    no: 12,
    name: "Nico Hülkenberg",
    country: "Germany",
    teamId: 6, // Sahara Force India-Mercedes
    performance: 88,
    reliability: 82,
    consistency: 86,
    tyreConservation: 86,
    racecraft: 89
  },
  {
    id: 13,
    no: 14,
    name: "Kamui Kobayashi",
    country: "Japan",
    teamId: 7, // Sauber-Ferrari
    performance: 90,
    reliability: 88,
    consistency: 89,
    tyreConservation: 100,
    racecraft: 92
  },
  {
    id: 14,
    no: 15,
    name: "Sergio Pérez",
    country: "Mexico",
    teamId: 7, // Sauber-Ferrari
    performance: 89,
    reliability: 86,
    consistency: 87,
    tyreConservation: 100,
    racecraft: 85
  },
  {
    id: 15,
    no: 16,
    name: "Pastor Maldonado",
    country: "Venezuela",
    teamId: 8, // Williams-Renault
    performance: 95,
    reliability: 50,
    consistency: 50,
    tyreConservation: 95,
    racecraft: 50
  },
  {
    id: 16,
    no: 17,
    name: "Bruno Senna",
    country: "Brazil",
    teamId: 8, // Williams-Renault
    performance: 86,
    reliability: 82,
    consistency: 84,
    tyreConservation: 85,
    racecraft: 87
  },
  {
    id: 17,
    no: 18,
    name: "Daniel Ricciardo",
    country: "Australia",
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
    name: "Jean-Éric Vergne",
    country: "France",
    teamId: 9, // Scuderia Toro Rosso-Ferrari
    performance: 83,
    reliability: 78,
    consistency: 81,
    tyreConservation: 82,
    racecraft: 85
  },
  {
    id: 19,
    no: 20,
    name: "Heikki Kovalainen",
    country: "Finland",
    teamId: 10, // Caterham F1 Team-Renault
    performance: 85,
    reliability: 83,
    consistency: 84,
    tyreConservation: 84,
    racecraft: 87
  },
  {
    id: 20,
    no: 21,
    name: "Vitaly Petrov",
    country: "Russia",
    teamId: 10, // Caterham F1 Team-Renault
    performance: 83,
    reliability: 81,
    consistency: 82,
    tyreConservation: 83,
    racecraft: 85
  },
  {
    id: 21,
    no: 24,
    name: "Timo Glock",
    country: "Germany",
    teamId: 12, // Marussia F1 Team-Cosworth
    performance: 79,
    reliability: 73,
    consistency: 75,
    tyreConservation: 75,
    racecraft: 81
  },
  {
    id: 22,
    no: 25,
    name: "Charles Pic",
    country: "France",
    teamId: 12, // Marussia F1 Team-Cosworth
    performance: 77,
    reliability: 71,
    consistency: 73,
    tyreConservation: 73,
    racecraft: 79
  },
  {
    id: 23,
    no: 22,
    name: "Pedro de la Rosa",
    country: "Spain",
    teamId: 11, // HRT F1 Team-Cosworth
    performance: 75,
    reliability: 69,
    consistency: 71,
    tyreConservation: 71,
    racecraft: 77
  },
  {
    id: 24,
    no: 23,
    name: "Narain Karthikeyan",
    country: "India",
    teamId: 11, // HRT F1 Team-Cosworth
    performance: 73,
    reliability: 67,
    consistency: 69,
    tyreConservation: 69,
    racecraft: 75
  }
];

export const F1_2012_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "18 March 2012",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "25 March 2012",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 3,
    name: "Chinese Grand Prix",
    shortName: "CHN",
    circuit: "Shanghai International Circuit, Shanghai",
    date: "15 April 2012",
    trackId: "shanghai",
    country: "China"
  },
  {
    id: 4,
    name: "Bahrain Grand Prix",
    shortName: "BHR",
    circuit: "Bahrain International Circuit, Sakhir",
    date: "22 April 2012",
    trackId: "bahrain",
    country: "Bahrain"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "13 May 2012",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "27 May 2012",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 7,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "10 June 2012",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 8,
    name: "European Grand Prix",
    shortName: "EUR",
    circuit: "Valencia Street Circuit, Valencia",
    date: "24 June 2012",
    trackId: "valencia",
    country: "Spain"
  },
  {
    id: 9,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "8 July 2012",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 10,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Hockenheimring, Hockenheim",
    date: "22 July 2012",
    trackId: "hockenheimnew",
    country: "Germany"
  },
  {
    id: 11,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "29 July 2012",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 12,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "2 September 2012",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 13,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "9 September 2012",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 14,
    name: "Singapore Grand Prix",
    shortName: "SIN",
    circuit: "Marina Bay Street Circuit, Singapore",
    date: "23 September 2012",
    trackId: "singapore",
    country: "Singapore"
  },
  {
    id: 15,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka International Racing Course, Suzuka",
    date: "7 October 2012",
    trackId: "suzuka",
    country: "Japan"
  },
  {
    id: 16,
    name: "Korean Grand Prix",
    shortName: "KOR",
    circuit: "Korean International Circuit, Yeongam",
    date: "14 October 2012",
    trackId: "yeongam",
    country: "South Korea"
  },
  {
    id: 17,
    name: "Indian Grand Prix",
    shortName: "IND",
    circuit: "Buddh International Circuit, Greater Noida",
    date: "28 October 2012",
    trackId: "buddh",
    country: "India"
  },
  {
    id: 18,
    name: "Abu Dhabi Grand Prix",
    shortName: "ABU",
    circuit: "Yas Marina Circuit, Abu Dhabi",
    date: "4 November 2012",
    trackId: "yasmarina",
    country: "United Arab Emirates"
  },
  {
    id: 19,
    name: "United States Grand Prix",
    shortName: "USA",
    circuit: "Circuit of the Americas, Austin",
    date: "18 November 2012",
    trackId: "austin",
    country: "USA"
  },
  {
    id: 20,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "25 November 2012",
    trackId: "saopaulo",
    country: "Brazil"
  }
];