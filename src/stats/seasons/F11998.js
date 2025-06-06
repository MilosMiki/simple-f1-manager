export const F1_1998_POINTS_SYSTEM = [
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
export const F1_1998_POINTS_FL = 0;
export const F1_1998_POINTS_POLE = 0;

export const F1_1998_TEAMS = [
  {
    id: 1,
    name: "McLaren-Mercedes",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 85,
    chassis: 97,
    engine: 95,
    tyreConservation: 90,
    color: "#808080", // Gray
  },
  {
    id: 2,
    name: "Ferrari",
    shortName: "Ferrari",
    country: "Italy",
    reliability: 95,
    chassis: 95,
    engine: 94,
    tyreConservation: 88,
    color: "#DC0000", // Rosso Corsa (Red, visible on white)
  },
  {
    id: 3,
    name: "Williams-Mecachrome",
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 78,
    chassis: 86,
    engine: 100,
    tyreConservation: 80,
    color: "#880000", // Dark Blue (from the livery, visible on white)
  },
  {
    id: 4,
    name: "Benetton-Playlife",
    shortName: "Benetton",
    country: "Italy",
    reliability: 76,
    chassis: 84,
    engine: 95,
    tyreConservation: 78,
    color: "#00aaff", // Sky Blue (visible on white)
  },
  {
    id: 5,
    name: "Jordan-Mugen-Honda",
    shortName: "Jordan",
    country: "Ireland",
    reliability: 67,
    chassis: 83,
    engine: 81,
    tyreConservation: 100,
    color: "#FFD700", // Yellow (visible on white)
  },
  {
    id: 6,
    name: "Sauber-Petronas",
    shortName: "Sauber",
    country: "Switzerland",
    reliability: 74,
    chassis: 81,
    engine: 77,
    tyreConservation: 87,
    color: "#008080", // Teal (secondary color from Petronas, visible on white)
  },
  {
    id: 7,
    name: "Arrows",
    shortName: "Arrows",
    country: "United Kingdom",
    reliability: 45,
    chassis: 89,
    engine: 70,
    tyreConservation: 75,
    color: "#000000", // Danka Arrows
  },
  {
    id: 8,
    name: "Stewart-Ford",
    shortName: "Stewart",
    country: "United Kingdom",
    reliability: 50,
    chassis: 77,
    engine: 74,
    tyreConservation: 90,
    color: "#BDBDBD", // Dark Green (visible on white)
  },
  {
    id: 9,
    name: "Prost-Peugeot",
    shortName: "Prost",
    country: "France",
    reliability: 50,
    chassis: 76,
    engine: 73,
    tyreConservation: 80,
    color: "#0000FF", // Blue (visible on white)
  },
  {
    id: 10,
    name: "Minardi-Ford",
    shortName: "Minardi",
    country: "Italy",
    reliability: 55,
    chassis: 73,
    engine: 70,
    tyreConservation: 73,
    color: "#87CEEB", // Sky Blue (often seen as an accent on Minardi cars, visible on white)
  },
  {
    id: 11,
    name: "Tyrrell-Ford",
    shortName: "Tyrrell",
    country: "United Kingdom",
    reliability: 64,
    chassis: 72,
    engine: 69,
    tyreConservation: 72,
    color: "#008000", // Gold/Yellow (from PIAA logos, visible on white)
  },
];
export const F1_1998_DRIVERS = [
  {
    no: 1,
    id: 1,
    name: "Mika Häkkinen",
    country: "Finland",
    teamId: 1,
    performance: 95, // Higher means better chance to win
    reliability: 90,  // Higher means less chance of DNF
    consistency: 92, // How consistently the driver performs at their potential
    tyreConservation: 88, // Ability to manage tyre wear
    racecraft: 94 // Skill in overtaking, defending, and strategy execution during a race
  },
  {
    no: 2,
    id: 2,
    name: "David Coulthard",
    country: "United Kingdom",
    teamId: 1,
    performance: 85,
    reliability: 85,
    consistency: 88,
    tyreConservation: 85,
    racecraft: 87
  },
  {
    no: 3,
    id: 3,
    name: "Michael Schumacher",
    country: "Germany",
    teamId: 2,
    performance: 98,
    reliability: 80,
    consistency: 95,
    tyreConservation: 90,
    racecraft: 99
  },
  {
    no: 4,
    id: 4,
    name: "Eddie Irvine",
    country: "United Kingdom",
    teamId: 2,
    performance: 75,
    reliability: 85,
    consistency: 78,
    tyreConservation: 82,
    racecraft: 80
  },
  {
    no: 5,
    id: 5,
    name: "Jacques Villeneuve",
    country: "Canada",
    teamId: 3,
    performance: 80,
    reliability: 75,
    consistency: 82,
    tyreConservation: 78,
    racecraft: 84
  },
  {
    no: 6,
    id: 6,
    name: "Heinz-Harald Frentzen",
    country: "Germany",
    teamId: 3,
    performance: 78,
    reliability: 70,
    consistency: 75,
    tyreConservation: 72,
    racecraft: 79
  },
  {
    no: 7,
    id: 7,
    name: "Giancarlo Fisichella",
    country: "Italy",
    teamId: 4,
    performance: 77,
    reliability: 65,
    consistency: 76,
    tyreConservation: 74,
    racecraft: 81
  },
  {
    no: 8,
    id: 8,
    name: "Alexander Wurz",
    country: "Austria",
    teamId: 4,
    performance: 74,
    reliability: 70,
    consistency: 72,
    tyreConservation: 70,
    racecraft: 75
  },
  {
    no: 9,
    id: 9,
    name: "Damon Hill",
    country: "United Kingdom",
    teamId: 5,
    performance: 76,
    reliability: 60,
    consistency: 80,
    tyreConservation: 84,
    racecraft: 82
  },
  {
    no: 10,
    id: 10,
    name: "Ralf Schumacher",
    country: "Germany",
    teamId: 5,
    performance: 72,
    reliability: 65,
    consistency: 70,
    tyreConservation: 68,
    racecraft: 77
  },
  {
    no: 11,
    id: 11,
    name: "Jean Alesi",
    country: "France",
    teamId: 6,
    performance: 70,
    reliability: 75,
    consistency: 74,
    tyreConservation: 76,
    racecraft: 78
  },
  {
    no: 12,
    id: 12,
    name: "Johnny Herbert",
    country: "United Kingdom",
    teamId: 6,
    performance: 68,
    reliability: 70,
    consistency: 65,
    tyreConservation: 70,
    racecraft: 73
  },
  {
    no: 14,
    id: 13,
    name: "Mika Salo",
    country: "Finland",
    teamId: 7,
    performance: 65,
    reliability: 60,
    consistency: 68,
    tyreConservation: 66,
    racecraft: 71
  },
  {
    no: 15,
    id: 14,
    name: "Pedro Diniz",
    country: "Brazil",
    teamId: 7,
    performance: 60,
    reliability: 55,
    consistency: 62,
    tyreConservation: 60,
    racecraft: 65
  },
  {
    no: 16,
    id: 15,
    name: "Rubens Barrichello",
    country: "Brazil",
    teamId: 8,
    performance: 73,
    reliability: 50,
    consistency: 77,
    tyreConservation: 79,
    racecraft: 83
  },
  {
    no: 17,
    id: 16,
    name: "Jan Magnussen",
    country: "Denmark",
    teamId: 8,
    performance: 62,
    reliability: 45,
    consistency: 58,
    tyreConservation: 55,
    racecraft: 60
  },
  {
    no: 18,
    id: 17,
    name: "Jarno Trulli",
    country: "Italy",
    teamId: 9,
    performance: 69,
    reliability: 40,
    consistency: 66,
    tyreConservation: 64,
    racecraft: 70
  },
  {
    no: 19,
    id: 18,
    name: "Olivier Panis",
    country: "France",
    teamId: 9,
    performance: 71,
    reliability: 45,
    consistency: 79,
    tyreConservation: 81,
    racecraft: 76
  },
  {
    no: 20,
    id: 19,
    name: "Shinji Nakano",
    country: "Japan",
    teamId: 10,
    performance: 58,
    reliability: 50,
    consistency: 60,
    tyreConservation: 58,
    racecraft: 63
  },
  {
    no: 21,
    id: 20,
    name: "Esteban Tuero",
    country: "Argentina",
    teamId: 10,
    performance: 55,
    reliability: 30,
    consistency: 52,
    tyreConservation: 48,
    racecraft: 57
  },
  {
    no: 22,
    id: 21,
    name: "Ricardo Rosset",
    country: "Brazil",
    teamId: 11,
    performance: 50,
    reliability: 35,
    consistency: 48,
    tyreConservation: 45,
    racecraft: 50
  },
  {
    no: 23,
    id: 22,
    name: "Toranosuke Takagi",
    country: "Japan",
    teamId: 11,
    performance: 56,
    reliability: 40,
    consistency: 54,
    tyreConservation: 52,
    racecraft: 59
  }
];

export const F1_1998_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "8 March 1998",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "29 March 1998",
    trackId: "saopaulo",
    country: "Brazil"
  },
  {
    id: 3,
    name: "Argentine Grand Prix",
    shortName: "ARG",
    circuit: "Autódromo Oscar Alfredo Gálvez, Buenos Aires",
    date: "12 April 1998",
    trackId: "buenosaires",
    country: "Argentina"
  },
  {
    id: 4,
    name: "San Marino Grand Prix",
    shortName: "SMR",
    circuit: "Autodromo Enzo e Dino Ferrari, Imola",
    date: "26 April 1998",
    trackId: "imola",
    country: "Italy"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "10 May 1998",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "24 May 1998",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 7,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "7 June 1998",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 8,
    name: "French Grand Prix",
    shortName: "FRA",
    circuit: "Circuit de Nevers Magny-Cours, Magny-Cours",
    date: "28 June 1998",
    trackId: "magnycours",
    country: "France"
  },
  {
    id: 9,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "12 July 1998",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 10,
    name: "Austrian Grand Prix",
    shortName: "AUT",
    circuit: "A1-Ring, Spielberg, Styria",
    date: "26 July 1998",
    trackId: "a1ring",
    country: "Austria"
  },
  {
    id: 11,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Hockenheimring, Hockenheim",
    date: "2 August 1998",
    trackId: "hockenheim",
    country: "Germany"
  },
  {
    id: 12,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "16 August 1998",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 13,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "30 August 1998",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 14,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "13 September 1998",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 15,
    name: "Luxembourg Grand Prix",
    shortName: "LUX",
    circuit: "Nürburgring, Nürburg",
    date: "27 September 1998",
    trackId: "nurburgring",
    country: "Germany"
  },
  {
    id: 16,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka Circuit, Suzuka",
    date: "1 November 1998",
    trackId: "suzuka",
    country: "Japan"
  }
];