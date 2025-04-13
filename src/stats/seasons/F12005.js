export const F1_2005_POINTS_SYSTEM = [
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

export const F1_2005_POINTS_FL = 0;
export const F1_2005_POINTS_POLE = 0;
export const F1_2005_TEAMS = [
  {
    id: 1,
    name: "Ferrari",
    shortName: "Ferrari",
    country: "Italy",
    reliability: 97,
    chassis: 96,
    engine: 97,
    tyreConservation: 94,
    color: "#DC0000", // Ferrari Red (from 2002)
  },
  {
    id: 2,
    name: "McLaren-Mercedes",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 92,
    chassis: 98,
    engine: 98,
    tyreConservation: 96,
    color: "#808080", // McLaren Silver (from 2002)
  },
  {
    id: 3,
    name: "Renault",
    shortName: "Renault",
    country: "France",
    reliability: 94,
    chassis: 97,
    engine: 96,
    tyreConservation: 95,
    color: "#00aaff", // Renault Yellow (from 2002)
  },
  {
    id: 4,
    name: "Williams-BMW",
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 88,
    chassis: 94,
    engine: 95,
    tyreConservation: 90,
    color: "#005Aee", // Williams Blue (from 2002)
  },
  {
    id: 5,
    name: "BAR-Honda",
    shortName: "BAR",
    country: "United Kingdom",
    reliability: 85,
    chassis: 93,
    engine: 94,
    tyreConservation: 92,
    color: "#8FaC8F", // BAR Greenish-Grey (from 2002)
  },
  {
    id: 6,
    name: "Sauber-Petronas",
    shortName: "Sauber",
    country: "Switzerland",
    reliability: 87,
    chassis: 89,
    engine: 86,
    tyreConservation: 91,
    color: "#008080", // Sauber Teal (from 2002)
  },
  {
    id: 7,
    name: "Red Bull Racing-Cosworth",
    shortName: "Red Bull",
    country: "Austria",
    reliability: 82,
    chassis: 88,
    engine: 84,
    tyreConservation: 89,
    color: "#004190", // Dark Blue (keeping the 2005 color as Red Bull was a new team with a distinct color)
  },
  {
    id: 8,
    name: "Toyota",
    shortName: "Toyota",
    country: "Japan",
    reliability: 90,
    chassis: 90,
    engine: 92,
    tyreConservation: 88,
    color: "#ffaaaa", // Red (Toyota Racing) (from 2002)
  },
  {
    id: 9,
    name: "Jordan-Toyota",
    shortName: "Jordan",
    country: "Ireland",
    reliability: 78,
    chassis: 83,
    engine: 88,
    tyreConservation: 86,
    color: "#FFD700", // Jordan Yellow (from 2002)
  },
  {
    id: 10,
    name: "Minardi-Cosworth",
    shortName: "Minardi",
    country: "Italy",
    reliability: 75,
    chassis: 80,
    engine: 82,
    tyreConservation: 84,
    color: "#000000", // Minardi Black (from 2002)
  }
];

export const F1_2005_DRIVERS = [
  {
    id: 1,
    no: 1,
    name: "Michael Schumacher",
    country: "Germany",
    teamId: 1,
    performance: 97,
    reliability: 95,
    consistency: 97,
    tyreConservation: 95,
    racecraft: 98
  },
  {
    id: 2,
    no: 2,
    name: "Rubens Barrichello",
    country: "Brazil",
    teamId: 1,
    performance: 92,
    reliability: 90,
    consistency: 93,
    tyreConservation: 92,
    racecraft: 95
  },
  {
    id: 3,
    no: 9,
    name: "Kimi Räikkönen",
    country: "Finland",
    teamId: 2,
    performance: 98,
    reliability: 89,
    consistency: 95,
    tyreConservation: 96,
    racecraft: 97
  },
  {
    id: 4,
    no: 10,
    name: "Juan Pablo Montoya",
    country: "Colombia",
    teamId: 2,
    performance: 96,
    reliability: 87,
    consistency: 92,
    tyreConservation: 94,
    racecraft: 96
  },
  {
    id: 5,
    no: 5,
    name: "Fernando Alonso",
    country: "Spain",
    teamId: 3,
    performance: 97,
    reliability: 93,
    consistency: 96,
    tyreConservation: 95,
    racecraft: 98
  },
  {
    id: 6,
    no: 6,
    name: "Giancarlo Fisichella",
    country: "Italy",
    teamId: 3,
    performance: 93,
    reliability: 91,
    consistency: 92,
    tyreConservation: 93,
    racecraft: 95
  },
  {
    id: 7,
    no: 7,
    name: "Mark Webber",
    country: "Australia",
    teamId: 4,
    performance: 91,
    reliability: 86,
    consistency: 89,
    tyreConservation: 90,
    racecraft: 92
  },
  {
    id: 8,
    no: 8,
    name: "Nick Heidfeld",
    country: "Germany",
    teamId: 4,
    performance: 89,
    reliability: 88,
    consistency: 88,
    tyreConservation: 89,
    racecraft: 91
  },
  {
    id: 9,
    no: 3,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 5,
    performance: 92,
    reliability: 83,
    consistency: 90,
    tyreConservation: 93,
    racecraft: 94
  },
  {
    id: 10,
    no: 4,
    name: "Takuma Sato",
    country: "Japan",
    teamId: 5,
    performance: 88,
    reliability: 80,
    consistency: 85,
    tyreConservation: 91,
    racecraft: 89
  },
  {
    id: 11,
    no: 11,
    name: "Jacques Villeneuve",
    country: "Canada",
    teamId: 6,
    performance: 87,
    reliability: 85,
    consistency: 86,
    tyreConservation: 90,
    racecraft: 88
  },
  {
    id: 12,
    no: 12,
    name: "Felipe Massa",
    country: "Brazil",
    teamId: 6,
    performance: 89,
    reliability: 87,
    consistency: 87,
    tyreConservation: 91,
    racecraft: 90
  },
  {
    id: 13,
    no: 14,
    name: "David Coulthard",
    country: "United Kingdom",
    teamId: 7,
    performance: 88,
    reliability: 81,
    consistency: 85,
    tyreConservation: 88,
    racecraft: 90
  },
  {
    id: 14,
    no: 15,
    name: "Christian Klien",
    country: "Austria",
    teamId: 7,
    performance: 84,
    reliability: 78,
    consistency: 82,
    tyreConservation: 87,
    racecraft: 86
  },
  {
    id: 15,
    no: 16,
    name: "Jarno Trulli",
    country: "Italy",
    teamId: 8,
    performance: 90,
    reliability: 89,
    consistency: 88,
    tyreConservation: 86,
    racecraft: 91
  },
  {
    id: 16,
    no: 17,
    name: "Ralf Schumacher",
    country: "Germany",
    teamId: 8,
    performance: 89,
    reliability: 90,
    consistency: 87,
    tyreConservation: 85,
    racecraft: 90
  },
  {
    id: 17,
    no: 18,
    name: "Tiago Monteiro",
    country: "Portugal",
    teamId: 9,
    performance: 76,
    reliability: 76,
    consistency: 78,
    tyreConservation: 84,
    racecraft: 79
  },
  {
    id: 18,
    no: 19,
    name: "Narain Karthikeyan",
    country: "India",
    teamId: 9,
    performance: 74,
    reliability: 74,
    consistency: 76,
    tyreConservation: 82,
    racecraft: 77
  },
  {
    id: 19,
    no: 20,
    name: "Patrick Friesacher",
    country: "Austria",
    teamId: 10,
    performance: 70,
    reliability: 73,
    consistency: 71,
    tyreConservation: 80,
    racecraft: 73
  },
  {
    id: 20,
    no: 21,
    name: "Christijan Albers",
    country: "Netherlands",
    teamId: 10,
    performance: 72,
    reliability: 72,
    consistency: 73,
    tyreConservation: 81,
    racecraft: 75
  }
];

export const F1_2005_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "6 March 2005",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "20 March 2005",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 3,
    name: "Bahrain Grand Prix",
    shortName: "BHR",
    circuit: "Bahrain International Circuit, Sakhir",
    date: "3 April 2005",
    trackId: "bahrain",
    country: "Bahrain"
  },
  {
    id: 4,
    name: "San Marino Grand Prix",
    shortName: "SMR",
    circuit: "Autodromo Enzo e Dino Ferrari, Imola",
    date: "24 April 2005",
    trackId: "imola",
    country: "Italy"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "8 May 2005",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "22 May 2005",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 7,
    name: "European Grand Prix",
    shortName: "EUR",
    circuit: "Nürburgring, Nürburg",
    date: "29 May 2005",
    trackId: "nurburgring",
    country: "Germany"
  },
  {
    id: 8,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "12 June 2005",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 9,
    name: "United States Grand Prix",
    shortName: "USA",
    circuit: "Indianapolis Motor Speedway, Indianapolis",
    date: "19 June 2005",
    trackId: "indianapolis",
    country: "United States"
  },
  {
    id: 10,
    name: "French Grand Prix",
    shortName: "FRA",
    circuit: "Circuit de Nevers Magny-Cours, Magny-Cours",
    date: "3 July 2005",
    trackId: "magnycours",
    country: "France"
  },
  {
    id: 11,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "10 July 2005",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 12,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Hockenheimring, Hockenheim",
    date: "24 July 2005",
    trackId: "hockenheim",
    country: "Germany"
  },
  {
    id: 13,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "31 July 2005",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 14,
    name: "Turkish Grand Prix",
    shortName: "TUR",
    circuit: "Istanbul Park, Istanbul",
    date: "21 August 2005",
    trackId: "istanbul",
    country: "Turkey"
  },
  {
    id: 15,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "4 September 2005",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 16,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "11 September 2005",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 17,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "25 September 2005",
    trackId: "saopaulo",
    country: "Brazil"
  },
  {
    id: 18,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka Circuit, Suzuka",
    date: "9 October 2005",
    trackId: "suzuka",
    country: "Japan"
  },
  {
    id: 19,
    name: "Chinese Grand Prix",
    shortName: "CHN",
    circuit: "Shanghai International Circuit, Shanghai",
    date: "16 October 2005",
    trackId: "shanghai",
    country: "China"
  }
];