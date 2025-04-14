export const F1_2009_POINTS_SYSTEM = [
  10 + (1/30),        // 1st
  8 + (1/(30**2)),    // 2nd
  6 + (1/(30**3)),    // 3rd
  5 + (1/(30**4)),    // 4th
  4 + (1/(30**5)),    // 5th
  3 + (1/(30**6)),    // 6th
  2 + (1/(30**7)),    // 7th
  1 + (1/(30**8)),    // 8th
  0 + (1/(30**9)),    // 9th
  0 + (1/(30**10)),   // 10th
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
  0 + (1/(30**22))    // 22nd
];

export const F1_2009_POINTS_FL = 0;
export const F1_2009_POINTS_POLE = 0;

export const F1_2009_TEAMS = [
  {
    id: 1,
    name: "Ferrari",
    shortName: "Ferrari",
    country: "Italy",
    reliability: 92,
    chassis: 94,
    engine: 93,
    tyreConservation: 92,
    color: "#DC0000", // Ferrari Red
  },
  {
    id: 2,
    name: "McLaren-Mercedes",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 90,
    chassis: 93,
    engine: 94,
    tyreConservation: 91,
    color: "#808080", // McLaren Silver
  },
  {
    id: 3,
    name: "BMW Sauber",
    shortName: "BMW Sauber",
    country: "Germany",
    reliability: 89,
    chassis: 91,
    engine: 92,
    tyreConservation: 90,
    color: "#008080", // Sauber Teal
  },
  {
    id: 4,
    name: "Renault",
    shortName: "Renault",
    country: "France",
    reliability: 88,
    chassis: 92,
    engine: 90,
    tyreConservation: 90,
    color: "#00aaff", // Renault Blue
  },
  {
    id: 5,
    name: "Red Bull Racing-Renault",
    shortName: "Red Bull",
    country: "Austria",
    reliability: 91,
    chassis: 95,
    engine: 94,
    tyreConservation: 93,
    color: "#5a00ee", // Jaguar Green
  },
  {
    id: 6,
    name: "Toyota",
    shortName: "Toyota",
    country: "Japan",
    reliability: 87,
    chassis: 90,
    engine: 91,
    tyreConservation: 89,
    color: "#ffaaaa", // Red (Toyota Racing)
  },
  {
    id: 7,
    name: "Williams-Toyota",
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 85,
    chassis: 89,
    engine: 91,
    tyreConservation: 87,
    color: "#005Aee", // Williams Blue
  },
  {
    id: 8,
    name: "Scuderia Toro Rosso-Ferrari",
    shortName: "Toro Rosso",
    country: "Italy",
    reliability: 78,
    chassis: 82,
    engine: 88,
    tyreConservation: 82,
    color: "#d3af37", // Minardi Black
  },
  {
    id: 9,
    name: "Brawn GP-Mercedes",
    shortName: "Brawn GP",
    country: "United Kingdom",
    reliability: 93,
    chassis: 96,
    engine: 95,
    tyreConservation: 94,
    color: "#b0e0e6", // Powder Blue
  },
  {
    id: 10,
    name: "Force India-Mercedes",
    shortName: "Force India",
    country: "India",
    reliability: 80,
    chassis: 85,
    engine: 93,
    tyreConservation: 84,
    color: "#ff8c00", // Spyker Orange
  },
];

