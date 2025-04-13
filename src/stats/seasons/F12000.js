export const F1_2000_POINTS_SYSTEM = [
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
export const F1_2000_POINTS_FL = 0;
export const F1_2000_POINTS_POLE = 0;

export const F1_2000_TEAMS = [
  {
    id: 1,
    name: "Ferrari",
    shortName: "Ferrari",
    country: "Italy",
    reliability: 96,
    chassis: 98,
    engine: 96,
    tyreConservation: 92,
    color: "#DC0000", // Rosso Corsa (Red, visible on white)
  },
  {
    id: 2,
    name: "McLaren-Mercedes",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 88,
    chassis: 97,
    engine: 95,
    tyreConservation: 90,
    color: "#808080", // Gray
  },
  {
    id: 3,
    name: "Williams-BMW",
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 80,
    chassis: 88,
    engine: 93,
    tyreConservation: 82,
    color: "#005Aee",
  },
  {
    id: 4,
    name: "Benetton-Playlife",
    shortName: "Benetton",
    country: "Italy",
    reliability: 78,
    chassis: 85,
    engine: 90,
    tyreConservation: 80,
    color: "#00aaff", // Sky Blue (visible on white)
  },
  {
    id: 5,
    name: "Jordan-Mugen-Honda",
    shortName: "Jordan",
    country: "Ireland",
    reliability: 70,
    chassis: 84,
    engine: 85,
    tyreConservation: 95,
    color: "#FFD700", // Yellow (visible on white)
  },
  {
    id: 6,
    name: "BAR-Honda",
    shortName: "BAR",
    country: "United Kingdom",
    reliability: 65,
    chassis: 82,
    engine: 80,
    tyreConservation: 88,
    color: "#8FaC8F", // Blue (visible on white)
  },
  {
    id: 7,
    name: "Sauber-Petronas",
    shortName: "Sauber",
    country: "Switzerland",
    reliability: 76,
    chassis: 80,
    engine: 78,
    tyreConservation: 86,
    color: "#008080", // Teal (secondary color from Petronas, visible on white)
  },
  {
    id: 8,
    name: "Arrows-Supertec",
    shortName: "Arrows",
    country: "United Kingdom",
    reliability: 55,
    chassis: 86,
    engine: 75,
    tyreConservation: 78,
    color: "#FF4500", // Black
  },
  {
    id: 9,
    name: "Jaguar-Cosworth",
    shortName: "Jaguar",
    country: "United Kingdom",
    reliability: 60,
    chassis: 78,
    engine: 76,
    tyreConservation: 84,
    color: "#008000", // British Racing Green
  },
  {
    id: 10,
    name: "Minardi-Fondmetal",
    shortName: "Minardi",
    country: "Italy",
    reliability: 62,
    chassis: 75,
    engine: 72,
    tyreConservation: 76,
    color: "#ddee20",
  },
  {
    id: 11,
    name: "Prost-Peugeot",
    shortName: "Prost",
    country: "France",
    reliability: 58,
    chassis: 77,
    engine: 74,
    tyreConservation: 80,
    color: "#0000FF", // White
  }
];
export const F1_2000_DRIVERS = [
  {
    no: 1,
    id: 1,
    name: "Michael Schumacher",
    country: "Germany",
    teamId: 1,
    performance: 99,
    reliability: 92,
    consistency: 97,
    tyreConservation: 94,
    racecraft: 99
  },
  {
    no: 2,
    id: 2,
    name: "Rubens Barrichello",
    country: "Brazil",
    teamId: 1,
    performance: 88,
    reliability: 88,
    consistency: 90,
    tyreConservation: 89,
    racecraft: 92
  },
  {
    no: 3,
    id: 3,
    name: "Mika Häkkinen",
    country: "Finland",
    teamId: 2,
    performance: 97,
    reliability: 85,
    consistency: 94,
    tyreConservation: 91,
    racecraft: 96
  },
  {
    no: 4,
    id: 4,
    name: "David Coulthard",
    country: "United Kingdom",
    teamId: 2,
    performance: 90,
    reliability: 87,
    consistency: 91,
    tyreConservation: 88,
    racecraft: 93
  },
  {
    no: 5,
    id: 5,
    name: "Ralf Schumacher",
    country: "Germany",
    teamId: 3,
    performance: 85,
    reliability: 82,
    consistency: 86,
    tyreConservation: 84,
    racecraft: 88
  },
  {
    no: 6,
    id: 6,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 3,
    performance: 78,
    reliability: 75,
    consistency: 79,
    tyreConservation: 80,
    racecraft: 82
  },
  {
    no: 7,
    id: 7,
    name: "Giancarlo Fisichella",
    country: "Italy",
    teamId: 4,
    performance: 82,
    reliability: 78,
    consistency: 83,
    tyreConservation: 81,
    racecraft: 85
  },
  {
    no: 8,
    id: 8,
    name: "Alexander Wurz",
    country: "Austria",
    teamId: 4,
    performance: 79,
    reliability: 76,
    consistency: 80,
    tyreConservation: 78,
    racecraft: 81
  },
  {
    no: 9,
    id: 9,
    name: "Heinz-Harald Frentzen",
    country: "Germany",
    teamId: 5,
    performance: 86,
    reliability: 72,
    consistency: 84,
    tyreConservation: 87,
    racecraft: 89
  },
  {
    no: 10,
    id: 10,
    name: "Jarno Trulli",
    country: "Italy",
    teamId: 5,
    performance: 83,
    reliability: 70,
    consistency: 81,
    tyreConservation: 85,
    racecraft: 87
  },
  {
    no: 11,
    id: 11,
    name: "Jacques Villeneuve",
    country: "Canada",
    teamId: 6,
    performance: 80,
    reliability: 68,
    consistency: 78,
    tyreConservation: 86,
    racecraft: 84
  },
  {
    no: 12,
    id: 12,
    name: "Ricardo Zonta",
    country: "Brazil",
    teamId: 6,
    performance: 75,
    reliability: 65,
    consistency: 76,
    tyreConservation: 83,
    racecraft: 80
  },
  {
    no: 14,
    id: 13,
    name: "Mika Salo",
    country: "Finland",
    teamId: 7,
    performance: 72,
    reliability: 79,
    consistency: 74,
    tyreConservation: 82,
    racecraft: 78
  },
  {
    no: 15,
    id: 14,
    name: "Pedro Diniz",
    country: "Brazil",
    teamId: 7,
    performance: 68,
    reliability: 77,
    consistency: 70,
    tyreConservation: 79,
    racecraft: 75
  },
  {
    no: 16,
    id: 15,
    name: "Pedro de la Rosa",
    country: "Spain",
    teamId: 8,
    performance: 70,
    reliability: 60,
    consistency: 72,
    tyreConservation: 75,
    racecraft: 77
  },
  {
    no: 17,
    id: 16,
    name: "Jos Verstappen",
    country: "Netherlands",
    teamId: 8,
    performance: 65,
    reliability: 58,
    consistency: 68,
    tyreConservation: 73,
    racecraft: 70
  },
  {
    no: 18,
    id: 17,
    name: "Eddie Irvine",
    country: "United Kingdom",
    teamId: 9,
    performance: 84,
    reliability: 65,
    consistency: 82,
    tyreConservation: 88,
    racecraft: 86
  },
  {
    no: 19,
    id: 18,
    name: "Johnny Herbert",
    country: "United Kingdom",
    teamId: 9,
    performance: 76,
    reliability: 62,
    consistency: 75,
    tyreConservation: 85,
    racecraft: 80
  },
  {
    no: 20,
    id: 19,
    name: "Jean Alesi",
    country: "France",
    teamId: 10,
    performance: 78,
    reliability: 70,
    consistency: 77,
    tyreConservation: 77,
    racecraft: 82
  },
  {
    no: 21,
    id: 20,
    name: "Gastón Mazzacane",
    country: "Argentina",
    teamId: 10,
    performance: 60,
    reliability: 65,
    consistency: 62,
    tyreConservation: 68,
    racecraft: 65
  },
  {
    no: 22,
    id: 21,
    name: "Nick Heidfeld",
    country: "Germany",
    teamId: 11,
    performance: 74,
    reliability: 60,
    consistency: 73,
    tyreConservation: 76,
    racecraft: 79
  },
  {
    no: 23,
    id: 22,
    name: "Luciano Burti",
    country: "Brazil",
    teamId: 11,
    performance: 62,
    reliability: 55,
    consistency: 64,
    tyreConservation: 70,
    racecraft: 68
  }
];
export const F1_2000_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "12 March 2000",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "26 March 2000",
    trackId: "saopaulo",
    country: "Brazil"
  },
  {
    id: 3,
    name: "San Marino Grand Prix",
    shortName: "SMR",
    circuit: "Autodromo Enzo e Dino Ferrari, Imola",
    date: "9 April 2000",
    trackId: "imola",
    country: "Italy"
  },
  {
    id: 4,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "23 April 2000",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "7 May 2000",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "European Grand Prix",
    shortName: "EUR",
    circuit: "Nürburgring, Nürburg",
    date: "21 May 2000",
    trackId: "nurburgring",
    country: "Germany"
  },
  {
    id: 7,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "4 June 2000",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 8,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "18 June 2000",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 9,
    name: "French Grand Prix",
    shortName: "FRA",
    circuit: "Circuit de Nevers Magny-Cours, Magny-Cours",
    date: "2 July 2000",
    trackId: "magnycours",
    country: "France"
  },
  {
    id: 10,
    name: "Austrian Grand Prix",
    shortName: "AUT",
    circuit: "A1-Ring, Spielberg, Styria",
    date: "16 July 2000",
    trackId: "a1ring",
    country: "Austria"
  },
  {
    id: 11,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Hockenheimring, Hockenheim",
    date: "30 July 2000",
    trackId: "hockenheim",
    country: "Germany"
  },
  {
    id: 12,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "13 August 2000",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 13,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "27 August 2000",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 14,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "10 September 2000",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 15,
    name: "United States Grand Prix",
    shortName: "USA",
    circuit: "Indianapolis Motor Speedway, Indianapolis",
    date: "24 September 2000",
    trackId: "indianapolis",
    country: "United States"
  },
  {
    id: 16,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka Circuit, Suzuka",
    date: "8 October 2000",
    trackId: "suzuka",
    country: "Japan"
  },
  {
    id: 17,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "22 October 2000",
    trackId: "sepang",
    country: "Malaysia"
  }
];