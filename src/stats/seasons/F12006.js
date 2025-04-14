export const F1_2006_POINTS_SYSTEM = [
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

export const F1_2006_POINTS_FL = 0;
export const F1_2006_POINTS_POLE = 0;

export const F1_2006_TEAMS = [
  {
    id: 1,
    name: "Renault",
    shortName: "Renault",
    country: "France",
    reliability: 95,
    chassis: 98,
    engine: 97,
    tyreConservation: 96,
    color: "#00aaff", // Renault Yellow (from 2002)
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
    color: "#DC0000", // Ferrari Red (from 2002)
  },
  {
    id: 3,
    name: "McLaren-Mercedes",
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 93,
    chassis: 96,
    engine: 97,
    tyreConservation: 94,
    color: "#808080", // McLaren Silver (from 2002)
  },
  {
    id: 4,
    name: "Honda",
    shortName: "Honda",
    country: "Japan",
    reliability: 90,
    chassis: 94,
    engine: 95,
    tyreConservation: 92,
    color: "#8FaC8F", // BAR Greenish-Grey (from 2002, as Honda took over BAR)
  },
  {
    id: 5,
    name: "BMW Sauber",
    shortName: "BMW Sauber",
    country: "Germany",
    reliability: 92,
    chassis: 95,
    engine: 96,
    tyreConservation: 93,
    color: "#008080", // Sauber Teal (from 2002)
  },
  {
    id: 6,
    name: "Toyota",
    shortName: "Toyota",
    country: "Japan",
    reliability: 91,
    chassis: 93,
    engine: 94,
    tyreConservation: 91,
    color: "#ffaaaa", // Red (Toyota Racing) (from 2002)
  },
  {
    id: 7,
    name: "Red Bull Racing-Ferrari",
    shortName: "Red Bull",
    country: "Austria",
    reliability: 88,
    chassis: 90,
    engine: 92,
    tyreConservation: 89,
    color: "#5a00ee", // Jaguar Green (from 2002)
  },
  {
    id: 8,
    name: "Williams-Cosworth",
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 86,
    chassis: 92,
    engine: 90,
    tyreConservation: 88,
    color: "#005Aee", // Williams Blue (from 2002)
  },
  {
    id: 9,
    name: "MF1 Racing-Toyota",
    shortName: "MF1",
    country: "United Kingdom",
    reliability: 80,
    chassis: 85,
    engine: 88,
    tyreConservation: 85,
    color: "#994500", // Jordan Yellow (from 2002)
  },
  {
    id: 10,
    name: "Scuderia Toro Rosso-Cosworth",
    shortName: "Toro Rosso",
    country: "Italy",
    reliability: 78,
    chassis: 83,
    engine: 86,
    tyreConservation: 83,
    color: "#d3af37", // Minardi Black (from 2002, as Toro Rosso was Minardi's successor)
  },
  {
    id: 11,
    name: "Super Aguri-Honda",
    shortName: "Super Aguri",
    country: "Japan",
    reliability: 75,
    chassis: 80,
    engine: 84,
    tyreConservation: 80,
    color: "#ff5555", // Arrows Silver (from 2002, a neutral color for a new entry)
  }
];

export const F1_2006_DRIVERS = [
  {
    id: 1,
    no: 1,
    name: "Fernando Alonso",
    country: "Spain",
    teamId: 1, // Renault
    performance: 98,
    reliability: 94,
    consistency: 97,
    tyreConservation: 96,
    racecraft: 99
  },
  {
    id: 2,
    no: 2,
    name: "Giancarlo Fisichella",
    country: "Italy",
    teamId: 1, // Renault
    performance: 94,
    reliability: 92,
    consistency: 93,
    tyreConservation: 94,
    racecraft: 96
  },
  {
    id: 3,
    no: 5,
    name: "Michael Schumacher",
    country: "Germany",
    teamId: 2, // Ferrari
    performance: 98,
    reliability: 95,
    consistency: 96,
    tyreConservation: 95,
    racecraft: 98
  },
  {
    id: 4,
    no: 6,
    name: "Felipe Massa",
    country: "Brazil",
    teamId: 2, // Ferrari
    performance: 95,
    reliability: 93,
    consistency: 94,
    tyreConservation: 94,
    racecraft: 96
  },
  {
    id: 5,
    no: 3,
    name: "Kimi Räikkönen",
    country: "Finland",
    teamId: 3, // McLaren-Mercedes
    performance: 97,
    reliability: 91,
    consistency: 94,
    tyreConservation: 95,
    racecraft: 97
  },
  {
    id: 6,
    no: 4,
    name: "Juan Pablo Montoya",
    country: "Colombia",
    teamId: 3, // McLaren-Mercedes
    performance: 95,
    reliability: 89,
    consistency: 92,
    tyreConservation: 93,
    racecraft: 96
  },
  {
    id: 7,
    no: 11,
    name: "Rubens Barrichello",
    country: "Brazil",
    teamId: 4, // Honda
    performance: 92,
    reliability: 88,
    consistency: 90,
    tyreConservation: 92,
    racecraft: 94
  },
  {
    id: 8,
    no: 12,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 4, // Honda
    performance: 94,
    reliability: 86,
    consistency: 91,
    tyreConservation: 93,
    racecraft: 95
  },
  {
    id: 9,
    no: 9,
    name: "Nick Heidfeld",
    country: "Germany",
    teamId: 5, // BMW Sauber
    performance: 91,
    reliability: 90,
    consistency: 90,
    tyreConservation: 91,
    racecraft: 93
  },
  {
    id: 10,
    no: 10,
    name: "Jacques Villeneuve",
    country: "Canada",
    teamId: 5, // BMW Sauber
    performance: 88,
    reliability: 88,
    consistency: 87,
    tyreConservation: 90,
    racecraft: 90
  },
  {
    id: 11,
    no: 7,
    name: "Ralf Schumacher",
    country: "Germany",
    teamId: 6, // Toyota
    performance: 90,
    reliability: 91,
    consistency: 89,
    tyreConservation: 88,
    racecraft: 92
  },
  {
    id: 12,
    no: 8,
    name: "Jarno Trulli",
    country: "Italy",
    teamId: 6, // Toyota
    performance: 91,
    reliability: 90,
    consistency: 90,
    tyreConservation: 87,
    racecraft: 93
  },
  {
    id: 13,
    no: 14,
    name: "David Coulthard",
    country: "United Kingdom",
    teamId: 7, // Red Bull Racing-Ferrari
    performance: 89,
    reliability: 85,
    consistency: 87,
    tyreConservation: 89,
    racecraft: 91
  },
  {
    id: 14,
    no: 15,
    name: "Christian Klien",
    country: "Austria",
    teamId: 7, // Red Bull Racing-Ferrari
    performance: 85,
    reliability: 83,
    consistency: 84,
    tyreConservation: 87,
    racecraft: 87
  },
  {
    id: 15,
    no: 16,
    name: "Mark Webber",
    country: "Australia",
    teamId: 8, // Williams-Cosworth
    performance: 92,
    reliability: 84,
    consistency: 89,
    tyreConservation: 88,
    racecraft: 93
  },
  {
    id: 16,
    no: 17,
    name: "Nico Rosberg",
    country: "Germany",
    teamId: 8, // Williams-Cosworth
    performance: 90,
    reliability: 82,
    consistency: 87,
    tyreConservation: 86,
    racecraft: 91
  },
  {
    id: 17,
    no: 18,
    name: "Tiago Monteiro",
    country: "Portugal",
    teamId: 9, // MF1 Racing-Toyota
    performance: 78,
    reliability: 78,
    consistency: 79,
    tyreConservation: 84,
    racecraft: 80
  },
  {
    id: 18,
    no: 19,
    name: "Christijan Albers",
    country: "Netherlands",
    teamId: 9, // MF1 Racing-Toyota
    performance: 76,
    reliability: 76,
    consistency: 77,
    tyreConservation: 83,
    racecraft: 78
  },
  {
    id: 19,
    no: 20,
    name: "Vitantonio Liuzzi",
    country: "Italy",
    teamId: 10, // Scuderia Toro Rosso-Cosworth
    performance: 82,
    reliability: 75,
    consistency: 79,
    tyreConservation: 82,
    racecraft: 84
  },
  {
    id: 20,
    no: 21,
    name: "Scott Speed",
    country: "United States",
    teamId: 10, // Scuderia Toro Rosso-Cosworth
    performance: 80,
    reliability: 73,
    consistency: 77,
    tyreConservation: 80,
    racecraft: 82
  },
  {
    id: 21,
    no: 22,
    name: "Takuma Sato",
    country: "Japan",
    teamId: 11, // Super Aguri-Honda
    performance: 84,
    reliability: 72,
    consistency: 78,
    tyreConservation: 85,
    racecraft: 86
  },
  {
    id: 22,
    no: 23,
    name: "Yuji Ide",
    country: "Japan",
    teamId: 11, // Super Aguri-Honda
    performance: 68,
    reliability: 70,
    consistency: 65,
    tyreConservation: 75,
    racecraft: 70
  }
];

export const F1_2006_CALENDAR = [
  {
    id: 1,
    name: "Bahrain Grand Prix",
    shortName: "BHR",
    circuit: "Bahrain International Circuit, Sakhir",
    date: "12 March 2006",
    trackId: "bahrain",
    country: "Bahrain"
  },
  {
    id: 2,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "19 March 2006",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 3,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "2 April 2006",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 4,
    name: "San Marino Grand Prix",
    shortName: "SMR",
    circuit: "Autodromo Enzo e Dino Ferrari, Imola",
    date: "23 April 2006",
    trackId: "imola",
    country: "Italy"
  },
  {
    id: 5,
    name: "European Grand Prix",
    shortName: "EUR",
    circuit: "Nürburgring, Nürburg",
    date: "7 May 2006",
    trackId: "nurburgring",
    country: "Germany"
  },
  {
    id: 6,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "14 May 2006",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 7,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "28 May 2006",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 8,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "11 June 2006",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 9,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "25 June 2006",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 10,
    name: "United States Grand Prix",
    shortName: "USA",
    circuit: "Indianapolis Motor Speedway, Indianapolis",
    date: "2 July 2006",
    trackId: "indianapolis",
    country: "United States"
  },
  {
    id: 11,
    name: "French Grand Prix",
    shortName: "FRA",
    circuit: "Circuit de Nevers Magny-Cours, Magny-Cours",
    date: "16 July 2006",
    trackId: "magnycours",
    country: "France"
  },
  {
    id: 12,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Hockenheimring, Hockenheim",
    date: "30 July 2006",
    trackId: "hockenheimnew",
    country: "Germany"
  },
  {
    id: 13,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "6 August 2006",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 14,
    name: "Turkish Grand Prix",
    shortName: "TUR",
    circuit: "Istanbul Park, Istanbul",
    date: "27 August 2006",
    trackId: "istanbul",
    country: "Turkey"
  },
  {
    id: 15,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "10 September 2006",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 16,
    name: "Chinese Grand Prix",
    shortName: "CHN",
    circuit: "Shanghai International Circuit, Shanghai",
    date: "1 October 2006",
    trackId: "shanghai",
    country: "China"
  },
  {
    id: 17,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka Circuit, Suzuka",
    date: "8 October 2006",
    trackId: "suzuka",
    country: "Japan"
  },
  {
    id: 18,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "22 October 2006",
    trackId: "saopaulo",
    country: "Brazil"
  }
];