export const F1_1999_POINTS_SYSTEM = [
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
export const F1_1999_POINTS_FL = 0;
export const F1_1999_POINTS_POLE = 0;

export const F1_1999_TEAMS = [
  {
    id: 1,
    name: "McLaren-Mercedes",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 80, // Slightly less reliable than 1998
    chassis: 95,
    engine: 94,
    tyreConservation: 88,
    color: "#808080", // Gray
  },
  {
    id: 2,
    name: "Ferrari",
    shortName: "Ferrari",
    country: "Italy",
    reliability: 90, // Improved reliability
    chassis: 96,
    engine: 95,
    tyreConservation: 90,
    color: "#DC0000", // Rosso Corsa
  },
  {
    id: 3,
    name: "Williams-Supertec",
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 75,
    chassis: 85,
    engine: 88, // Less powerful engine than 1998
    tyreConservation: 82,
    color: "#880000", // Dark Blue
  },
  {
    id: 4,
    name: "Jordan-Mugen-Honda",
    shortName: "Jordan",
    country: "Ireland",
    reliability: 95, // Improved reliability
    chassis: 95,
    engine: 92,
    tyreConservation: 100,
    color: "#FFD700", // Yellow
  },
  {
    id: 5,
    name: "Benetton-Playlife",
    shortName: "Benetton",
    country: "Italy",
    reliability: 70,
    chassis: 82,
    engine: 90,
    tyreConservation: 80,
    color: "#00aaff", // Sky Blue
  },
  {
    id: 6,
    name: "Stewart-Ford",
    shortName: "Stewart",
    country: "United Kingdom",
    reliability: 65, // Improved
    chassis: 80,
    engine: 78,
    tyreConservation: 88,
    color: "#BDBDBD", // Dark Green
  },
  {
    id: 7,
    name: "Sauber-Petronas",
    shortName: "Sauber",
    country: "Switzerland",
    reliability: 70,
    chassis: 80,
    engine: 80,
    tyreConservation: 85,
    color: "#008080", // Teal
  },
  {
    id: 8,
    name: "Arrows",
    shortName: "Arrows",
    country: "United Kingdom",
    reliability: 50,
    chassis: 85,
    engine: 72,
    tyreConservation: 78,
    color: "#FF4500", // Orange-red
  },
  {
    id: 9,
    name: "Prost-Peugeot",
    shortName: "Prost",
    country: "France",
    reliability: 45,
    chassis: 75,
    engine: 70,
    tyreConservation: 78,
    color: "#0000FF", // Blue
  },
  {
    id: 10,
    name: "Minardi-Ford",
    shortName: "Minardi",
    country: "Italy",
    reliability: 50,
    chassis: 70,
    engine: 72,
    tyreConservation: 75,
    color: "#87CEEB", // Sky Blue
  },
  {
    id: 11,
    name: "BAR-Supertec",
    shortName: "BAR",
    country: "United Kingdom",
    reliability: 40, // New team, low reliability
    chassis: 75,
    engine: 88,
    tyreConservation: 70,
    color: "#FFaaaa", // Red/White (primary red)
  },
];

export const F1_1999_DRIVERS = [
  // McLaren
  {
    no: 1,
    id: 1,
    name: "Mika Häkkinen",
    country: "Finland",
    teamId: 1,
    performance: 96, // World Champion in 1998
    reliability: 88,
    consistency: 94,
    tyreConservation: 90,
    racecraft: 95
  },
  {
    no: 2,
    id: 2,
    name: "David Coulthard",
    country: "United Kingdom",
    teamId: 1,
    performance: 87,
    reliability: 85,
    consistency: 88,
    tyreConservation: 86,
    racecraft: 88
  },
  // Ferrari
  {
    no: 3,
    id: 3,
    name: "Michael Schumacher",
    country: "Germany",
    teamId: 2,
    performance: 99, // At his peak
    reliability: 85,
    consistency: 97,
    tyreConservation: 92,
    racecraft: 99
  },
  {
    no: 4,
    id: 4,
    name: "Eddie Irvine",
    country: "United Kingdom",
    teamId: 2,
    performance: 80, // Improved from 1998
    reliability: 88,
    consistency: 82,
    tyreConservation: 85,
    racecraft: 83
  },
  // Williams
  {
    no: 5,
    id: 5,
    name: "Ralf Schumacher",
    country: "Germany",
    teamId: 3,
    performance: 78, // Moved to Williams
    reliability: 75,
    consistency: 76,
    tyreConservation: 75,
    racecraft: 80
  },
  {
    no: 6,
    id: 6,
    name: "Alex Zanardi",
    country: "Italy",
    teamId: 3,
    performance: 75, // Returning to F1
    reliability: 70,
    consistency: 72,
    tyreConservation: 70,
    racecraft: 78
  },
  // Jordan
  {
    no: 7,
    id: 7,
    name: "Damon Hill",
    country: "United Kingdom",
    teamId: 4,
    performance: 30, // Final season
    reliability: 65,
    consistency: 82,
    tyreConservation: 88,
    racecraft: 85
  },
  {
    no: 8,
    id: 8,
    name: "Heinz-Harald Frentzen",
    country: "Germany",
    teamId: 4,
    performance: 95, // Moved to Jordan
    reliability: 75,
    consistency: 80,
    tyreConservation: 78,
    racecraft: 84
  },
  // Benetton
  {
    no: 9,
    id: 9,
    name: "Giancarlo Fisichella",
    country: "Italy",
    teamId: 5,
    performance: 80, // Improving
    reliability: 70,
    consistency: 78,
    tyreConservation: 78,
    racecraft: 84
  },
  {
    no: 10,
    id: 10,
    name: "Alexander Wurz",
    country: "Austria",
    teamId: 5,
    performance: 76,
    reliability: 72,
    consistency: 74,
    tyreConservation: 72,
    racecraft: 78
  },
  // Stewart
  {
    no: 11,
    id: 11,
    name: "Rubens Barrichello",
    country: "Brazil",
    teamId: 6,
    performance: 78,
    reliability: 60,
    consistency: 80,
    tyreConservation: 82,
    racecraft: 86
  },
  {
    no: 12,
    id: 12,
    name: "Johnny Herbert",
    country: "United Kingdom",
    teamId: 6,
    performance: 72, // Moved to Stewart
    reliability: 65,
    consistency: 70,
    tyreConservation: 75,
    racecraft: 78
  },
  // Sauber
  {
    no: 16,
    id: 13,
    name: "Jean Alesi",
    country: "France",
    teamId: 7,
    performance: 72,
    reliability: 78,
    consistency: 76,
    tyreConservation: 78,
    racecraft: 80
  },
  {
    no: 17,
    id: 14,
    name: "Pedro Diniz",
    country: "Brazil",
    teamId: 7,
    performance: 62,
    reliability: 60,
    consistency: 65,
    tyreConservation: 65,
    racecraft: 68
  },
  // Arrows
  {
    no: 18,
    id: 15,
    name: "Pedro de la Rosa",
    country: "Spain",
    teamId: 8,
    performance: 65, // Rookie
    reliability: 50,
    consistency: 62,
    tyreConservation: 60,
    racecraft: 68
  },
  {
    no: 19,
    id: 16,
    name: "Tora Takagi",
    country: "Japan",
    teamId: 8,
    performance: 58,
    reliability: 45,
    consistency: 56,
    tyreConservation: 55,
    racecraft: 62
  },
  // Prost
  {
    no: 14,
    id: 17,
    name: "Olivier Panis",
    country: "France",
    teamId: 9,
    performance: 74,
    reliability: 50,
    consistency: 80,
    tyreConservation: 83,
    racecraft: 78
  },
  {
    no: 15,
    id: 18,
    name: "Jarno Trulli",
    country: "Italy",
    teamId: 9,
    performance: 72,
    reliability: 45,
    consistency: 70,
    tyreConservation: 68,
    racecraft: 74
  },
  // Minardi
  {
    no: 20,
    id: 19,
    name: "Marc Gené",
    country: "Spain",
    teamId: 10,
    performance: 60, // Rookie
    reliability: 50,
    consistency: 62,
    tyreConservation: 60,
    racecraft: 65
  },
  {
    no: 21,
    id: 20,
    name: "Luca Badoer",
    country: "Italy",
    teamId: 10,
    performance: 58,
    reliability: 45,
    consistency: 60,
    tyreConservation: 55,
    racecraft: 62
  },
  // BAR
  {
    no: 22,
    id: 21,
    name: "Jacques Villeneuve",
    country: "Canada",
    teamId: 11,
    performance: 82, // Moved to new BAR team
    reliability: 70,
    consistency: 84,
    tyreConservation: 80,
    racecraft: 86
  },
  {
    no: 23,
    id: 22,
    name: "Ricardo Zonta",
    country: "Brazil",
    teamId: 11,
    performance: 65, // Rookie
    reliability: 40,
    consistency: 60,
    tyreConservation: 62,
    racecraft: 68
  }
];

export const F1_1999_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "7 March 1999",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "11 April 1999",
    trackId: "saopaulo",
    country: "Brazil"
  },
  {
    id: 3,
    name: "San Marino Grand Prix",
    shortName: "SMR",
    circuit: "Autodromo Enzo e Dino Ferrari, Imola",
    date: "2 May 1999",
    trackId: "imola",
    country: "Italy"
  },
  {
    id: 4,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "16 May 1999",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "30 May 1999",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "13 June 1999",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 7,
    name: "French Grand Prix",
    shortName: "FRA",
    circuit: "Circuit de Nevers Magny-Cours, Magny-Cours",
    date: "27 June 1999",
    trackId: "magnycours",
    country: "France"
  },
  {
    id: 8,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "11 July 1999",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 9,
    name: "Austrian Grand Prix",
    shortName: "AUT",
    circuit: "A1-Ring, Spielberg, Styria",
    date: "25 July 1999",
    trackId: "a1ring",
    country: "Austria"
  },
  {
    id: 10,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Hockenheimring, Hockenheim",
    date: "1 August 1999",
    trackId: "hockenheim",
    country: "Germany"
  },
  {
    id: 11,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "15 August 1999",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 12,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "29 August 1999",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 13,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "12 September 1999",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 14,
    name: "European Grand Prix",
    shortName: "EUR",
    circuit: "Nürburgring, Nürburg",
    date: "26 September 1999",
    trackId: "nurburgring",
    country: "Germany"
  },
  {
    id: 15,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Kuala Lumpur",
    date: "17 October 1999",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 16,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka Circuit, Suzuka",
    date: "31 October 1999",
    trackId: "suzuka",
    country: "Japan"
  }
];