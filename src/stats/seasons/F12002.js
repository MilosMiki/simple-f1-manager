export const F1_2002_POINTS_SYSTEM = [
  10 + (1/30),        // 1st
  6 + (1/(30**2)),    // 2nd
  4 + (1/(30**3)),    // 3rd
  3 + (1/(30**4)),    // 4th
  2 + (1/(30**5)),    // 5th
  1 + (1/(30**6)),    // 6th
  0 + (1/(30**7)),    // 7th
  0 + (1/(30**8)),    // 8th
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

export const F1_2002_POINTS_FL = 0;
export const F1_2002_POINTS_POLE = 0;

export const F1_2002_TEAMS = [
  {
    id: 1,
    name: "Ferrari",
    shortName: "Ferrari",
    country: "Italy",
    reliability: 98,
    chassis: 99,
    engine: 98,
    tyreConservation: 94,
    color: "#DC0000",
  },
  {
    id: 2,
    name: "Williams-BMW",
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 85,
    chassis: 92,
    engine: 95,
    tyreConservation: 86,
    color: "#005Aee",
  },
  {
    id: 3,
    name: "McLaren-Mercedes",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 90,
    chassis: 95,
    engine: 97,
    tyreConservation: 92,
    color: "#808080",
  },
  {
    id: 4,
    name: "Renault",
    shortName: "Renault",
    country: "France",
    reliability: 83,
    chassis: 88,
    engine: 92,
    tyreConservation: 84,
    color: "#00aaff", // Yellow
  },
  {
    id: 5,
    name: "Jordan-Honda",
    shortName: "Jordan",
    country: "Ireland",
    reliability: 75,
    chassis: 86,
    engine: 87,
    tyreConservation: 97,
    color: "#FFD700",
  },
  {
    id: 6,
    name: "BAR-Honda",
    shortName: "BAR",
    country: "United Kingdom",
    reliability: 70,
    chassis: 84,
    engine: 82,
    tyreConservation: 90,
    color: "#8FaC8F",
  },
  {
    id: 7,
    name: "Sauber-Petronas",
    shortName: "Sauber",
    country: "Switzerland",
    reliability: 80,
    chassis: 82,
    engine: 80,
    tyreConservation: 88,
    color: "#008080",
  },
  {
    id: 8,
    name: "Arrows-Cosworth",
    shortName: "Arrows",
    country: "United Kingdom",
    reliability: 60,
    chassis: 88,
    engine: 77,
    tyreConservation: 80,
    color: "#FF4500",
  },
  {
    id: 9,
    name: "Jaguar-Cosworth",
    shortName: "Jaguar",
    country: "United Kingdom",
    reliability: 65,
    chassis: 80,
    engine: 78,
    tyreConservation: 86,
    color: "#008000",
  },
  {
    id: 10,
    name: "Minardi-Asiatech",
    shortName: "Minardi",
    country: "Italy",
    reliability: 67,
    chassis: 78,
    engine: 74,
    tyreConservation: 78,
    color: "#000000",
  },
  {
    id: 11,
    name: "Toyota",
    shortName: "Toyota",
    country: "Japan",
    reliability: 78,
    chassis: 81,
    engine: 85,
    tyreConservation: 82,
    color: "#ffaaaa", // Red (Toyota Racing)
  }
];
export const F1_2002_DRIVERS = [
  {
    id: 1,
    no: 1,
    name: "Michael Schumacher",
    country: "Germany",
    teamId: 1,
    performance: 99,
    reliability: 95,
    consistency: 98,
    tyreConservation: 96,
    racecraft: 99
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
    no: 6,
    name: "Juan Pablo Montoya",
    country: "Colombia",
    teamId: 2,
    performance: 90,
    reliability: 85,
    consistency: 88,
    tyreConservation: 86,
    racecraft: 93
  },
  {
    id: 4,
    no: 5,
    name: "Ralf Schumacher",
    country: "Germany",
    teamId: 2,
    performance: 88,
    reliability: 87,
    consistency: 89,
    tyreConservation: 87,
    racecraft: 91
  },
  {
    id: 5,
    no: 3,
    name: "David Coulthard",
    country: "United Kingdom",
    teamId: 3,
    performance: 93,
    reliability: 88,
    consistency: 91,
    tyreConservation: 90,
    racecraft: 94
  },
  {
    id: 6,
    no: 4,
    name: "Kimi Räikkönen",
    country: "Finland",
    teamId: 3,
    performance: 87,
    reliability: 85,
    consistency: 86,
    tyreConservation: 88,
    racecraft: 90
  },
  {
    id: 7,
    no: 7,
    name: "Jarno Trulli",
    country: "Italy",
    teamId: 4,
    performance: 85,
    reliability: 82,
    consistency: 84,
    tyreConservation: 83,
    racecraft: 88
  },
  {
    id: 8,
    no: 8,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 4,
    performance: 83,
    reliability: 80,
    consistency: 82,
    tyreConservation: 81,
    racecraft: 86
  },
  {
    id: 9,
    no: 9,
    name: "Giancarlo Fisichella",
    country: "Italy",
    teamId: 5,
    performance: 84,
    reliability: 79,
    consistency: 83,
    tyreConservation: 84,
    racecraft: 87
  },
  {
    id: 10,
    no: 10,
    name: "Takuma Sato",
    country: "Japan",
    teamId: 5,
    performance: 78,
    reliability: 75,
    consistency: 77,
    tyreConservation: 76,
    racecraft: 80
  },
  {
    id: 11,
    no: 12,
    name: "Jacques Villeneuve",
    country: "Canada",
    teamId: 6,
    performance: 82,
    reliability: 72,
    consistency: 80,
    tyreConservation: 85,
    racecraft: 84
  },
  {
    id: 12,
    no: 11,
    name: "Olivier Panis",
    country: "France",
    teamId: 6,
    performance: 80,
    reliability: 70,
    consistency: 78,
    tyreConservation: 83,
    racecraft: 82
  },
  {
    id: 13,
    no: 20,
    name: "Nick Heidfeld",
    country: "Germany",
    teamId: 7,
    performance: 79,
    reliability: 77,
    consistency: 78,
    tyreConservation: 80,
    racecraft: 81
  },
  {
    id: 14,
    no: 21,
    name: "Felipe Massa",
    country: "Brazil",
    teamId: 7,
    performance: 76,
    reliability: 75,
    consistency: 76,
    tyreConservation: 78,
    racecraft: 79
  },
  {
    id: 15,
    no: 16,
    name: "Eddie Irvine",
    country: "United Kingdom",
    teamId: 9,
    performance: 81,
    reliability: 68,
    consistency: 79,
    tyreConservation: 87,
    racecraft: 83
  },
  {
    id: 16,
    no: 17,
    name: "Pedro de la Rosa",
    country: "Spain",
    teamId: 9,
    performance: 77,
    reliability: 66,
    consistency: 75,
    tyreConservation: 85,
    racecraft: 80
  },
  {
    id: 17,
    no: 22,
    name: "Heinz-Harald Frentzen",
    country: "Germany",
    teamId: 8,
    performance: 75,
    reliability: 65,
    consistency: 74,
    tyreConservation: 78,
    racecraft: 78
  },
  {
    id: 18,
    no: 23,
    name: "Enrique Bernoldi",
    country: "Brazil",
    teamId: 8,
    performance: 68,
    reliability: 63,
    consistency: 69,
    tyreConservation: 72,
    racecraft: 70
  },
  {
    id: 19,
    no: 24,
    name: "Mark Webber",
    country: "Australia",
    teamId: 10,
    performance: 73,
    reliability: 70,
    consistency: 72,
    tyreConservation: 75,
    racecraft: 76
  },
  {
    id: 20,
    no: 25,
    name: "Alex Yoong",
    country: "Malaysia",
    teamId: 10,
    performance: 65,
    reliability: 68,
    consistency: 66,
    tyreConservation: 70,
    racecraft: 68
  },
  {
    id: 21,
    no: 14,
    name: "Mika Salo", // Initially Salo, replaced by McNish later
    country: "Finland",
    teamId: 11,
    performance: 74,
    reliability: 73,
    consistency: 74,
    tyreConservation: 77,
    racecraft: 77
  },
  {
    id: 22,
    no: 15,
    name: "Allan McNish",
    country: "United Kingdom",
    teamId: 11,
    performance: 76,
    reliability: 75,
    consistency: 75,
    tyreConservation: 78,
    racecraft: 79
  }
];

export const F1_2002_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "3 March 2002",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "17 March 2002",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 3,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "31 March 2002",
    trackId: "saopaulo",
    country: "Brazil"
  },
  {
    id: 4,
    name: "San Marino Grand Prix",
    shortName: "SMR",
    circuit: "Autodromo Enzo e Dino Ferrari, Imola",
    date: "14 April 2002",
    trackId: "imola",
    country: "Italy"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "28 April 2002",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "Austrian Grand Prix",
    shortName: "AUT",
    circuit: "A1-Ring, Spielberg, Styria",
    date: "12 May 2002",
    trackId: "a1ring",
    country: "Austria"
  },
  {
    id: 7,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "26 May 2002",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 8,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "9 June 2002",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 9,
    name: "European Grand Prix",
    shortName: "EUR",
    circuit: "Nürburgring, Nürburg",
    date: "23 June 2002",
    trackId: "nurburgring",
    country: "Germany"
  },
  {
    id: 10,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "7 July 2002",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 11,
    name: "French Grand Prix",
    shortName: "FRA",
    circuit: "Circuit de Nevers Magny-Cours, Magny-Cours",
    date: "21 July 2002",
    trackId: "magnycours",
    country: "France"
  },
  {
    id: 12,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Hockenheimring, Hockenheim",
    date: "28 July 2002",
    trackId: "hockenheimnew",
    country: "Germany"
  },
  {
    id: 13,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "18 August 2002",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 14,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "1 September 2002",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 15,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "15 September 2002",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 16,
    name: "United States Grand Prix",
    shortName: "USA",
    circuit: "Indianapolis Motor Speedway, Indianapolis",
    date: "29 September 2002",
    trackId: "indianapolis",
    country: "United States"
  },
  {
    id: 17,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka Circuit, Suzuka",
    date: "13 October 2002",
    trackId: "suzuka",
    country: "Japan"
  }
];