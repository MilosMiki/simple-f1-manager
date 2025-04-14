export const F1_2015_POINTS_SYSTEM = [
  25 + (1/30),        // 1st
  18 + (1/(30**2)),    // 2nd
  15 + (1/(30**3)),    // 3rd
  12 + (1/(30**4)),    // 4th
  10 + (1/(30**5)),    // 5th
  8 + (1/(30**6)),    // 6th
  6 + (1/(30**7)),    // 7th
  4 + (1/(30**8)),    // 8th
  2 + (1/(30**9)),    // 9th
  1 + (1/(30**10)),   // 10th
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
  0 + (1/(30**22)),    // 22nd
  0 + (1/(30**23)),   // 23rd
  0 + (1/(30**24)),    // 24th
  0 + (1/(30**25)),   // 25th
  0 + (1/(30**26))    // 26th
];

export const F1_2015_POINTS_FL = 0;
export const F1_2015_POINTS_POLE = 0;

export const F1_2015_TEAMS = [
  {
    id: 1,
    name: "Infiniti Red Bull Racing-Renault",
    shortName: "Red Bull",
    country: "Austria",
    reliability: 88, // Hypothetical value
    chassis: 92, // Hypothetical value
    engine: 88, // Hypothetical value
    tyreConservation: 91, // Hypothetical value
    color: "#5a00ee",
  },
  {
    id: 2,
    name: "McLaren-Honda", // Engine change
    shortName: "McLaren",
    country: "United Kingdom",
    reliability: 65, // Hypothetical value (new engine partnership)
    chassis: 85, // Hypothetical value
    engine: 70, // Hypothetical value (new engine partnership)
    tyreConservation: 82, // Hypothetical value
    color: "#808080",
  },
  {
    id: 3,
    name: "Scuderia Ferrari",
    shortName: "Ferrari",
    country: "Italy",
    reliability: 92, // Hypothetical value
    chassis: 94, // Hypothetical value
    engine: 95, // Hypothetical value
    tyreConservation: 96, // Hypothetical value
    color: "#DC0000",
  },
  {
    id: 4,
    name: "Mercedes AMG Petronas F1 Team",
    shortName: "Mercedes",
    country: "Germany",
    reliability: 96, // Hypothetical value
    chassis: 98, // Hypothetical value
    engine: 99, // Hypothetical value
    tyreConservation: 94, // Hypothetical value
    color: "#bbbbbb",
  },
  {
    id: 5,
    name: "Lotus F1 Team-Mercedes", // Engine change
    shortName: "Lotus",
    country: "United Kingdom",
    reliability: 80, // Hypothetical value
    chassis: 88, // Hypothetical value
    engine: 97, // Hypothetical value
    tyreConservation: 90, // Hypothetical value
    color: "#663300",
  },
  {
    id: 6,
    name: "Sahara Force India-Mercedes",
    shortName: "Force India",
    country: "India",
    reliability: 89, // Hypothetical value
    chassis: 87, // Hypothetical value
    engine: 97, // Hypothetical value
    tyreConservation: 97, // Hypothetical value
    color: "#ff8c00",
  },
  {
    id: 7,
    name: "Sauber-Ferrari",
    shortName: "Sauber",
    country: "Switzerland",
    reliability: 85, // Hypothetical value
    chassis: 82, // Hypothetical value
    engine: 93, // Hypothetical value
    tyreConservation: 93, // Hypothetical value
    color: "#000000",
  },
  {
    id: 8,
    name: "Williams Martini Racing-Mercedes",
    shortName: "Williams",
    country: "United Kingdom",
    reliability: 93, // Hypothetical value
    chassis: 90, // Hypothetical value
    engine: 98, // Hypothetical value
    tyreConservation: 88, // Hypothetical value
    color: "#005Aee",
  },
  {
    id: 9,
    name: "Scuderia Toro Rosso-Renault",
    shortName: "Toro Rosso",
    country: "Italy",
    reliability: 78, // Hypothetical value
    chassis: 80, // Hypothetical value
    engine: 86, // Hypothetical value
    tyreConservation: 86, // Hypothetical value
    color: "#4682b4",
  },
  {
    id: 10,
    name: "Manor Marussia F1 Team-Ferrari", // Name change, Caterham out, Marussia continues
    shortName: "Manor",
    country: "United Kingdom", // Team base
    reliability: 70, // Hypothetical value (reformed team)
    chassis: 60, // Hypothetical value (reformed team)
    engine: 90, // Hypothetical value
    tyreConservation: 70, // Hypothetical value (reformed team)
    color: "#ff5555", // Likely retained similar color
  }
];

