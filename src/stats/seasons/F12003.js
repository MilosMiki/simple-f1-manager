export const F1_2003_POINTS_SYSTEM = [
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

export const F1_2003_POINTS_FL = 0;
export const F1_2003_POINTS_POLE = 0;
export const F1_2003_TEAMS = [
  {
    id: 1,
    name: "Ferrari",
    shortName: "Ferrari",
    country: "Italy",
    reliability: 98,
    chassis: 99,
    engine: 98,
    tyreConservation: 95,
    color: "#DC0000", // Ferrari Red (from 2002)
  },
  {
    id: 2,
    name: "Williams-BMW",
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 86,
    chassis: 93,
    engine: 96,
    tyreConservation: 87,
    color: "#005Aee", // Williams Blue (from 2002)
  },
  {
    id: 3,
    name: "McLaren-Mercedes",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 91,
    chassis: 96,
    engine: 97,
    tyreConservation: 93,
    color: "#808080", // McLaren Silver (from 2002)
  },
  {
    id: 4,
    name: "Renault",
    shortName: "Renault",
    country: "France",
    reliability: 84,
    chassis: 90,
    engine: 93,
    tyreConservation: 85,
    color: "#00aaff", // Renault Yellow (from 2002)
  },
  {
    id: 5,
    name: "Sauber-Petronas",
    shortName: "Sauber",
    country: "Switzerland",
    reliability: 82,
    chassis: 85,
    engine: 82,
    tyreConservation: 89,
    color: "#008080", // Sauber Teal (from 2002)
  },
  {
    id: 6,
    name: "Jordan-Ford",
    shortName: "Jordan",
    country: "Ireland",
    reliability: 72,
    chassis: 83,
    engine: 84,
    tyreConservation: 96,
    color: "#FFD700", // Jordan Yellow (from 2002)
  },
  {
    id: 7,
    name: "Jaguar-Cosworth",
    shortName: "Jaguar",
    country: "United Kingdom",
    reliability: 68,
    chassis: 82,
    engine: 80,
    tyreConservation: 87,
    color: "#008000", // Jaguar Green (from 2002)
  },
  {
    id: 8,
    name: "BAR-Honda",
    shortName: "BAR",
    country: "United Kingdom",
    reliability: 73,
    chassis: 86,
    engine: 84,
    tyreConservation: 91,
    color: "#8FaC8F", // BAR Greenish-Grey (from 2002)
  },
  {
    id: 9,
    name: "Minardi-Cosworth",
    shortName: "Minardi",
    country: "Italy",
    reliability: 65,
    chassis: 79,
    engine: 76,
    tyreConservation: 80,
    color: "#000000", // Minardi Black (from 2002)
  },
  {
    id: 10,
    name: "Toyota",
    shortName: "Toyota",
    country: "Japan",
    reliability: 80,
    chassis: 84,
    engine: 88,
    tyreConservation: 83,
    color: "#ffaaaa", // Red (Toyota Racing) (from 2002)
  }
];
export const F1_2003_DRIVERS = [
  {
    id: 1,
    no: 1,
    name: "Michael Schumacher",
    country: "Germany",
    teamId: 1,
    performance: 99,
    reliability: 96,
    consistency: 98,
    tyreConservation: 97,
    racecraft: 99
  },
  {
    id: 2,
    no: 2,
    name: "Rubens Barrichello",
    country: "Brazil",
    teamId: 1,
    performance: 93,
    reliability: 91,
    consistency: 94,
    tyreConservation: 93,
    racecraft: 96
  },
  {
    id: 3,
    no: 3,
    name: "David Coulthard",
    country: "United Kingdom",
    teamId: 3,
    performance: 91,
    reliability: 90,
    consistency: 92,
    tyreConservation: 91,
    racecraft: 94
  },
  {
    id: 4,
    no: 4,
    name: "Kimi Räikkönen",
    country: "Finland",
    teamId: 3,
    performance: 94,
    reliability: 88,
    consistency: 90,
    tyreConservation: 92,
    racecraft: 95
  },
  {
    id: 5,
    no: 6,
    name: "Juan Pablo Montoya",
    country: "Colombia",
    teamId: 2,
    performance: 95,
    reliability: 87,
    consistency: 91,
    tyreConservation: 89,
    racecraft: 96
  },
  {
    id: 6,
    no: 5,
    name: "Ralf Schumacher",
    country: "Germany",
    teamId: 2,
    performance: 92,
    reliability: 89,
    consistency: 90,
    tyreConservation: 88,
    racecraft: 93
  },
  {
    id: 7,
    no: 7,
    name: "Jarno Trulli",
    country: "Italy",
    teamId: 4,
    performance: 88,
    reliability: 84,
    consistency: 86,
    tyreConservation: 85,
    racecraft: 89
  },
  {
    id: 8,
    no: 8,
    name: "Fernando Alonso",
    country: "Spain",
    teamId: 4,
    performance: 90,
    reliability: 86,
    consistency: 88,
    tyreConservation: 87,
    racecraft: 91
  },
  {
    id: 9,
    no: 9,
    name: "Nick Heidfeld",
    country: "Germany",
    teamId: 5,
    performance: 84,
    reliability: 83,
    consistency: 84,
    tyreConservation: 90,
    racecraft: 86
  },
  {
    id: 10,
    no: 10,
    name: "Heinz-Harald Frentzen",
    country: "Germany",
    teamId: 5,
    performance: 83,
    reliability: 81,
    consistency: 82,
    tyreConservation: 89,
    racecraft: 85
  },
  {
    id: 11,
    no: 11,
    name: "Giancarlo Fisichella",
    country: "Italy",
    teamId: 6,
    performance: 86,
    reliability: 74,
    consistency: 80,
    tyreConservation: 95,
    racecraft: 88
  },
  {
    id: 12,
    no: 12,
    name: "Ralph Firman",
    country: "United Kingdom",
    teamId: 6,
    performance: 75,
    reliability: 70,
    consistency: 73,
    tyreConservation: 92,
    racecraft: 78
  },
  {
    id: 13,
    no: 14,
    name: "Mark Webber",
    country: "Australia",
    teamId: 7,
    performance: 82,
    reliability: 76,
    consistency: 80,
    tyreConservation: 88,
    racecraft: 84
  },
  {
    id: 14,
    no: 15,
    name: "Antônio Pizzonia",
    country: "Brazil",
    teamId: 7,
    performance: 77,
    reliability: 72,
    consistency: 75,
    tyreConservation: 85,
    racecraft: 80
  },
  {
    id: 15,
    no: 16,
    name: "Jacques Villeneuve",
    country: "Canada",
    teamId: 8,
    performance: 85,
    reliability: 78,
    consistency: 83,
    tyreConservation: 90,
    racecraft: 87
  },
  {
    id: 16,
    no: 17,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 8,
    performance: 87,
    reliability: 80,
    consistency: 85,
    tyreConservation: 91,
    racecraft: 89
  },
  {
    id: 17,
    no: 18,
    name: "Justin Wilson",
    country: "United Kingdom",
    teamId: 9, // Took over from Verstappen later in the season
    performance: 72,
    reliability: 68,
    consistency: 70,
    tyreConservation: 82,
    racecraft: 75
  },
  {
    id: 18,
    no: 19,
    name: "Jos Verstappen",
    country: "Netherlands",
    teamId: 9,
    performance: 70,
    reliability: 66,
    consistency: 68,
    tyreConservation: 80,
    racecraft: 73
  },
  {
    id: 19,
    no: 20,
    name: "Olivier Panis",
    country: "France",
    teamId: 10,
    performance: 81,
    reliability: 77,
    consistency: 79,
    tyreConservation: 84,
    racecraft: 83
  },
  {
    id: 20,
    no: 21,
    name: "Cristiano da Matta",
    country: "Brazil",
    teamId: 10,
    performance: 79,
    reliability: 75,
    consistency: 77,
    tyreConservation: 82,
    racecraft: 81
  }
];

export const F1_2003_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "9 March 2003",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "23 March 2003",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 3,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "6 April 2003",
    trackId: "saopaulo",
    country: "Brazil"
  },
  {
    id: 4,
    name: "San Marino Grand Prix",
    shortName: "SMR",
    circuit: "Autodromo Enzo e Dino Ferrari, Imola",
    date: "20 April 2003",
    trackId: "imola",
    country: "Italy"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "4 May 2003",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "Austrian Grand Prix",
    shortName: "AUT",
    circuit: "A1-Ring, Spielberg, Styria",
    date: "18 May 2003",
    trackId: "a1ring",
    country: "Austria"
  },
  {
    id: 7,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "1 June 2003",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 8,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "15 June 2003",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 9,
    name: "European Grand Prix",
    shortName: "EUR",
    circuit: "Nürburgring, Nürburg",
    date: "29 June 2003",
    trackId: "nurburgring",
    country: "Germany"
  },
  {
    id: 10,
    name: "French Grand Prix",
    shortName: "FRA",
    circuit: "Circuit de Nevers Magny-Cours, Magny-Cours",
    date: "6 July 2003",
    trackId: "magnycours",
    country: "France"
  },
  {
    id: 11,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "20 July 2003",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 12,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Hockenheimring, Hockenheim",
    date: "3 August 2003",
    trackId: "hockenheim",
    country: "Germany"
  },
  {
    id: 13,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "24 August 2003",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 14,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "14 September 2003",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 15,
    name: "United States Grand Prix",
    shortName: "USA",
    circuit: "Indianapolis Motor Speedway, Indianapolis",
    date: "28 September 2003",
    trackId: "indianapolis",
    country: "United States"
  },
  {
    id: 16,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka Circuit, Suzuka",
    date: "12 October 2003",
    trackId: "suzuka",
    country: "Japan"
  }
];