export const SEPANG_TRACK = {
  id: "sepang",
  name: "Sepang International Circuit",
  location: "Kuala Lumpur, Malaysia",
  laps: 56,
  lapDistance: 5.543,
  raceDistance: 310.408,
  corners: 15,
  baseLapTime: 105, // Typical lap time around 1:45 in 1999
  performanceFactors: {
    driverImportance: 0.8, // Technical circuit requiring skill
    powerImportance: 0.75, // Long straights but also technical sections
    handlingImportance: 0.95, // Demanding on aerodynamics and mechanical grip
    overtakingDifficulty: 0.65, // Some good overtaking spots but not easy
    tyreDegradation: 0.85 // High temperatures cause significant tyre wear
  }
};