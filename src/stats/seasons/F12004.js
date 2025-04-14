export const F1_2004_POINTS_SYSTEM = [
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

export const F1_2004_POINTS_FL = 0;
export const F1_2004_POINTS_POLE = 0;
export const F1_2004_TEAMS = [
  {
    id: 1,
    name: "Ferrari",
    shortName: "Ferrari",
    country: "Italy",
    reliability: 99,
    chassis: 99,
    engine: 99,
    tyreConservation: 96,
    color: "#DC0000", // Ferrari Red (from 2002)
  },
  {
    id: 2,
    name: "Williams-BMW",
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 88,
    chassis: 94,
    engine: 97,
    tyreConservation: 88,
    color: "#005Aee", // Williams Blue (from 2002)
  },
  {
    id: 3,
    name: "McLaren-Mercedes",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 93,
    chassis: 97,
    engine: 98,
    tyreConservation: 94,
    color: "#808080", // McLaren Silver (from 2002)
  },
  {
    id: 4,
    name: "Renault",
    shortName: "Renault",
    country: "France",
    reliability: 86,
    chassis: 92,
    engine: 95,
    tyreConservation: 87,
    color: "#00aaff", // Renault Yellow (from 2002)
  },
  {
    id: 5,
    name: "BAR-Honda",
    shortName: "BAR",
    country: "United Kingdom",
    reliability: 82,
    chassis: 91,
    engine: 94,
    tyreConservation: 95,
    color: "#8FaC8F", // BAR Greenish-Grey (from 2002)
  },
  {
    id: 6,
    name: "Sauber-Petronas",
    shortName: "Sauber",
    country: "Switzerland",
    reliability: 84,
    chassis: 87,
    engine: 84,
    tyreConservation: 90,
    color: "#008080", // Sauber Teal (from 2002)
  },
  {
    id: 7,
    name: "Jaguar-Cosworth",
    shortName: "Jaguar",
    country: "United Kingdom",
    reliability: 70,
    chassis: 84,
    engine: 82,
    tyreConservation: 88,
    color: "#008000", // Jaguar Green (from 2002)
  },
  {
    id: 8,
    name: "Toyota",
    shortName: "Toyota",
    country: "Japan",
    reliability: 82,
    chassis: 86,
    engine: 90,
    tyreConservation: 85,
    color: "#ffaaaa", // Red (Toyota Racing) (from 2002)
  },
  {
    id: 9,
    name: "Jordan-Ford",
    shortName: "Jordan",
    country: "Ireland",
    reliability: 74,
    chassis: 85,
    engine: 86,
    tyreConservation: 97,
    color: "#FFD700", // Jordan Yellow (from 2002)
  },
  {
    id: 10,
    name: "Minardi-Cosworth",
    shortName: "Minardi",
    country: "Italy",
    reliability: 67,
    chassis: 81,
    engine: 78,
    tyreConservation: 82,
    color: "#000000", // Minardi Black (from 2002)
  }
];

export const F1_2004_DRIVERS = [
  {
    id: 1,
    no: 1,
    name: "Michael Schumacher",
    country: "Germany",
    teamId: 1,
    performance: 99,
    reliability: 97,
    consistency: 99,
    tyreConservation: 98,
    racecraft: 99
  },
  {
    id: 2,
    no: 2,
    name: "Rubens Barrichello",
    country: "Brazil",
    teamId: 1,
    performance: 95,
    reliability: 93,
    consistency: 96,
    tyreConservation: 95,
    racecraft: 97
  },
  {
    id: 3,
    no: 3,
    name: "Juan Pablo Montoya",
    country: "Colombia",
    teamId: 2,
    performance: 96,
    reliability: 89,
    consistency: 93,
    tyreConservation: 90,
    racecraft: 97
  },
  {
    id: 4,
    no: 4,
    name: "Ralf Schumacher",
    country: "Germany",
    teamId: 2,
    performance: 93,
    reliability: 91,
    consistency: 92,
    tyreConservation: 91,
    racecraft: 94
  },
  {
    id: 5,
    no: 5,
    name: "Kimi Räikkönen",
    country: "Finland",
    teamId: 3,
    performance: 97,
    reliability: 90,
    consistency: 94,
    tyreConservation: 96,
    racecraft: 98
  },
  {
    id: 6,
    no: 6,
    name: "David Coulthard",
    country: "United Kingdom",
    teamId: 3,
    performance: 92,
    reliability: 92,
    consistency: 93,
    tyreConservation: 92,
    racecraft: 95
  },
  {
    id: 7,
    no: 7,
    name: "Jarno Trulli",
    country: "Italy",
    teamId: 4,
    performance: 90,
    reliability: 86,
    consistency: 88,
    tyreConservation: 87,
    racecraft: 91
  },
  {
    id: 8,
    no: 8,
    name: "Fernando Alonso",
    country: "Spain",
    teamId: 4,
    performance: 93,
    reliability: 88,
    consistency: 90,
    tyreConservation: 89,
    racecraft: 94
  },
  {
    id: 9,
    no: 9,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 5,
    performance: 91,
    reliability: 84,
    consistency: 89,
    tyreConservation: 96,
    racecraft: 93
  },
  {
    id: 10,
    no: 10,
    name: "Takuma Sato",
    country: "Japan",
    teamId: 5,
    performance: 88,
    reliability: 80,
    consistency: 85,
    tyreConservation: 94,
    racecraft: 90
  },
  {
    id: 11,
    no: 11,
    name: "Giancarlo Fisichella",
    country: "Italy",
    teamId: 6,
    performance: 89,
    reliability: 76,
    consistency: 83,
    tyreConservation: 97,
    racecraft: 91
  },
  {
    id: 12,
    no: 12,
    name: "Felipe Massa",
    country: "Brazil",
    teamId: 6,
    performance: 86,
    reliability: 78,
    consistency: 81,
    tyreConservation: 95,
    racecraft: 88
  },
  {
    id: 13,
    no: 14,
    name: "Mark Webber",
    country: "Australia",
    teamId: 7,
    performance: 87,
    reliability: 78,
    consistency: 84,
    tyreConservation: 90,
    racecraft: 89
  },
  {
    id: 14,
    no: 15,
    name: "Christian Klien",
    country: "Austria",
    teamId: 7,
    performance: 82,
    reliability: 74,
    consistency: 79,
    tyreConservation: 88,
    racecraft: 84
  },
  {
    id: 15,
    no: 16,
    name: "Cristiano da Matta",
    country: "Brazil",
    teamId: 8,
    performance: 83,
    reliability: 79,
    consistency: 80,
    tyreConservation: 87,
    racecraft: 85
  },
  {
    id: 16,
    no: 17,
    name: "Olivier Panis",
    country: "France",
    teamId: 8,
    performance: 85,
    reliability: 81,
    consistency: 82,
    tyreConservation: 89,
    racecraft: 87
  },
  {
    id: 17,
    no: 18,
    name: "Nick Heidfeld",
    country: "Germany",
    teamId: 9,
    performance: 81,
    reliability: 85,
    consistency: 82,
    tyreConservation: 91,
    racecraft: 84
  },
  {
    id: 18,
    no: 19,
    name: "Giorgio Pantano",
    country: "Italy",
    teamId: 9,
    performance: 76,
    reliability: 80,
    consistency: 74,
    tyreConservation: 89,
    racecraft: 78
  },
  {
    id: 19,
    no: 20,
    name: "Gianmaria Bruni",
    country: "Italy",
    teamId: 10,
    performance: 74,
    reliability: 77,
    consistency: 72,
    tyreConservation: 84,
    racecraft: 76
  },
  {
    id: 20,
    no: 21,
    name: "Zsolt Baumgartner",
    country: "Hungary",
    teamId: 10,
    performance: 70,
    reliability: 75,
    consistency: 68,
    tyreConservation: 82,
    racecraft: 72
  }
];

export const F1_2004_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "7 March 2004",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "21 March 2004",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 3,
    name: "Bahrain Grand Prix",
    shortName: "BHR",
    circuit: "Bahrain International Circuit, Sakhir",
    date: "4 April 2004",
    trackId: "bahrain",
    country: "Bahrain"
  },
  {
    id: 4,
    name: "San Marino Grand Prix",
    shortName: "SMR",
    circuit: "Autodromo Enzo e Dino Ferrari, Imola",
    date: "25 April 2004",
    trackId: "imola",
    country: "Italy"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "9 May 2004",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "23 May 2004",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 7,
    name: "European Grand Prix",
    shortName: "EUR",
    circuit: "Nürburgring, Nürburg",
    date: "30 May 2004",
    trackId: "nurburgring",
    country: "Germany"
  },
  {
    id: 8,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "13 June 2004",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 9,
    name: "United States Grand Prix",
    shortName: "USA",
    circuit: "Indianapolis Motor Speedway, Indianapolis",
    date: "20 June 2004",
    trackId: "indianapolis",
    country: "United States"
  },
  {
    id: 10,
    name: "French Grand Prix",
    shortName: "FRA",
    circuit: "Circuit de Nevers Magny-Cours, Magny-Cours",
    date: "4 July 2004",
    trackId: "magnycours",
    country: "France"
  },
  {
    id: 11,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "11 July 2004",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 12,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Hockenheimring, Hockenheim",
    date: "25 July 2004",
    trackId: "hockenheimnew",
    country: "Germany"
  },
  {
    id: 13,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "15 August 2004",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 14,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "29 August 2004",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 15,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "12 September 2004",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 16,
    name: "Chinese Grand Prix",
    shortName: "CHN",
    circuit: "Shanghai International Circuit, Shanghai",
    date: "26 September 2004",
    trackId: "shanghai",
    country: "China"
  },
  {
    id: 17,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka Circuit, Suzuka",
    date: "10 October 2004",
    trackId: "suzuka",
    country: "Japan"
  },
  {
    id: 18,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "24 October 2004",
    trackId: "saopaulo",
    country: "Brazil"
  }
];