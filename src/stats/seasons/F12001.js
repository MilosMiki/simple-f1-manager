export const F1_2001_POINTS_SYSTEM = [
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

export const F1_2001_POINTS_FL = 0;
export const F1_2001_POINTS_POLE = 0;

export const F1_2001_TEAMS = [
  {
    id: 1,
    name: "Ferrari",
    shortName: "Ferrari",
    country: "Italy",
    reliability: 97,
    chassis: 99,
    engine: 97,
    tyreConservation: 93,
    color: "#DC0000",
  },
  {
    id: 2,
    name: "McLaren-Mercedes",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 89,
    chassis: 98,
    engine: 96,
    tyreConservation: 91,
    color: "#808080",
  },
  {
    id: 3,
    name: "Williams-BMW",
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 82,
    chassis: 90,
    engine: 94,
    tyreConservation: 84,
    color: "#005Aee",
  },
  {
    id: 4,
    name: "Benetton-Renault",
    shortName: "Benetton",
    country: "Italy",
    reliability: 80,
    chassis: 86,
    engine: 91,
    tyreConservation: 82,
    color: "#00aaff",
  },
  {
    id: 5,
    name: "Jordan-Honda",
    shortName: "Jordan",
    country: "Ireland",
    reliability: 72,
    chassis: 85,
    engine: 86,
    tyreConservation: 96,
    color: "#FFD700",
  },
  {
    id: 6,
    name: "BAR-Honda",
    shortName: "BAR",
    country: "United Kingdom",
    reliability: 67,
    chassis: 83,
    engine: 81,
    tyreConservation: 89,
    color: "#8FaC8F",
  },
  {
    id: 7,
    name: "Sauber-Petronas",
    shortName: "Sauber",
    country: "Switzerland",
    reliability: 78,
    chassis: 81,
    engine: 79,
    tyreConservation: 87,
    color: "#008080",
  },
  {
    id: 8,
    name: "Arrows-Asiatech",
    shortName: "Arrows",
    country: "United Kingdom",
    reliability: 57,
    chassis: 87,
    engine: 76,
    tyreConservation: 79,
    color: "#FF4500",
  },
  {
    id: 9,
    name: "Jaguar-Cosworth",
    shortName: "Jaguar",
    country: "United Kingdom",
    reliability: 62,
    chassis: 79,
    engine: 77,
    tyreConservation: 85,
    color: "#008000",
  },
  {
    id: 11,
    name: "Minardi-European",
    shortName: "Minardi",
    country: "Italy",
    reliability: 64,
    chassis: 76,
    engine: 73,
    tyreConservation: 77,
    color: "#000000",
  },
  {
    id: 10,
    name: "Prost-Acer",
    shortName: "Prost",
    country: "France",
    reliability: 60,
    chassis: 78,
    engine: 75,
    tyreConservation: 81,
    color: "#0000FF",
  }
];
export const F1_2001_DRIVERS = [
  {
    no: 1,
    id: 1,
    name: "Michael Schumacher",
    country: "Germany",
    teamId: 1,
    performance: 99,
    reliability: 93,
    consistency: 98,
    tyreConservation: 95,
    racecraft: 99
  },
  {
    no: 2,
    id: 2,
    name: "Rubens Barrichello",
    country: "Brazil",
    teamId: 1,
    performance: 89,
    reliability: 89,
    consistency: 91,
    tyreConservation: 90,
    racecraft: 93
  },
  {
    no: 3,
    id: 3,
    name: "Mika Häkkinen",
    country: "Finland",
    teamId: 2,
    performance: 97,
    reliability: 86,
    consistency: 95,
    tyreConservation: 92,
    racecraft: 97
  },
  {
    no: 4,
    id: 4,
    name: "David Coulthard",
    country: "United Kingdom",
    teamId: 2,
    performance: 91,
    reliability: 88,
    consistency: 92,
    tyreConservation: 89,
    racecraft: 94
  },
  {
    no: 5,
    id: 5,
    name: "Ralf Schumacher",
    country: "Germany",
    teamId: 3,
    performance: 86,
    reliability: 83,
    consistency: 87,
    tyreConservation: 85,
    racecraft: 89
  },
  {
    no: 6,
    id: 6,
    name: "Juan Pablo Montoya",
    country: "Colombia",
    teamId: 3,
    performance: 88,
    reliability: 80,
    consistency: 84,
    tyreConservation: 82,
    racecraft: 90
  },
  {
    no: 7,
    id: 7,
    name: "Giancarlo Fisichella",
    country: "Italy",
    teamId: 4,
    performance: 83,
    reliability: 79,
    consistency: 84,
    tyreConservation: 83,
    racecraft: 86
  },
  {
    no: 8,
    id: 8,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 4,
    performance: 79,
    reliability: 76,
    consistency: 80,
    tyreConservation: 81,
    racecraft: 83
  },
  {
    no: 9,
    id: 9,
    name: "Heinz-Harald Frentzen",
    country: "Germany",
    teamId: 5,
    performance: 85,
    reliability: 73,
    consistency: 83,
    tyreConservation: 86,
    racecraft: 88
  },
  {
    no: 10,
    id: 10,
    name: "Jarno Trulli",
    country: "Italy",
    teamId: 5,
    performance: 84,
    reliability: 71,
    consistency: 82,
    tyreConservation: 84,
    racecraft: 87
  },
  {
    no: 11,
    id: 11,
    name: "Jacques Villeneuve",
    country: "Canada",
    teamId: 6,
    performance: 82,
    reliability: 70,
    consistency: 80,
    tyreConservation: 88,
    racecraft: 86
  },
  {
    no: 12,
    id: 12,
    name: "Olivier Panis",
    country: "France",
    teamId: 6,
    performance: 81,
    reliability: 69,
    consistency: 79,
    tyreConservation: 87,
    racecraft: 85
  },
  {
    no: 14,
    id: 13,
    name: "Jean Alesi",
    country: "France",
    teamId: 7,
    performance: 79,
    reliability: 81,
    consistency: 77,
    tyreConservation: 85,
    racecraft: 83
  },
  {
    no: 15,
    id: 14,
    name: "Nick Heidfeld",
    country: "Germany",
    teamId: 7,
    performance: 75,
    reliability: 80,
    consistency: 76,
    tyreConservation: 83,
    racecraft: 80
  },
  {
    no: 16,
    id: 15,
    name: "Pedro de la Rosa",
    country: "Spain",
    teamId: 8,
    performance: 71,
    reliability: 61,
    consistency: 73,
    tyreConservation: 76,
    racecraft: 78
  },
  {
    no: 17,
    id: 16,
    name: "Jos Verstappen",
    country: "Netherlands",
    teamId: 8,
    performance: 66,
    reliability: 59,
    consistency: 69,
    tyreConservation: 74,
    racecraft: 71
  },
  {
    no: 18,
    id: 17,
    name: "Eddie Irvine",
    country: "United Kingdom",
    teamId: 9,
    performance: 83,
    reliability: 66,
    consistency: 81,
    tyreConservation: 89,
    racecraft: 85
  },
  {
    no: 19,
    id: 18,
    name: "Luciano Burti",
    country: "Brazil",
    teamId: 9,
    performance: 64,
    reliability: 63,
    consistency: 66,
    tyreConservation: 71,
    racecraft: 70
  },
  {
    no: 20,
    id: 19,
    name: "Ricardo Zonta",
    country: "Brazil",
    teamId: 10,
    performance: 73,
    reliability: 67,
    consistency: 74,
    tyreConservation: 82,
    racecraft: 79
  },
  {
    no: 21,
    id: 20,
    name: "Tarso Marques",
    country: "Brazil",
    teamId: 10,
    performance: 61,
    reliability: 66,
    consistency: 63,
    tyreConservation: 69,
    racecraft: 66
  },
  {
    no: 22,
    id: 21,
    name: "Gastón Mazzacane",
    country: "Argentina",
    teamId: 11,
    performance: 60,
    reliability: 65,
    consistency: 62,
    tyreConservation: 68,
    racecraft: 65
  },
  {
    no: 23,
    id: 22,
    name: "Fernando Alonso",
    country: "Spain",
    teamId: 11,
    performance: 76,
    reliability: 68,
    consistency: 75,
    tyreConservation: 78,
    racecraft: 81
  }
];

export const F1_2001_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "4 March 2001",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "18 March 2001",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 3,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "1 April 2001",
    trackId: "saopaulo",
    country: "Brazil"
  },
  {
    id: 4,
    name: "San Marino Grand Prix",
    shortName: "SMR",
    circuit: "Autodromo Enzo e Dino Ferrari, Imola",
    date: "15 April 2001",
    trackId: "imola",
    country: "Italy"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "29 April 2001",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "Austrian Grand Prix",
    shortName: "AUT",
    circuit: "A1-Ring, Spielberg, Styria",
    date: "13 May 2001",
    trackId: "a1ring",
    country: "Austria"
  },
  {
    id: 7,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "27 May 2001",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 8,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "10 June 2001",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 9,
    name: "European Grand Prix",
    shortName: "EUR",
    circuit: "Nürburgring, Nürburg",
    date: "24 June 2001",
    trackId: "nurburgring",
    country: "Germany"
  },
  {
    id: 10,
    name: "French Grand Prix",
    shortName: "FRA",
    circuit: "Circuit de Nevers Magny-Cours, Magny-Cours",
    date: "1 July 2001",
    trackId: "magnycours",
    country: "France"
  },
  {
    id: 11,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "15 July 2001",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 12,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Hockenheimring, Hockenheim",
    date: "29 July 2001",
    trackId: "hockenheim",
    country: "Germany"
  },
  {
    id: 13,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "19 August 2001",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 14,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "2 September 2001",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 15,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "16 September 2001",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 16,
    name: "United States Grand Prix",
    shortName: "USA",
    circuit: "Indianapolis Motor Speedway, Indianapolis",
    date: "30 September 2001",
    trackId: "indianapolis",
    country: "United States"
  },
  {
    id: 17,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka Circuit, Suzuka",
    date: "14 October 2001",
    trackId: "suzuka",
    country: "Japan"
  }
];