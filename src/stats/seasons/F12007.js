export const F1_2007_POINTS_SYSTEM = [
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

export const F1_2007_POINTS_FL = 0;
export const F1_2007_POINTS_POLE = 0;

export const F1_2007_TEAMS = [
  {
    id: 1,
    name: "Renault",
    shortName: "Renault",
    country: "France",
    reliability: 94,
    chassis: 97,
    engine: 96,
    tyreConservation: 95,
    color: "#00aaff", // Renault Blue (consistent color scheme)
  },
  {
    id: 2,
    name: "Ferrari",
    shortName: "Ferrari",
    country: "Italy",
    reliability: 97,
    chassis: 98,
    engine: 97,
    tyreConservation: 96,
    color: "#DC0000", // Ferrari Red (consistent color scheme)
  },
  {
    id: 3,
    name: "McLaren-Mercedes",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 95,
    chassis: 97,
    engine: 98,
    tyreConservation: 95,
    color: "#808080", // McLaren Silver (consistent color scheme)
  },
  {
    id: 4,
    name: "BMW Sauber",
    shortName: "BMW Sauber",
    country: "Germany",
    reliability: 93,
    chassis: 96,
    engine: 97,
    tyreConservation: 94,
    color: "#008080", // Sauber Teal (consistent color scheme)
  },
  {
    id: 5,
    name: "Honda",
    shortName: "Honda",
    country: "Japan",
    reliability: 91,
    chassis: 94,
    engine: 95,
    tyreConservation: 93,
    color: "#8FaC8F", // BAR Greenish-Grey (consistent color scheme)
  },
  {
    id: 6,
    name: "Toyota",
    shortName: "Toyota",
    country: "Japan",
    reliability: 90,
    chassis: 93,
    engine: 94,
    tyreConservation: 92,
    color: "#ffaaaa", // Red (Toyota Racing) (consistent color scheme)
  },
  {
    id: 7,
    name: "Red Bull Racing-Renault",
    shortName: "Red Bull",
    country: "Austria",
    reliability: 89,
    chassis: 91,
    engine: 93,
    tyreConservation: 90,
    color: "#5a00ee", // Jaguar Green (consistent color scheme)
  },
  {
    id: 8,
    name: "Williams-Toyota",
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 87,
    chassis: 92,
    engine: 94,
    tyreConservation: 89,
    color: "#005Aee", // Williams Blue (consistent color scheme)
  },
  {
    id: 9,
    name: "Super Aguri-Honda",
    shortName: "Super Aguri",
    country: "Japan",
    reliability: 78,
    chassis: 82,
    engine: 86,
    tyreConservation: 82,
    color: "#ff5555", // Arrows Silver (consistent color scheme)
  },
  {
    id: 10,
    name: "Scuderia Toro Rosso-Ferrari",
    shortName: "Toro Rosso",
    country: "Italy",
    reliability: 80,
    chassis: 84,
    engine: 90,
    tyreConservation: 84,
    color: "#d3af37", // Minardi Black (consistent color scheme)
  },
  {
    id: 11,
    name: "Spyker F1 Team-Ferrari",
    shortName: "Spyker",
    country: "Netherlands",
    reliability: 76,
    chassis: 81,
    engine: 88,
    tyreConservation: 81,
    color: "#994500", // Spyker Orange (new team, using a distinctive color)
  }
];
export const F1_2007_DRIVERS = [
  {
    id: 1,
    no: 1,
    name: "Fernando Alonso",
    country: "Spain",
    teamId: 3, // McLaren-Mercedes
    performance: 97,
    reliability: 93,
    consistency: 96,
    tyreConservation: 95,
    racecraft: 98
  },
  {
    id: 2,
    no: 2,
    name: "Lewis Hamilton",
    country: "United Kingdom",
    teamId: 3, // McLaren-Mercedes
    performance: 96,
    reliability: 92,
    consistency: 94,
    tyreConservation: 94,
    racecraft: 97
  },
  {
    id: 3,
    no: 5,
    name: "Felipe Massa",
    country: "Brazil",
    teamId: 2, // Ferrari
    performance: 96,
    reliability: 94,
    consistency: 95,
    tyreConservation: 95,
    racecraft: 97
  },
  {
    id: 4,
    no: 6,
    name: "Kimi Räikkönen",
    country: "Finland",
    teamId: 2, // Ferrari
    performance: 98,
    reliability: 92,
    consistency: 96,
    tyreConservation: 96,
    racecraft: 99
  },
  {
    id: 5,
    no: 3,
    name: "Giancarlo Fisichella",
    country: "Italy",
    teamId: 1, // Renault
    performance: 93,
    reliability: 91,
    consistency: 92,
    tyreConservation: 93,
    racecraft: 95
  },
  {
    id: 6,
    no: 4,
    name: "Heikki Kovalainen",
    country: "Finland",
    teamId: 1, // Renault
    performance: 91,
    reliability: 89,
    consistency: 90,
    tyreConservation: 92,
    racecraft: 94
  },
  {
    id: 7,
    no: 9,
    name: "Nick Heidfeld",
    country: "Germany",
    teamId: 4, // BMW Sauber
    performance: 92,
    reliability: 91,
    consistency: 91,
    tyreConservation: 92,
    racecraft: 94
  },
  {
    id: 8,
    no: 10,
    name: "Robert Kubica",
    country: "Poland",
    teamId: 4, // BMW Sauber
    performance: 90,
    reliability: 90,
    consistency: 90,
    tyreConservation: 91,
    racecraft: 93
  },
  {
    id: 9,
    no: 11,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 5, // Honda
    performance: 93,
    reliability: 87,
    consistency: 92,
    tyreConservation: 94,
    racecraft: 96
  },
  {
    id: 10,
    no: 12,
    name: "Rubens Barrichello",
    country: "Brazil",
    teamId: 5, // Honda
    performance: 91,
    reliability: 89,
    consistency: 90,
    tyreConservation: 93,
    racecraft: 94
  },
  {
    id: 11,
    no: 16,
    name: "Nico Rosberg",
    country: "Germany",
    teamId: 8, // Williams-Toyota
    performance: 91,
    reliability: 83,
    consistency: 88,
    tyreConservation: 87,
    racecraft: 92
  },
  {
    id: 12,
    no: 17,
    name: "Alexander Wurz",
    country: "Austria",
    teamId: 8, // Williams-Toyota
    performance: 89,
    reliability: 85,
    consistency: 87,
    tyreConservation: 88,
    racecraft: 90
  },
  {
    id: 13,
    no: 14,
    name: "David Coulthard",
    country: "United Kingdom",
    teamId: 7, // Red Bull Racing-Renault
    performance: 88,
    reliability: 86,
    consistency: 88,
    tyreConservation: 90,
    racecraft: 92
  },
  {
    id: 14,
    no: 15,
    name: "Mark Webber",
    country: "Australia",
    teamId: 7, // Red Bull Racing-Renault
    performance: 93,
    reliability: 86,
    consistency: 90,
    tyreConservation: 89,
    racecraft: 94
  },
  {
    id: 15,
    no: 20,
    name: "Adrian Sutil",
    country: "Germany",
    teamId: 11, // Spyker F1 Team-Ferrari
    performance: 79,
    reliability: 77,
    consistency: 80,
    tyreConservation: 82,
    racecraft: 81
  },
  {
    id: 16,
    no: 21,
    name: "Christijan Albers",
    country: "Netherlands",
    teamId: 11, // Spyker F1 Team-Ferrari
    performance: 77,
    reliability: 77,
    consistency: 78,
    tyreConservation: 84,
    racecraft: 79
  },
  {
    id: 17,
    no: 18,
    name: "Vitantonio Liuzzi",
    country: "Italy",
    teamId: 10, // Scuderia Toro Rosso-Ferrari
    performance: 83,
    reliability: 76,
    consistency: 80,
    tyreConservation: 83,
    racecraft: 85
  },
  {
    id: 18,
    no: 19,
    name: "Scott Speed",
    country: "United States",
    teamId: 10, // Scuderia Toro Rosso-Ferrari
    performance: 81,
    reliability: 74,
    consistency: 78,
    tyreConservation: 80,
    racecraft: 83
  },
  {
    id: 19,
    no: 22,
    name: "Takuma Sato",
    country: "Japan",
    teamId: 9, // Super Aguri-Honda
    performance: 85,
    reliability: 73,
    consistency: 79,
    tyreConservation: 86,
    racecraft: 87
  },
  {
    id: 20,
    no: 23,
    name: "Anthony Davidson",
    country: "United Kingdom",
    teamId: 9, // Super Aguri-Honda
    performance: 82,
    reliability: 75,
    consistency: 77,
    tyreConservation: 84,
    racecraft: 84
  },
  {
    id: 21,
    no: 7,
    name: "Ralf Schumacher",
    country: "Germany",
    teamId: 6, // Toyota
    performance: 89,
    reliability: 92,
    consistency: 88,
    tyreConservation: 87,
    racecraft: 91
  },
  {
    id: 22,
    no: 8,
    name: "Jarno Trulli",
    country: "Italy",
    teamId: 6, // Toyota
    performance: 90,
    reliability: 91,
    consistency: 89,
    tyreConservation: 86,
    racecraft: 92
  }
];

export const F1_2007_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "18 March 2007",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "8 April 2007",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 3,
    name: "Bahrain Grand Prix",
    shortName: "BHR",
    circuit: "Bahrain International Circuit, Sakhir",
    date: "15 April 2007",
    trackId: "bahrain",
    country: "Bahrain"
  },
  {
    id: 4,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "13 May 2007",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 5,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "27 May 2007",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 6,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "10 June 2007",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 7,
    name: "United States Grand Prix",
    shortName: "USA",
    circuit: "Indianapolis Motor Speedway, Indianapolis",
    date: "17 June 2007",
    trackId: "indianapolis",
    country: "United States"
  },
  {
    id: 8,
    name: "French Grand Prix",
    shortName: "FRA",
    circuit: "Circuit de Nevers Magny-Cours, Magny-Cours",
    date: "1 July 2007",
    trackId: "magnycours",
    country: "France"
  },
  {
    id: 9,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "8 July 2007",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 10,
    name: "European Grand Prix",
    shortName: "EUR",
    circuit: "Nürburgring, Nürburg",
    date: "22 July 2007",
    trackId: "nurburgring",
    country: "Germany"
  },
  {
    id: 11,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "5 August 2007",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 12,
    name: "Turkish Grand Prix",
    shortName: "TUR",
    circuit: "Istanbul Park, Istanbul",
    date: "26 August 2007",
    trackId: "istanbul",
    country: "Turkey"
  },
  {
    id: 13,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "9 September 2007",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 14,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "16 September 2007",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 15,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Fuji Speedway, Oyama",
    date: "30 September 2007",
    trackId: "fuji",
    country: "Japan"
  },
  {
    id: 16,
    name: "Chinese Grand Prix",
    shortName: "CHN",
    circuit: "Shanghai International Circuit, Shanghai",
    date: "7 October 2007",
    trackId: "shanghai",
    country: "China"
  },
  {
    id: 17,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "21 October 2007",
    trackId: "saopaulo",
    country: "Brazil"
  }
];