export const F1_2009_DRIVERS = [
  {
    id: 1,
    no: 1,
    name: "Felipe Massa",
    country: "Brazil",
    teamId: 1, // Ferrari
    performance: 95,
    reliability: 93,
    consistency: 94,
    tyreConservation: 94,
    racecraft: 96
  },
  {
    id: 2,
    no: 2,
    name: "Kimi Räikkönen",
    country: "Finland",
    teamId: 1, // Ferrari
    performance: 96,
    reliability: 92,
    consistency: 95,
    tyreConservation: 95,
    racecraft: 97
  },
  {
    id: 3,
    no: 3,
    name: "Lewis Hamilton",
    country: "United Kingdom",
    teamId: 2, // McLaren-Mercedes
    performance: 97,
    reliability: 91,
    consistency: 94,
    tyreConservation: 93,
    racecraft: 98
  },
  {
    id: 4,
    no: 4,
    name: "Heikki Kovalainen",
    country: "Finland",
    teamId: 2, // McLaren-Mercedes
    performance: 93,
    reliability: 89,
    consistency: 91,
    tyreConservation: 92,
    racecraft: 94
  },
  {
    id: 5,
    no: 5,
    name: "Robert Kubica",
    country: "Poland",
    teamId: 3, // BMW Sauber
    performance: 94,
    reliability: 88,
    consistency: 92,
    tyreConservation: 91,
    racecraft: 95
  },
  {
    id: 6,
    no: 6,
    name: "Nick Heidfeld",
    country: "Germany",
    teamId: 3, // BMW Sauber
    performance: 92,
    reliability: 90,
    consistency: 91,
    tyreConservation: 92,
    racecraft: 94
  },
  {
    id: 7,
    no: 7,
    name: "Fernando Alonso",
    country: "Spain",
    teamId: 4, // Renault
    performance: 95,
    reliability: 91,
    consistency: 93,
    tyreConservation: 93,
    racecraft: 96
  },
  {
    id: 8,
    no: 8,
    name: "Nelson Piquet Jr.",
    country: "Brazil",
    teamId: 4, // Renault
    performance: 87,
    reliability: 85,
    consistency: 84,
    tyreConservation: 88,
    racecraft: 89
  },
  {
    id: 9,
    no: 9,
    name: "Mark Webber",
    country: "Australia",
    teamId: 5, // Red Bull Racing-Renault
    performance: 94,
    reliability: 90,
    consistency: 92,
    tyreConservation: 92,
    racecraft: 95
  },
  {
    id: 10,
    no: 10,
    name: "Sebastian Vettel",
    country: "Germany",
    teamId: 5, // Red Bull Racing-Renault
    performance: 96,
    reliability: 89,
    consistency: 94,
    tyreConservation: 93,
    racecraft: 97
  },
  {
    id: 11,
    no: 11,
    name: "Sébastien Bourdais",
    country: "France",
    teamId: 8, // Scuderia Toro Rosso-Ferrari
    performance: 86,
    reliability: 83,
    consistency: 84,
    tyreConservation: 86,
    racecraft: 88
  },
  {
    id: 12,
    no: 12,
    name: "Sébastien Buemi",
    country: "Switzerland",
    teamId: 8, // Scuderia Toro Rosso-Ferrari
    performance: 84,
    reliability: 81,
    consistency: 82,
    tyreConservation: 85,
    racecraft: 86
  },
  {
    id: 13,
    no: 14,
    name: "Jarno Trulli",
    country: "Italy",
    teamId: 6, // Toyota
    performance: 90,
    reliability: 89,
    consistency: 88,
    tyreConservation: 87,
    racecraft: 91
  },
  {
    id: 14,
    no: 15,
    name: "Timo Glock",
    country: "Germany",
    teamId: 6, // Toyota
    performance: 88,
    reliability: 87,
    consistency: 86,
    tyreConservation: 89,
    racecraft: 90
  },
  {
    id: 15,
    no: 16,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 9, // Brawn GP-Mercedes
    performance: 97,
    reliability: 94,
    consistency: 95,
    tyreConservation: 95,
    racecraft: 98
  },
  {
    id: 16,
    no: 17,
    name: "Rubens Barrichello",
    country: "Brazil",
    teamId: 9, // Brawn GP-Mercedes
    performance: 94,
    reliability: 92,
    consistency: 93,
    tyreConservation: 94,
    racecraft: 95
  },
  {
    id: 17,
    no: 20,
    name: "Adrian Sutil",
    country: "Germany",
    teamId: 10, // Force India-Mercedes
    performance: 82,
    reliability: 78,
    consistency: 83,
    tyreConservation: 85,
    racecraft: 84
  },
  {
    id: 18,
    no: 21,
    name: "Giancarlo Fisichella",
    country: "Italy",
    teamId: 10, // Force India-Mercedes
    performance: 89,
    reliability: 85,
    consistency: 87,
    tyreConservation: 88,
    racecraft: 91
  },
  {
    id: 19,
    no: 22,
    name: "Nico Rosberg",
    country: "Germany",
    teamId: 7, // Williams-Toyota
    performance: 91,
    reliability: 83,
    consistency: 88,
    tyreConservation: 87,
    racecraft: 92
  },
  {
    id: 20,
    no: 23,
    name: "Kazuki Nakajima",
    country: "Japan",
    teamId: 7, // Williams-Toyota
    performance: 86,
    reliability: 82,
    consistency: 84,
    tyreConservation: 89,
    racecraft: 87
  }
];

export const F1_2009_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "29 March 2009",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "5 April 2009",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 3,
    name: "Chinese Grand Prix",
    shortName: "CHN",
    circuit: "Shanghai International Circuit, Shanghai",
    date: "19 April 2009",
    trackId: "shanghai",
    country: "China"
  },
  {
    id: 4,
    name: "Bahrain Grand Prix",
    shortName: "BHR",
    circuit: "Bahrain International Circuit, Sakhir",
    date: "26 April 2009",
    trackId: "bahrain",
    country: "Bahrain"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "10 May 2009",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "24 May 2009",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 7,
    name: "Turkish Grand Prix",
    shortName: "TUR",
    circuit: "Istanbul Park, Istanbul",
    date: "7 June 2009",
    trackId: "istanbul",
    country: "Turkey"
  },
  {
    id: 8,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "21 June 2009",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 9,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Nürburgring, Nürburg",
    date: "12 July 2009",
    trackId: "nurburgring",
    country: "Germany"
  },
  {
    id: 10,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "26 July 2009",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 11,
    name: "European Grand Prix",
    shortName: "EUR",
    circuit: "Valencia Street Circuit, Valencia",
    date: "23 August 2009",
    trackId: "valencia",
    country: "Spain"
  },
  {
    id: 12,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "30 August 2009",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 13,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "13 September 2009",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 14,
    name: "Singapore Grand Prix",
    shortName: "SIN",
    circuit: "Marina Bay Street Circuit, Singapore",
    date: "27 September 2009",
    trackId: "singapore",
    country: "Singapore"
  },
  {
    id: 15,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka International Racing Course, Suzuka",
    date: "4 October 2009",
    trackId: "suzuka",
    country: "Japan"
  },
  {
    id: 16,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "18 October 2009",
    trackId: "saopaulo",
    country: "Brazil"
  },
  {
    id: 17,
    name: "Abu Dhabi Grand Prix",
    shortName: "ABU",
    circuit: "Yas Marina Circuit, Abu Dhabi",
    date: "1 November 2009",
    trackId: "yasmarina",
    country: "United Arab Emirates"
  }
];