export const F1_2015_DRIVERS = [
  {
    id: 1,
    no: 44,
    name: "Lewis Hamilton",
    country: "United Kingdom",
    teamId: 4, // Mercedes AMG Petronas F1 Team
    performance: 98, // Hypothetical value
    reliability: 95, // Hypothetical value
    consistency: 97, // Hypothetical value
    tyreConservation: 94, // Hypothetical value
    racecraft: 96 // Hypothetical value
  },
  {
    id: 2,
    no: 6,
    name: "Nico Rosberg",
    country: "Germany",
    teamId: 4, // Mercedes AMG Petronas F1 Team
    performance: 97, // Hypothetical value
    reliability: 94, // Hypothetical value
    consistency: 96, // Hypothetical value
    tyreConservation: 93, // Hypothetical value
    racecraft: 95 // Hypothetical value
  },
  {
    id: 3,
    no: 5,
    name: "Sebastian Vettel",
    country: "Germany",
    teamId: 3, // Scuderia Ferrari
    performance: 95, // Hypothetical value
    reliability: 93, // Hypothetical value
    consistency: 95, // Hypothetical value
    tyreConservation: 96, // Hypothetical value
    racecraft: 97 // Hypothetical value
  },
  {
    id: 4,
    no: 7,
    name: "Kimi Räikkönen",
    country: "Finland",
    teamId: 3, // Scuderia Ferrari
    performance: 92, // Hypothetical value
    reliability: 90, // Hypothetical value
    consistency: 94, // Hypothetical value
    tyreConservation: 95, // Hypothetical value
    racecraft: 94 // Hypothetical value
  },
  {
    id: 5,
    no: 19,
    name: "Felipe Massa",
    country: "Brazil",
    teamId: 8, // Williams Martini Racing-Mercedes
    performance: 90, // Hypothetical value
    reliability: 92, // Hypothetical value
    consistency: 93, // Hypothetical value
    tyreConservation: 88, // Hypothetical value
    racecraft: 92 // Hypothetical value
  },
  {
    id: 6,
    no: 77,
    name: "Valtteri Bottas",
    country: "Finland",
    teamId: 8, // Williams Martini Racing-Mercedes
    performance: 91, // Hypothetical value
    reliability: 91, // Hypothetical value
    consistency: 92, // Hypothetical value
    tyreConservation: 87, // Hypothetical value
    racecraft: 93 // Hypothetical value
  },
  {
    id: 7,
    no: 3,
    name: "Daniel Ricciardo",
    country: "Australia",
    teamId: 1, // Infiniti Red Bull Racing-Renault
    performance: 89, // Hypothetical value
    reliability: 87, // Hypothetical value
    consistency: 91, // Hypothetical value
    tyreConservation: 91, // Hypothetical value
    racecraft: 94 // Hypothetical value
  },
  {
    id: 8,
    no: 26,
    name: "Daniil Kvyat",
    country: "Russia",
    teamId: 1, // Infiniti Red Bull Racing-Renault
    performance: 86, // Hypothetical value
    reliability: 85, // Hypothetical value
    consistency: 89, // Hypothetical value
    tyreConservation: 89, // Hypothetical value
    racecraft: 90 // Hypothetical value
  },
  {
    id: 9,
    no: 8,
    name: "Romain Grosjean",
    country: "France",
    teamId: 5, // Lotus F1 Team-Mercedes
    performance: 87, // Hypothetical value
    reliability: 80, // Hypothetical value
    consistency: 88, // Hypothetical value
    tyreConservation: 90, // Hypothetical value
    racecraft: 91 // Hypothetical value
  },
  {
    id: 10,
    no: 13,
    name: "Pastor Maldonado",
    country: "Venezuela",
    teamId: 5, // Lotus F1 Team-Mercedes
    performance: 84, // Hypothetical value
    reliability: 78, // Hypothetical value
    consistency: 85, // Hypothetical value
    tyreConservation: 88, // Hypothetical value
    racecraft: 88 // Hypothetical value
  },
  {
    id: 11,
    no: 27,
    name: "Nico Hülkenberg",
    country: "Germany",
    teamId: 6, // Sahara Force India-Mercedes
    performance: 88, // Hypothetical value
    reliability: 89, // Hypothetical value
    consistency: 90, // Hypothetical value
    tyreConservation: 97, // Hypothetical value
    racecraft: 92 // Hypothetical value
  },
  {
    id: 12,
    no: 11,
    name: "Sergio Pérez",
    country: "Mexico",
    teamId: 6, // Sahara Force India-Mercedes
    performance: 86, // Hypothetical value
    reliability: 88, // Hypothetical value
    consistency: 89, // Hypothetical value
    tyreConservation: 96, // Hypothetical value
    racecraft: 90 // Hypothetical value
  },
  {
    id: 13,
    no: 9,
    name: "Marcus Ericsson",
    country: "Sweden",
    teamId: 7, // Sauber-Ferrari
    performance: 82, // Hypothetical value
    reliability: 85, // Hypothetical value
    consistency: 86, // Hypothetical value
    tyreConservation: 93, // Hypothetical value
    racecraft: 87 // Hypothetical value
  },
  {
    id: 14,
    no: 12,
    name: "Felipe Nasr",
    country: "Brazil",
    teamId: 7, // Sauber-Ferrari
    performance: 83, // Hypothetical value
    reliability: 84, // Hypothetical value
    consistency: 87, // Hypothetical value
    tyreConservation: 92, // Hypothetical value
    racecraft: 88 // Hypothetical value
  },
  {
    id: 15,
    no: 33,
    name: "Max Verstappen",
    country: "Netherlands",
    teamId: 9, // Scuderia Toro Rosso-Renault
    performance: 85, // Hypothetical value
    reliability: 78, // Hypothetical value
    consistency: 84, // Hypothetical value
    tyreConservation: 86, // Hypothetical value
    racecraft: 93 // Hypothetical value
  },
  {
    id: 16,
    no: 55,
    name: "Carlos Sainz Jr.",
    country: "Spain",
    teamId: 9, // Scuderia Toro Rosso-Renault
    performance: 84, // Hypothetical value
    reliability: 79, // Hypothetical value
    consistency: 85, // Hypothetical value
    tyreConservation: 85, // Hypothetical value
    racecraft: 89 // Hypothetical value
  },
  {
    id: 17,
    no: 22,
    name: "Jenson Button",
    country: "United Kingdom",
    teamId: 2, // McLaren-Honda
    performance: 86, // Hypothetical value
    reliability: 65, // Hypothetical value
    consistency: 95, // Hypothetical value
    tyreConservation: 82, // Hypothetical value
    racecraft: 93 // Hypothetical value
  },
  {
    id: 18,
    no: 14,
    name: "Fernando Alonso",
    country: "Spain",
    teamId: 2, // Scuderia Ferrari
    performance: 102,
    reliability: 94,
    consistency: 92,
    tyreConservation: 95,
    racecraft: 100
  },
  {
    id: 19,
    no: 28,
    name: "Will Stevens",
    country: "United Kingdom",
    teamId: 10, // Manor Marussia F1 Team-Ferrari
    performance: 70, // Hypothetical value
    reliability: 70, // Hypothetical value
    consistency: 75, // Hypothetical value
    tyreConservation: 70, // Hypothetical value
    racecraft: 72 // Hypothetical value
  },
  {
    id: 20,
    no: 98,
    name: "Roberto Merhi",
    country: "Spain",
    teamId: 10, // Manor Marussia F1 Team-Ferrari
    performance: 68, // Hypothetical value
    reliability: 68, // Hypothetical value
    consistency: 73, // Hypothetical value
    tyreConservation: 68, // Hypothetical value
    racecraft: 70 // Hypothetical value
  }
];

