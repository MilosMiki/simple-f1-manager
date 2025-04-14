export const F1_2010_POINTS_SYSTEM = [
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

export const F1_2010_POINTS_FL = 0;
export const F1_2010_POINTS_POLE = 0;

export const F1_2010_TEAMS = [
  {
    id: 1,
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
    id: 2,
    name: "McLaren-Mercedes",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 92,
    chassis: 94,
    engine: 95,
    tyreConservation: 92,
    color: "#808080", // McLaren Silver
  },
  {
    id: 3,
    name: "Red Bull Racing-Renault",
    shortName: "Red Bull",
    country: "Austria",
    reliability: 94,
    chassis: 96,
    engine: 94,
    tyreConservation: 94,
    color: "#5a00ee", // Jaguar Green (consistent color scheme)
  },
  {
    id: 4,
    name: "Mercedes GP", // Replaced Brawn GP
    shortName: "Mercedes",
    country: "Germany",
    reliability: 93,
    chassis: 95,
    engine: 96,
    tyreConservation: 93,
    color: "#bbbbbb", // Petronas Green/Blue (distinctive color)
  },
  {
    id: 5,
    name: "Renault",
    shortName: "Renault",
    country: "France",
    reliability: 89,
    chassis: 91,
    engine: 92,
    tyreConservation: 90,
    color: "#663300", // Yellow (consistent with later Renault)
  },
  {
    id: 6,
    name: "Williams-Cosworth", // Engine change
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 86,
    chassis: 90,
    engine: 88,
    tyreConservation: 88,
    color: "#005Aee", // Williams Blue
  },
  {
    id: 7,
    name: "Force India-Mercedes",
    shortName: "Force India",
    country: "India",
    reliability: 82,
    chassis: 87,
    engine: 95,
    tyreConservation: 86,
    color: "#ff8c00", // Spyker Orange
  },
  {
    id: 8,
    name: "Sauber-Ferrari", // Continued under new ownership, Ferrari engine
    shortName: "Sauber",
    country: "Switzerland",
    reliability: 88,
    chassis: 90,
    engine: 92,
    tyreConservation: 89,
    color: "#000000", // Dark Green (new color scheme)
  },
  {
    id: 9,
    name: "Toro Rosso-Ferrari",
    shortName: "Toro Rosso",
    country: "Italy",
    reliability: 80,
    chassis: 84,
    engine: 90,
    tyreConservation: 84,
    color: "#4682b4", // Steel Blue (consistent color scheme)
  },
  {
    id: 10,
    name: "Lotus-Cosworth", // Replaced Renault (team name change)
    shortName: "Lotus",
    country: "Malaysia",
    reliability: 85,
    chassis: 88,
    engine: 88,
    tyreConservation: 87,
    color: "#008000", // British Racing Green (iconic Lotus color)
  },
  {
    id: 11,
    name: "Hispania Racing-Cosworth", // New team
    shortName: "HRT",
    country: "Spain",
    reliability: 70,
    chassis: 75,
    engine: 85,
    tyreConservation: 75,
    color: "#303030", // Magenta (distinctive new team color)
  },
  {
    id: 12,
    name: "Virgin Racing-Cosworth", // New team
    shortName: "Virgin",
    country: "United Kingdom",
    reliability: 72,
    chassis: 77,
    engine: 86,
    tyreConservation: 77,
    color: "#ff5555", // Red (Virgin Group's color)
  }
];

export const F1_2010_DRIVERS = [
  {
    id: 3,
    no: 1,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 2, // McLaren-Mercedes
    performance: 95,
    reliability: 93,
    consistency: 94,
    tyreConservation: 94,
    racecraft: 96
  },
  {
    id: 4,
    no: 2,
    name: "Lewis Hamilton",
    country: "United Kingdom",
    teamId: 2, // McLaren-Mercedes
    performance: 97,
    reliability: 92,
    consistency: 95,
    tyreConservation: 93,
    racecraft: 98
  },
  {
    id: 7,
    no: 3,
    name: "Michael Schumacher",
    country: "Germany",
    teamId: 4, // Mercedes GP
    performance: 95,
    reliability: 93,
    consistency: 94,
    tyreConservation: 93,
    racecraft: 97
  },
  {
    id: 8,
    no: 4,
    name: "Nico Rosberg",
    country: "Germany",
    teamId: 4, // Mercedes GP
    performance: 93,
    reliability: 91,
    consistency: 92,
    tyreConservation: 92,
    racecraft: 94
  },
  {
    id: 5,
    no: 5,
    name: "Sebastian Vettel",
    country: "Germany",
    teamId: 3, // Red Bull Racing-Renault
    performance: 98,
    reliability: 93,
    consistency: 96,
    tyreConservation: 95,
    racecraft: 97
  },
  {
    id: 6,
    no: 6,
    name: "Mark Webber",
    country: "Australia",
    teamId: 3, // Red Bull Racing-Renault
    performance: 96,
    reliability: 94,
    consistency: 94,
    tyreConservation: 94,
    racecraft: 96
  },
  {
    id: 2,
    no: 7,
    name: "Felipe Massa",
    country: "Brazil",
    teamId: 1, // Ferrari
    performance: 94,
    reliability: 92,
    consistency: 93,
    tyreConservation: 93,
    racecraft: 95
  },
  {
    id: 1,
    no: 8,
    name: "Fernando Alonso",
    country: "Spain",
    teamId: 1, // Ferrari
    performance: 96,
    reliability: 94,
    consistency: 95,
    tyreConservation: 94,
    racecraft: 97
  },
  {
    id: 11,
    no: 9,
    name: "Rubens Barrichello",
    country: "Brazil",
    teamId: 6, // Williams-Cosworth
    performance: 92,
    reliability: 84,
    consistency: 90,
    tyreConservation: 90,
    racecraft: 93
  },
  {
    id: 12,
    no: 10,
    name: "Nico Hülkenberg",
    country: "Germany",
    teamId: 6, // Williams-Cosworth
    performance: 89,
    reliability: 82,
    consistency: 87,
    tyreConservation: 88,
    racecraft: 90
  },
  {
    id: 9,
    no: 11,
    name: "Robert Kubica",
    country: "Poland",
    teamId: 5, // Renault
    performance: 94,
    reliability: 88,
    consistency: 93,
    tyreConservation: 91,
    racecraft: 95
  },
  {
    id: 10,
    no: 12,
    name: "Vitaly Petrov",
    country: "Russia",
    teamId: 5, // Renault
    performance: 88,
    reliability: 85,
    consistency: 86,
    tyreConservation: 87,
    racecraft: 89
  },
  {
    id: 13,
    no: 14,
    name: "Adrian Sutil",
    country: "Germany",
    teamId: 7, // Force India-Mercedes
    performance: 87,
    reliability: 80,
    consistency: 85,
    tyreConservation: 84,
    racecraft: 88
  },
  {
    id: 14,
    no: 15,
    name: "Vitantonio Liuzzi",
    country: "Italy",
    teamId: 7, // Force India-Mercedes
    performance: 85,
    reliability: 78,
    consistency: 83,
    tyreConservation: 82,
    racecraft: 86
  },
  {
    id: 15,
    no: 16,
    name: "Kamui Kobayashi",
    country: "Japan",
    teamId: 8, // Sauber-Ferrari
    performance: 88,
    reliability: 86,
    consistency: 87,
    tyreConservation: 85,
    racecraft: 91
  },
  {
    id: 16,
    no: 17,
    name: "Pedro de la Rosa",
    country: "Spain",
    teamId: 8, // Sauber-Ferrari
    performance: 86,
    reliability: 84,
    consistency: 85,
    tyreConservation: 84,
    racecraft: 87
  },
  {
    id: 17,
    no: 18,
    name: "Sébastien Buemi",
    country: "Switzerland",
    teamId: 9, // Toro Rosso-Ferrari
    performance: 84,
    reliability: 78,
    consistency: 82,
    tyreConservation: 83,
    racecraft: 86
  },
  {
    id: 18,
    no: 19,
    name: "Jaime Alguersuari",
    country: "Spain",
    teamId: 9, // Toro Rosso-Ferrari
    performance: 82,
    reliability: 76,
    consistency: 80,
    tyreConservation: 81,
    racecraft: 84
  },
  {
    id: 19,
    no: 16, // Jarno Trulli's number in Round 1
    name: "Jarno Trulli",
    country: "Italy",
    teamId: 10, // Lotus-Cosworth
    performance: 87,
    reliability: 83,
    consistency: 85,
    tyreConservation: 86,
    racecraft: 89
  },
  {
    id: 20,
    no: 17, // Heikki Kovalainen's number in Round 1
    name: "Heikki Kovalainen",
    country: "Finland",
    teamId: 10, // Lotus-Cosworth
    performance: 85,
    reliability: 81,
    consistency: 83,
    tyreConservation: 84,
    racecraft: 87
  },
  {
    id: 21,
    no: 24,
    name: "Timo Glock",
    country: "Germany",
    teamId: 11, // Hispania Racing-Cosworth
    performance: 75,
    reliability: 68,
    consistency: 70,
    tyreConservation: 70,
    racecraft: 78
  },
  {
    id: 22,
    no: 25,
    name: "Lucas di Grassi",
    country: "Brazil",
    teamId: 11, // Hispania Racing-Cosworth
    performance: 73,
    reliability: 66,
    consistency: 68,
    tyreConservation: 68,
    racecraft: 76
  },
  {
    id: 23,
    no: 22,
    name: "Lucas di Grassi",
    country: "Brazil",
    teamId: 12, // Virgin Racing-Cosworth
    performance: 74,
    reliability: 67,
    consistency: 69,
    tyreConservation: 69,
    racecraft: 77
  },
  {
    id: 24,
    no: 23,
    name: "Timo Glock",
    country: "Germany",
    teamId: 12, // Virgin Racing-Cosworth
    performance: 76,
    reliability: 69,
    consistency: 71,
    tyreConservation: 71,
    racecraft: 79
  }
];

export const F1_2010_CALENDAR = [
  {
    id: 1,
    name: "Bahrain Grand Prix",
    shortName: "BHR",
    circuit: "Bahrain International Circuit, Sakhir",
    date: "14 March 2010",
    trackId: "bahrain",
    country: "Bahrain"
  },
  {
    id: 2,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "28 March 2010",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 3,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "4 April 2010",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 4,
    name: "Chinese Grand Prix",
    shortName: "CHN",
    circuit: "Shanghai International Circuit, Shanghai",
    date: "18 April 2010",
    trackId: "shanghai",
    country: "China"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "9 May 2010",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "16 May 2010",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 7,
    name: "Turkish Grand Prix",
    shortName: "TUR",
    circuit: "Istanbul Park, Istanbul",
    date: "30 May 2010",
    trackId: "istanbul",
    country: "Turkey"
  },
  {
    id: 8,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "13 June 2010",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 9,
    name: "European Grand Prix",
    shortName: "EUR",
    circuit: "Valencia Street Circuit, Valencia",
    date: "27 June 2010",
    trackId: "valencia",
    country: "Spain"
  },
  {
    id: 10,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "11 July 2010",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 11,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Hockenheimring, Hockenheim",
    date: "25 July 2010",
    trackId: "hockenheimnew",
    country: "Germany"
  },
  {
    id: 12,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "1 August 2010",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 13,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "29 August 2010",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 14,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "12 September 2010",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 15,
    name: "Singapore Grand Prix",
    shortName: "SIN",
    circuit: "Marina Bay Street Circuit, Singapore",
    date: "26 September 2010",
    trackId: "singapore",
    country: "Singapore"
  },
  {
    id: 16,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka International Racing Course, Suzuka",
    date: "10 October 2010",
    trackId: "suzuka",
    country: "Japan"
  },
  {
    id: 17,
    name: "Korean Grand Prix",
    shortName: "KOR",
    circuit: "Korean International Circuit, Yeongam",
    date: "24 October 2010",
    trackId: "yeongam",
    country: "South Korea"
  },
  {
    id: 18,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "7 November 2010",
    trackId: "saopaulo",
    country: "Brazil"
  },
  {
    id: 19,
    name: "Abu Dhabi Grand Prix",
    shortName: "ABU",
    circuit: "Yas Marina Circuit, Abu Dhabi",
    date: "14 November 2010",
    trackId: "yasmarina",
    country: "United Arab Emirates"
  }
];