export const F1_2008_POINTS_SYSTEM = [
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

export const F1_2008_POINTS_FL = 0;
export const F1_2008_POINTS_POLE = 0;

export const F1_2008_TEAMS = [
  {
    id: 1,
    name: "Renault",
    shortName: "Renault",
    country: "France",
    reliability: 93,
    chassis: 96,
    engine: 95,
    tyreConservation: 94,
    color: "#00aaff", // Renault Blue (consistent color scheme)
  },
  {
    id: 2,
    name: "Ferrari",
    shortName: "Ferrari",
    country: "Italy",
    reliability: 96,
    chassis: 97,
    engine: 96,
    tyreConservation: 95,
    color: "#DC0000", // Ferrari Red (consistent color scheme)
  },
  {
    id: 3,
    name: "McLaren-Mercedes",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 94,
    chassis: 96,
    engine: 97,
    tyreConservation: 94,
    color: "#808080", // McLaren Silver (consistent color scheme)
  },
  {
    id: 4,
    name: "BMW Sauber",
    shortName: "BMW Sauber",
    country: "Germany",
    reliability: 92,
    chassis: 95,
    engine: 96,
    tyreConservation: 93,
    color: "#008080", // Sauber Teal (consistent color scheme)
  },
  {
    id: 5,
    name: "Honda",
    shortName: "Honda",
    country: "Japan",
    reliability: 90,
    chassis: 93,
    engine: 94,
    tyreConservation: 92,
    color: "#8FaC8F", // BAR Greenish-Grey (consistent color scheme)
  },
  {
    id: 6,
    name: "Toyota",
    shortName: "Toyota",
    country: "Japan",
    reliability: 89,
    chassis: 92,
    engine: 93,
    tyreConservation: 91,
    color: "#ffaaaa", // Red (Toyota Racing) (consistent color scheme)
  },
  {
    id: 7,
    name: "Red Bull Racing-Renault",
    shortName: "Red Bull",
    country: "Austria",
    reliability: 88,
    chassis: 90,
    engine: 92,
    tyreConservation: 89,
    color: "#5a00ee", // Jaguar Green (consistent color scheme)
  },
  {
    id: 8,
    name: "Williams-Toyota",
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 86,
    chassis: 91,
    engine: 93,
    tyreConservation: 88,
    color: "#005Aee", // Williams Blue (consistent color scheme)
  },
  {
    id: 9,
    name: "Scuderia Toro Rosso-Ferrari",
    shortName: "Toro Rosso",
    country: "Italy",
    reliability: 79,
    chassis: 83,
    engine: 89,
    tyreConservation: 83,
    color: "#d3af37", // Minardi Black (consistent color scheme)
  },
  {
    id: 10,
    name: "Super Aguri-Honda",
    shortName: "Super Aguri",
    country: "Japan",
    reliability: 77,
    chassis: 81,
    engine: 85,
    tyreConservation: 81,
    color: "#ff5555", // Arrows Silver (consistent color scheme)
  },
  {
    id: 11,
    name: "Force India-Ferrari",
    shortName: "Force India",
    country: "India",
    reliability: 75,
    chassis: 80,
    engine: 88,
    tyreConservation: 80,
    color: "#ff8c00", // Spyker Orange (as Force India took over Spyker)
  }
];

export const F1_2008_DRIVERS = [
  {
    id: 1,
    no: 1,
    name: "Kimi Räikkönen",
    country: "Finland",
    teamId: 2, // Ferrari
    performance: 97,
    reliability: 93,
    consistency: 96,
    tyreConservation: 95,
    racecraft: 98
  },
  {
    id: 2,
    no: 2,
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
    id: 3,
    no: 3,
    name: "Lewis Hamilton",
    country: "United Kingdom",
    teamId: 3, // McLaren-Mercedes
    performance: 98,
    reliability: 92,
    consistency: 95,
    tyreConservation: 94,
    racecraft: 99
  },
  {
    id: 4,
    no: 4,
    name: "Heikki Kovalainen",
    country: "Finland",
    teamId: 3, // McLaren-Mercedes
    performance: 94,
    reliability: 90,
    consistency: 92,
    tyreConservation: 93,
    racecraft: 95
  },
  {
    id: 5,
    no: 5,
    name: "Fernando Alonso",
    country: "Spain",
    teamId: 1, // Renault
    performance: 96,
    reliability: 92,
    consistency: 94,
    tyreConservation: 94,
    racecraft: 97
  },
  {
    id: 6,
    no: 6,
    name: "Nelson Piquet Jr.",
    country: "Brazil",
    teamId: 1, // Renault
    performance: 88,
    reliability: 86,
    consistency: 85,
    tyreConservation: 89,
    racecraft: 90
  },
  {
    id: 7,
    no: 9,
    name: "David Coulthard",
    country: "United Kingdom",
    teamId: 7, // Red Bull Racing-Renault
    performance: 89,
    reliability: 87,
    consistency: 88,
    tyreConservation: 91,
    racecraft: 93
  },
  {
    id: 8,
    no: 10,
    name: "Mark Webber",
    country: "Australia",
    teamId: 7, // Red Bull Racing-Renault
    performance: 93,
    reliability: 85,
    consistency: 91,
    tyreConservation: 90,
    racecraft: 94
  },
  {
    id: 9,
    no: 11,
    name: "Jarno Trulli",
    country: "Italy",
    teamId: 6, // Toyota
    performance: 91,
    reliability: 90,
    consistency: 89,
    tyreConservation: 88,
    racecraft: 92
  },
  {
    id: 10,
    no: 12,
    name: "Timo Glock",
    country: "Germany",
    teamId: 6, // Toyota
    performance: 89,
    reliability: 88,
    consistency: 87,
    tyreConservation: 90,
    racecraft: 91
  },
  {
    id: 11,
    no: 14,
    name: "Sébastien Bourdais",
    country: "France",
    teamId: 9, // Scuderia Toro Rosso-Ferrari
    performance: 87,
    reliability: 84,
    consistency: 85,
    tyreConservation: 87,
    racecraft: 89
  },
  {
    id: 12,
    no: 15,
    name: "Sebastian Vettel",
    country: "Germany",
    teamId: 9, // Scuderia Toro Rosso-Ferrari
    performance: 92,
    reliability: 82,
    consistency: 89,
    tyreConservation: 88,
    racecraft: 93
  },
  {
    id: 13,
    no: 16,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 5, // Honda
    performance: 92,
    reliability: 88,
    consistency: 91,
    tyreConservation: 93,
    racecraft: 95
  },
  {
    id: 14,
    no: 17,
    name: "Rubens Barrichello",
    country: "Brazil",
    teamId: 5, // Honda
    performance: 90,
    reliability: 89,
    consistency: 89,
    tyreConservation: 92,
    racecraft: 93
  },
  {
    id: 15,
    no: 18,
    name: "Takuma Sato",
    country: "Japan",
    teamId: 10, // Super Aguri-Honda
    performance: 84,
    reliability: 75,
    consistency: 78,
    tyreConservation: 85,
    racecraft: 86
  },
  {
    id: 16,
    no: 19,
    name: "Anthony Davidson",
    country: "United Kingdom",
    teamId: 10, // Super Aguri-Honda
    performance: 81,
    reliability: 77,
    consistency: 76,
    tyreConservation: 83,
    racecraft: 83
  },
  {
    id: 17,
    no: 20,
    name: "Adrian Sutil",
    country: "Germany",
    teamId: 11, // Force India-Ferrari
    performance: 80,
    reliability: 76,
    consistency: 81,
    tyreConservation: 83,
    racecraft: 82
  },
  {
    id: 18,
    no: 21,
    name: "Giancarlo Fisichella",
    country: "Italy",
    teamId: 11, // Force India-Ferrari
    performance: 88,
    reliability: 84,
    consistency: 86,
    tyreConservation: 87,
    racecraft: 90
  },
  {
    id: 19,
    no: 22,
    name: "Nick Heidfeld",
    country: "Germany",
    teamId: 4, // BMW Sauber
    performance: 93,
    reliability: 91,
    consistency: 92,
    tyreConservation: 93,
    racecraft: 95
  },
  {
    id: 20,
    no: 23,
    name: "Robert Kubica",
    country: "Poland",
    teamId: 4, // BMW Sauber
    performance: 95,
    reliability: 89,
    consistency: 93,
    tyreConservation: 92,
    racecraft: 96
  },
  {
    id: 21,
    no: 7,
    name: "Nico Rosberg",
    country: "Germany",
    teamId: 8, // Williams-Toyota
    performance: 92,
    reliability: 84,
    consistency: 89,
    tyreConservation: 88,
    racecraft: 93
  },
  {
    id: 22,
    no: 8,
    name: "Kazuki Nakajima",
    country: "Japan",
    teamId: 8, // Williams-Toyota
    performance: 86,
    reliability: 82,
    consistency: 84,
    tyreConservation: 89,
    racecraft: 87
  }
];

export const F1_2008_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "16 March 2008",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "23 March 2008",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 3,
    name: "Bahrain Grand Prix",
    shortName: "BHR",
    circuit: "Bahrain International Circuit, Sakhir",
    date: "6 April 2008",
    trackId: "bahrain",
    country: "Bahrain"
  },
  {
    id: 4,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "27 April 2008",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 5,
    name: "Turkish Grand Prix",
    shortName: "TUR",
    circuit: "Istanbul Park, Istanbul",
    date: "11 May 2008",
    trackId: "istanbul",
    country: "Turkey"
  },
  {
    id: 6,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "25 May 2008",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 7,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "8 June 2008",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 8,
    name: "French Grand Prix",
    shortName: "FRA",
    circuit: "Circuit de Nevers Magny-Cours, Magny-Cours",
    date: "22 June 2008",
    trackId: "magnycours",
    country: "France"
  },
  {
    id: 9,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "6 July 2008",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 10,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Hockenheimring, Hockenheim",
    date: "20 July 2008",
    trackId: "hockenheimnew",
    country: "Germany"
  },
  {
    id: 11,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "3 August 2008",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 12,
    name: "European Grand Prix",
    shortName: "EUR",
    circuit: "Valencia Street Circuit, Valencia",
    date: "24 August 2008",
    trackId: "valencia",
    country: "Spain"
  },
  {
    id: 13,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "7 September 2008",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 14,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "14 September 2008",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 15,
    name: "Singapore Grand Prix",
    shortName: "SIN",
    circuit: "Marina Bay Street Circuit, Singapore",
    date: "28 September 2008",
    trackId: "singapore",
    country: "Singapore"
  },
  {
    id: 16,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Fuji Speedway, Oyama",
    date: "12 October 2008",
    trackId: "fuji",
    country: "Japan"
  },
  {
    id: 17,
    name: "Chinese Grand Prix",
    shortName: "CHN",
    circuit: "Shanghai International Circuit, Shanghai",
    date: "19 October 2008",
    trackId: "shanghai",
    country: "China"
  },
  {
    id: 18,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "2 November 2008",
    trackId: "saopaulo",
    country: "Brazil"
  }
];