export const F1_2015_CALENDAR = [
  {
    id: 1,
    name: "Australian Grand Prix",
    shortName: "AUS",
    circuit: "Albert Park Circuit, Melbourne",
    date: "15 March 2015",
    trackId: "melbourne",
    country: "Australia"
  },
  {
    id: 2,
    name: "Malaysian Grand Prix",
    shortName: "MAL",
    circuit: "Sepang International Circuit, Sepang",
    date: "29 March 2015",
    trackId: "sepang",
    country: "Malaysia"
  },
  {
    id: 3,
    name: "Chinese Grand Prix",
    shortName: "CHN",
    circuit: "Shanghai International Circuit, Shanghai",
    date: "12 April 2015",
    trackId: "shanghai",
    country: "China"
  },
  {
    id: 4,
    name: "Bahrain Grand Prix",
    shortName: "BHR",
    circuit: "Bahrain International Circuit, Sakhir",
    date: "19 April 2015",
    trackId: "bahrain",
    country: "Bahrain"
  },
  {
    id: 5,
    name: "Spanish Grand Prix",
    shortName: "ESP",
    circuit: "Circuit de Catalunya, Montmeló",
    date: "10 May 2015",
    trackId: "catalunya",
    country: "Spain"
  },
  {
    id: 6,
    name: "Monaco Grand Prix",
    shortName: "MON",
    circuit: "Circuit de Monaco, Monte Carlo",
    date: "24 May 2015",
    trackId: "monaco",
    country: "Monaco"
  },
  {
    id: 7,
    name: "Canadian Grand Prix",
    shortName: "CAN",
    circuit: "Circuit Gilles Villeneuve, Montreal",
    date: "7 June 2015",
    trackId: "montreal",
    country: "Canada"
  },
  {
    id: 8,
    name: "Austrian Grand Prix",
    shortName: "AUT",
    circuit: "Red Bull Ring, Spielberg",
    date: "21 June 2015",
    trackId: "a1ring",
    country: "Austria"
  },
  {
    id: 9,
    name: "British Grand Prix",
    shortName: "GBR",
    circuit: "Silverstone Circuit, Silverstone",
    date: "5 July 2015",
    trackId: "silverstone",
    country: "United Kingdom"
  },
  {
    id: 10,
    name: "German Grand Prix",
    shortName: "GER",
    circuit: "Hockenheimring, Hockenheim",
    date: "19 July 2015",
    trackId: "hockenheim",
    country: "Germany"
  },
  {
    id: 11,
    name: "Hungarian Grand Prix",
    shortName: "HUN",
    circuit: "Hungaroring, Mogyoród",
    date: "26 July 2015",
    trackId: "hungaroring",
    country: "Hungary"
  },
  {
    id: 12,
    name: "Belgian Grand Prix",
    shortName: "BEL",
    circuit: "Circuit de Spa-Francorchamps, Stavelot",
    date: "23 August 2015",
    trackId: "spa",
    country: "Belgium"
  },
  {
    id: 13,
    name: "Italian Grand Prix",
    shortName: "ITA",
    circuit: "Autodromo Nazionale Monza, Monza",
    date: "6 September 2015",
    trackId: "monza",
    country: "Italy"
  },
  {
    id: 14,
    name: "Singapore Grand Prix",
    shortName: "SIN",
    circuit: "Marina Bay Street Circuit, Singapore",
    date: "20 September 2015",
    trackId: "singapore",
    country: "Singapore"
  },
  {
    id: 15,
    name: "Japanese Grand Prix",
    shortName: "JPN",
    circuit: "Suzuka International Racing Course, Suzuka",
    date: "27 September 2015",
    trackId: "suzuka",
    country: "Japan"
  },
  {
    id: 16,
    name: "Russian Grand Prix",
    shortName: "RUS",
    circuit: "Sochi Autodrom, Sochi",
    date: "11 October 2015",
    trackId: "sochi",
    country: "Russia"
  },
  {
    id: 17,
    name: "United States Grand Prix",
    shortName: "USA",
    circuit: "Circuit of the Americas, Austin",
    date: "25 October 2015",
    trackId: "austin",
    country: "USA"
  },
  {
    id: 18,
    name: "Mexican Grand Prix",
    shortName: "MEX",
    circuit: "Autódromo Hermanos Rodríguez, Mexico City",
    date: "1 November 2015",
    trackId: "mexico",
    country: "Mexico"
  },
  {
    id: 19,
    name: "Brazilian Grand Prix",
    shortName: "BRA",
    circuit: "Autódromo José Carlos Pace, São Paulo",
    date: "15 November 2015",
    trackId: "saopaulo",
    country: "Brazil"
  },
  {
    id: 20,
    name: "Abu Dhabi Grand Prix",
    shortName: "ABU",
    circuit: "Yas Marina Circuit, Abu Dhabi",
    date: "29 November 2015",
    trackId: "yasmarina",
    country: "United Arab Emirates"
  }
];