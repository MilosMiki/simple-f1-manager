export const F1_2011_POINTS_SYSTEM = [
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

export const F1_2011_POINTS_FL = 0;
export const F1_2011_POINTS_POLE = 0;

export const F1_2011_TEAMS = [
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
    name: "Mercedes GP",
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
    name: "Renault", // Renamed Lotus Renault GP later in the season
    shortName: "Renault",
    country: "France",
    reliability: 90,
    chassis: 92,
    engine: 93,
    tyreConservation: 91,
    color: "#663300", // Yellow
  },
  {
    id: 6,
    name: "Williams-Cosworth",
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 87,
    chassis: 90,
    engine: 89,
    tyreConservation: 89,
    color: "#005Aee", // Williams Blue
  },
  {
    id: 7,
    name: "Force India-Mercedes",
    shortName: "Force India",
    country: "India",
    reliability: 84,
    chassis: 88,
    engine: 96,
    tyreConservation: 87,
    color: "#ff8c00", // Spyker Orange
  },
  {
    id: 8,
    name: "Sauber-Ferrari",
    shortName: "Sauber",
    country: "Switzerland",
    reliability: 89,
    chassis: 91,
    engine: 93,
    tyreConservation: 90,
    color: "#000000", // Dark Green
  },
  {
    id: 9,
    name: "Toro Rosso-Ferrari",
    shortName: "Toro Rosso",
    country: "Italy",
    reliability: 82,
    chassis: 85,
    engine: 91,
    tyreConservation: 85,
    color: "#4682b4", // Steel Blue
  },
  {
    id: 10,
    name: "Team Lotus-Renault", // Renamed from Lotus-Cosworth
    shortName: "Lotus",
    country: "Malaysia",
    reliability: 88,
    chassis: 91,
    engine: 93,
    tyreConservation: 90,
    color: "#008000", // British Racing Green
  },
  {
    id: 11,
    name: "HRT-Cosworth", // Renamed from Hispania Racing
    shortName: "HRT",
    country: "Spain",
    reliability: 72,
    chassis: 77,
    engine: 87,
    tyreConservation: 77,
    color: "#947a27", // Magenta
  },
  {
    id: 12,
    name: "Virgin Racing-Cosworth",
    shortName: "Virgin",
    country: "United Kingdom",
    reliability: 74,
    chassis: 79,
    engine: 88,
    tyreConservation: 79,
    color: "#ff5555", // Red
  }
];

