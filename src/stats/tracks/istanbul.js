export const ISTANBUL_TRACK = {
  id: "istanbul",
  name: "Istanbul Park",
  location: "Istanbul, Turkey",
  laps: 58, // Number of laps in a Grand Prix
  lapDistance: 5.338, // Circuit length in km
  raceDistance: 309.396, // Race distance in km
  corners: 14,
  baseLapTime: 84, // Approximate base lap time in seconds (around 1:24)
  performanceFactors: {
    driverImportance: 0.8,
    powerImportance: 0.8,
    handlingImportance: 0.9,
    overtakingDifficulty: 0.7,
    tyreDegradation: 0.85
  }
};