export const MELBOURNE_TRACK = {
  id: "melbourne",
  name: "Albert Park Circuit",
  location: "Melbourne, Australia",
  laps: 58,
  lapDistance: 5.303, // km
  raceDistance: 307.574, // km
  baseLapTime: 94,
  corners: 16,
  // New performance modifiers
  performanceFactors: {
    driverImportance: 0.7, // 70% driver skill, 30% car
    powerImportance: 0.6,  // How important engine power is
    handlingImportance: 0.8, // How important chassis handling is
    overtakingDifficulty: 0.7, // 0=easy to overtake, 1=hard
    tyreDegradation: 0.6
  }
};