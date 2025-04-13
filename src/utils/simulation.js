
const getTrackData = async (trackId) => {
  try {
    const module = await import(`../stats/tracks/${trackId}`);
    return module[`${trackId.toUpperCase()}_TRACK`];
  } catch {
    return null;
  }
};

const basePerformanceFn = (driver,team,track,isRace) => {

  // Apply track-specific bonuses
  let basePerformance = (
    0.8 + 
    (team.engine * track.performanceFactors.powerImportance * 0.3) +
    (team.chassis * track.performanceFactors.handlingImportance * 0.3) + 
    (driver.performance * track.performanceFactors.driverImportance * 0.37) +
    (isRace ? (driver.tyreConservation + team.tyreConservation) * track.performanceFactors.tyreDegradation * 0.15 : 0)
  );

  return basePerformance / 70;
};

const calculateBaseRaceTime = (driver, team, track) => {

  let basePerformance = basePerformanceFn(driver,team,track,true);

  // Base lap time (e.g. 90 seconds) minus performance boost
  const lapTime = track.baseLapTime || 90;
  const totalLaps = track.laps || 60;

  // Apply tyre wear factor
  // const tyreWearFactor = (track.performanceFactors.tyreDegradation || 0.5) * (1 - (driver.tyreConservation + team.tyreConservation) / 400);
  let raceTime = (lapTime - basePerformance) * totalLaps;

  // Add some randomness to simulate inconsistency
  raceTime += Math.random() * ((2 - (driver.consistency/100)) * 30); // ±15s variation + ±15s driver consistency

  return raceTime;
};

export const simulateQualifying = async (drivers, teams, trackId) => {
  const track = await getTrackData(trackId);
  const grid = [];
  const totalLaps = track.laps || 60;

  for (const driver of drivers) {
    const team = teams.find(t => t.id === driver.teamId);
    const lapTime = track.baseLapTime || 90;
    let basePerformance = basePerformanceFn(driver,team,track, false);
    const performance = (lapTime - basePerformance * 3); // slightly optimized lap in qualifying
    const qualifyingTime = performance + (Math.random() * 1); // ±0.5s variation

    grid.push({
      ...driver,
      team,
      qualifyingTime
    });
  }

  return grid.sort((a, b) => a.qualifyingTime - b.qualifyingTime); // fastest (lowest time) first
};

export const simulateRace = async (qualifyingGrid, trackId) => {
  const track = await getTrackData(trackId);
  const results = [];
  const totalLaps = track.laps || 60;
  const dnfCount = Math.min(Math.floor(Math.random() * 6) + 4, qualifyingGrid.length - 6); // 4-9 DNFs

  const finishedDrivers = [];
  const dnfs = [];

  for (let i = 0; i < qualifyingGrid.length; i++) {
    const driver = qualifyingGrid[i];
    const positionPenalty = 1 + ((i - (driver.racecraft/50)) * 0.0015 * track.performanceFactors.overtakingDifficulty); // 0.15% penalty per grid position
    const team = driver.team;

    let dnfReason = null;
    let willDnf = false;

    // Calculate chance of driver DNF
    const driverDnfChance = (100 - driver.reliability) * 0.001; // Adjusted scaling factor
    const willDriverDnf = Math.random() < driverDnfChance;

    // Calculate chance of team DNF
    const teamDnfChance = (100 - team.reliability) * 0.008; // Adjusted scaling factor
    const willTeamDnf = Math.random() < teamDnfChance;

    if (willDriverDnf) {
      willDnf = true;
      const driverDnfReasons = ["Collision", "Spun off"];
      dnfReason = driverDnfReasons[Math.floor(Math.random() * driverDnfReasons.length)];
    }

    if (willTeamDnf) {
      willDnf = true;
      const teamDnfReasons = ["Engine", "Gearbox", "Hydraulics", "Electronics"];
      const teamReason = teamDnfReasons[Math.floor(Math.random() * teamDnfReasons.length)];
      dnfReason = dnfReason ? `${dnfReason} / ${teamReason}` : teamReason;
    }

    if (willDnf) {
      dnfs.push({
        driverId: driver.id,
        position: "Ret",
        reason: dnfReason,
        points: 0,
        isFastestLap: false,
        startingPosition: i + 1
      });
    } else {
      const raceTime = calculateBaseRaceTime(driver, team, track) * positionPenalty;

      finishedDrivers.push({
        ...driver,
        raceTime,
        startingPosition: i + 1
      });
    }
  }

  // Sort finished drivers by raceTime (fastest wins)
  finishedDrivers.sort((a, b) => a.raceTime - b.raceTime);

  // Assign points (1998 system)
  const pointsTable = [10, 6, 4, 3, 2, 1];

  const raceResults = finishedDrivers.map((driver, index) => ({
    driverId: driver.id,
    position: index + 1,
    points: pointsTable[index] || 0,
    isFastestLap: false, // we'll assign it next
    startingPosition: driver.startingPosition,
    raceTime: driver.raceTime
  }));

  // Fastest lap with cumula  tive probability based on combined quali+race performance
  const fastestLapCandidates = [...raceResults, ...dnfs];
  const totalDrivers = fastestLapCandidates.length;

  // 1. Create array with combined weights for each driver
  const weightedCandidates = fastestLapCandidates.map(driver => {
      const racePosition = driver.position === "Ret" ? 0 : driver.position;
      const qualiPosition = driver.startingPosition;
      
      // Calculate weight (reversed positions sum)
      const weight = (totalDrivers - qualiPosition) + (totalDrivers - racePosition);
      
      return {
          driverId: driver.driverId,
          weight: weight
      };
  });

  // 2. Calculate cumulative weights
  let cumulativeWeight = 0;
  const cumulativeWeights = weightedCandidates.map(candidate => {
      cumulativeWeight += candidate.weight;
      return {
          driverId: candidate.driverId,
          cumulativeWeight: cumulativeWeight
      };
  });

  // 3. Generate random number in range
  const totalWeight = cumulativeWeights[cumulativeWeights.length - 1].cumulativeWeight;
  const random = Math.random() * totalWeight;

  // 4. Find which driver gets the fastest lap
  let fastestLapDriverId = null;
  for (const entry of cumulativeWeights) {
      if (random <= entry.cumulativeWeight) {
          fastestLapDriverId = entry.driverId;
          break;
      }
  }

  // 5. Assign fastest lap
  if (fastestLapDriverId) {
      const driverResult = fastestLapCandidates.find(r => r.driverId === fastestLapDriverId);
      if (driverResult) {
          driverResult.isFastestLap = true;
      }
  }

  return [...fastestLapCandidates];
};
