export const INDIANAPOLIS_TRACK = {
  id: "indianapolis",
  name: "Indianapolis Motor Speedway",
  location: "Indianapolis, Indiana, United States",
  laps: 73, // For the Grand Prix configuration used in 2000
  lapDistance: 4.192, // Grand Prix circuit length in km
  raceDistance: 305.916, // Race distance in km
  corners: 13,
  baseLapTime: 78, // Approximate base lap time in seconds
  performanceFactors: {
    driverImportance: 0.7,
    powerImportance: 0.85,
    handlingImportance: 0.75,
    overtakingDifficulty: 0.6,
    tyreDegradation: 0.7
  }
};