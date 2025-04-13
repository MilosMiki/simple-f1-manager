export const SHANGHAI_TRACK = {
  id: "shanghai",
  name: "Shanghai International Circuit",
  location: "Shanghai, China",
  laps: 56, // Number of laps in a Grand Prix
  lapDistance: 5.451, // Circuit length in km
  raceDistance: 305.066, // Race distance in km
  corners: 16,
  baseLapTime: 92, // Approximate base lap time in seconds (around 1:32)
  performanceFactors: {
    driverImportance: 0.7,
    powerImportance: 0.85,
    handlingImportance: 0.8,
    overtakingDifficulty: 0.65,
    tyreDegradation: 0.75
  }
};