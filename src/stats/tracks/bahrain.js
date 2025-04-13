export const BAHRAIN_TRACK = {
  id: "bahrain",
  name: "Bahrain International Circuit",
  location: "Sakhir, Bahrain",
  laps: 57, // Number of laps in a Grand Prix
  lapDistance: 5.412, // Circuit length in km
  raceDistance: 308.238, // Race distance in km
  corners: 15,
  baseLapTime: 94, // Approximate base lap time in seconds (around 1:31)
  performanceFactors: {
    driverImportance: 0.75,
    powerImportance: 0.8,
    handlingImportance: 0.85,
    overtakingDifficulty: 0.55,
    tyreDegradation: 0.8
  }
};