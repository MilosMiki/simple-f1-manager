// baku.js
export const BAKU_TRACK = {
  id: "baku",
  name: "Baku City Circuit",
  location: "Baku, Azerbaijan",
  laps: 51, // Initial race distance
  lapDistance: 6.003,
  raceDistance: 306.049,
  corners: 20,
  baseLapTime: 106, // Estimated base lap time
  performanceFactors: {
    driverImportance: 0.8,
    powerImportance: 0.95,
    handlingImportance: 0.7,
    overtakingDifficulty: 0.75,
    tyreDegradation: 0.6
  }
};