export const F1_2011_DRIVERS = [
  {
    id: 5,
    no: 1,
    name: "Sebastian Vettel",
    country: "Germany",
    teamId: 1, // Red Bull Racing-Renault
    performance: 98,
    reliability: 95,
    consistency: 97,
    tyreConservation: 96,
    racecraft: 98
  },
  {
    id: 6,
    no: 2,
    name: "Mark Webber",
    country: "Australia",
    teamId: 1, // Red Bull Racing-Renault
    performance: 96,
    reliability: 93,
    consistency: 95,
    tyreConservation: 95,
    racecraft: 96
  },
  {
    id: 3,
    no: 3,
    name: "Lewis Hamilton",
    country: "United Kingdom",
    teamId: 2, // McLaren-Mercedes
    performance: 97,
    reliability: 94,
    consistency: 95,
    tyreConservation: 94,
    racecraft: 97
  },
  {
    id: 4,
    no: 4,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 2, // McLaren-Mercedes
    performance: 95,
    reliability: 92,
    consistency: 94,
    tyreConservation: 93,
    racecraft: 96
  },
  {
    id: 7,
    no: 5,
    name: "Fernando Alonso",
    country: "Spain",
    teamId: 3, // Ferrari
    performance: 96,
    reliability: 93,
    consistency: 95,
    tyreConservation: 94,
    racecraft: 97
  },
  {
    id: 8,
    no: 6,
    name: "Felipe Massa",
    country: "Brazil",
    teamId: 3, // Ferrari
    performance: 94,
    reliability: 91,
    consistency: 93,
    tyreConservation: 93,
    racecraft: 95
  },
  {
    id: 9,
    no: 7,
    name: "Michael Schumacher",
    country: "Germany",
    teamId: 4, // Mercedes GP
    performance: 93,
    reliability: 92,
    consistency: 92,
    tyreConservation: 91,
    racecraft: 95
  },
  {
    id: 10,
    no: 8,
    name: "Nico Rosberg",
    country: "Germany",
    teamId: 4, // Mercedes GP
    performance: 91,
    reliability: 90,
    consistency: 91,
    tyreConservation: 90,
    racecraft: 93
  },
  {
    id: 11,
    no: 9,
    name: "Nick Heidfeld",
    country: "Germany",
    teamId: 5, // Renault
    performance: 90,
    reliability: 88,
    consistency: 89,
    tyreConservation: 88,
    racecraft: 91
  },
  {
    id: 12,
    no: 10,
    name: "Vitaly Petrov",
    country: "Russia",
    teamId: 5, // Renault
    performance: 88,
    reliability: 86,
    consistency: 87,
    tyreConservation: 87,
    racecraft: 89
  },
  {
    id: 13,
    no: 11,
    name: "Rubens Barrichello",
    country: "Brazil",
    teamId: 6, // Williams-Cosworth
    performance: 89,
    reliability: 85,
    consistency: 88,
    tyreConservation: 88,
    racecraft: 91
  },
  {
    id: 14,
    no: 12,
    name: "Pastor Maldonado",
    country: "Venezuela",
    teamId: 6, // Williams-Cosworth
    performance: 87,
    reliability: 83,
    consistency: 85,
    tyreConservation: 86,
    racecraft: 88
  },
  {
    id: 15,
    no: 14,
    name: "Adrian Sutil",
    country: "Germany",
    teamId: 7, // Force India-Mercedes
    performance: 88,
    reliability: 82,
    consistency: 86,
    tyreConservation: 85,
    racecraft: 89
  },
  {
    id: 16,
    no: 15,
    name: "Paul di Resta",
    country: "United Kingdom",
    teamId: 7, // Force India-Mercedes
    performance: 86,
    reliability: 80,
    consistency: 84,
    tyreConservation: 84,
    racecraft: 87
  },
  {
    id: 17,
    no: 16,
    name: "Kamui Kobayashi",
    country: "Japan",
    teamId: 8, // Sauber-Ferrari
    performance: 89,
    reliability: 87,
    consistency: 88,
    tyreConservation: 87,
    racecraft: 91
  },
  {
    id: 18,
    no: 17,
    name: "Sergio Pérez",
    country: "Mexico",
    teamId: 8, // Sauber-Ferrari
    performance: 87,
    reliability: 85,
    consistency: 86,
    tyreConservation: 86,
    racecraft: 88
  },
  {
    id: 19,
    no: 18,
    name: "Sébastien Buemi",
    country: "Switzerland",
    teamId: 9, // Toro Rosso-Ferrari
    performance: 85,
    reliability: 80,
    consistency: 83,
    tyreConservation: 84,
    racecraft: 87
  },
  {
    id: 20,
    no: 19,
    name: "Jaime Alguersuari",
    country: "Spain",
    teamId: 9, // Toro Rosso-Ferrari
    performance: 83,
    reliability: 78,
    consistency: 81,
    tyreConservation: 82,
    racecraft: 85
  },
  {
    id: 21,
    no: 20,
    name: "Heikki Kovalainen",
    country: "Finland",
    teamId: 10, // Team Lotus-Renault
    performance: 86,
    reliability: 84,
    consistency: 85,
    tyreConservation: 85,
    racecraft: 88
  },
  {
    id: 22,
    no: 21,
    name: "Jarno Trulli",
    country: "Italy",
    teamId: 10, // Team Lotus-Renault
    performance: 88,
    reliability: 86,
    consistency: 87,
    tyreConservation: 87,
    racecraft: 90
  },
  {
    id: 25,
    no: 22,
    name: "Narain Karthikeyan",
    country: "India",
    teamId: 11, // HRT-Cosworth
    performance: 74,
    reliability: 68,
    consistency: 70,
    tyreConservation: 70,
    racecraft: 76
  },
  {
    id: 26,
    no: 23,
    name: "Vitantonio Liuzzi",
    country: "Italy",
    teamId: 11, // HRT-Cosworth
    performance: 76,
    reliability: 70,
    consistency: 72,
    tyreConservation: 72,
    racecraft: 78
  },
  {
    id: 23,
    no: 24,
    name: "Timo Glock",
    country: "Germany",
    teamId: 12, // Virgin Racing-Cosworth
    performance: 78,
    reliability: 72,
    consistency: 74,
    tyreConservation: 74,
    racecraft: 80
  },
  {
    id: 24,
    no: 25,
    name: "Jérôme d'Ambrosio",
    country: "Belgium",
    teamId: 12, // Virgin Racing-Cosworth
    performance: 76,
    reliability: 70,
    consistency: 72,
    tyreConservation: 72,
    racecraft: 78
  }
];

export const F1_2011_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "27 March 2011",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "10 April 2011",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 3,
    name: "Chinese Grand Prix",
    shortName: "CHN",
    circuit: "Shanghai International Circuit, Shanghai",
    date: "17 April 2011",
    trackId: "shanghai",
    country: "China"
  },
  {
    id: 4,
    name: "Turkish Grand Prix",
    shortName: "TUR",
    circuit: "Istanbul Park, Istanbul",
    date: "8 May 2011",
    trackId: "istanbul",
    country: "Turkey"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "22 May 2011",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "29 May 2011",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 7,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "12 June 2011",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 8,
    name: "European Grand Prix",
    shortName: "EUR",
    circuit: "Valencia Street Circuit, Valencia",
    date: "26 June 2011",
    trackId: "valencia",
    country: "Spain"
  },
  {
    id: 9,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "10 July 2011",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 10,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Nürburgring, Nürburg",
    date: "24 July 2011",
    trackId: "nurburgring",
    country: "Germany"
  },
  {
    id: 11,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "31 July 2011",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 12,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "28 August 2011",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 13,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "11 September 2011",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 14,
    name: "Singapore Grand Prix",
    shortName: "SIN",
    circuit: "Marina Bay Street Circuit, Singapore",
    date: "25 September 2011",
    trackId: "singapore",
    country: "Singapore"
  },
  {
    id: 15,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka International Racing Course, Suzuka",
    date: "9 October 2011",
    trackId: "suzuka",
    country: "Japan"
  },
  {
    id: 16,
    name: "Korean Grand Prix",
    shortName: "KOR",
    circuit: "Korean International Circuit, Yeongam",
    date: "16 October 2011",
    trackId: "yeongam",
    country: "South Korea"
  },
  {
    id: 17,
    name: "Indian Grand Prix",
    shortName: "IND",
    circuit: "Buddh International Circuit, Greater Noida",
    date: "30 October 2011",
    trackId: "buddh",
    country: "India"
  },
  {
    id: 18,
    name: "Abu Dhabi Grand Prix",
    shortName: "ABU",
    circuit: "Yas Marina Circuit, Abu Dhabi",
    date: "13 November 2011",
    trackId: "yasmarina",
    country: "United Arab Emirates"
  },
  {
    id: 19,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "27 November 2011",
    trackId: "saopaulo",
    country: "Brazil"
  }
];