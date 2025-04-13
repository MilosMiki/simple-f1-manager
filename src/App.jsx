import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { F1_1998_DRIVERS, F1_1998_TEAMS, F1_1998_CALENDAR, F1_1998_POINTS_SYSTEM, F1_1998_POINTS_FL, F1_1998_POINTS_POLE } from './stats/seasons/F11998';
import { F1_1999_DRIVERS, F1_1999_TEAMS, F1_1999_CALENDAR, F1_1999_POINTS_SYSTEM, F1_1999_POINTS_FL, F1_1999_POINTS_POLE } from './stats/seasons/F11999';
import { F1_2000_DRIVERS, F1_2000_TEAMS, F1_2000_CALENDAR, F1_2000_POINTS_SYSTEM, F1_2000_POINTS_FL, F1_2000_POINTS_POLE } from './stats/seasons/F12000';
import { F1_2001_DRIVERS, F1_2001_TEAMS, F1_2001_CALENDAR, F1_2001_POINTS_SYSTEM, F1_2001_POINTS_FL, F1_2001_POINTS_POLE } from './stats/seasons/F12001';
import { F1_2002_DRIVERS, F1_2002_TEAMS, F1_2002_CALENDAR, F1_2002_POINTS_SYSTEM, F1_2002_POINTS_FL, F1_2002_POINTS_POLE } from './stats/seasons/F12002';
import { F1_2003_DRIVERS, F1_2003_TEAMS, F1_2003_CALENDAR, F1_2003_POINTS_SYSTEM, F1_2003_POINTS_FL, F1_2003_POINTS_POLE } from './stats/seasons/F12003';
import { F1_2004_DRIVERS, F1_2004_TEAMS, F1_2004_CALENDAR, F1_2004_POINTS_SYSTEM, F1_2004_POINTS_FL, F1_2004_POINTS_POLE } from './stats/seasons/F12004';
import { F1_2005_DRIVERS, F1_2005_TEAMS, F1_2005_CALENDAR, F1_2005_POINTS_SYSTEM, F1_2005_POINTS_FL, F1_2005_POINTS_POLE } from './stats/seasons/F12005';
import { F1_2006_DRIVERS, F1_2006_TEAMS, F1_2006_CALENDAR, F1_2006_POINTS_SYSTEM, F1_2006_POINTS_FL, F1_2006_POINTS_POLE } from './stats/seasons/F12006';
import { F1_2007_DRIVERS, F1_2007_TEAMS, F1_2007_CALENDAR, F1_2007_POINTS_SYSTEM, F1_2007_POINTS_FL, F1_2007_POINTS_POLE } from './stats/seasons/F12007';

import SeasonResults from './components/SeasonResults';
import RaceCalendar from './components/RaceCalendar';
import TeamPerformanceChart from './components/TeamPerformanceChart';
import DriverRatings from './components/DriverRatings';
import { simulateQualifying, simulateRace } from './utils/simulation';
import RaceResults from './components/RaceResults';
import { formatTime } from './utils/formatTime';
import './styles/App.css';

// Create a seasons object to map all available seasons
const SEASONS = {
  1998: {
    drivers: F1_1998_DRIVERS,
    teams: F1_1998_TEAMS,
    calendar: F1_1998_CALENDAR,
    pointsSystem: F1_1998_POINTS_SYSTEM,
    pointsFL: F1_1998_POINTS_FL,
    pointsPole: F1_1998_POINTS_POLE
  },
  1999: {
    drivers: F1_1999_DRIVERS,
    teams: F1_1999_TEAMS,
    calendar: F1_1999_CALENDAR,
    pointsSystem: F1_1999_POINTS_SYSTEM,
    pointsFL: F1_1999_POINTS_FL,
    pointsPole: F1_1999_POINTS_POLE
  },
  2000: {
    drivers: F1_2000_DRIVERS,
    teams: F1_2000_TEAMS,
    calendar: F1_2000_CALENDAR,
    pointsSystem: F1_2000_POINTS_SYSTEM,
    pointsFL: F1_2000_POINTS_FL,
    pointsPole: F1_2000_POINTS_POLE
  },
  2001: {
    drivers: F1_2001_DRIVERS,
    teams: F1_2001_TEAMS,
    calendar: F1_2001_CALENDAR,
    pointsSystem: F1_2001_POINTS_SYSTEM,
    pointsFL: F1_2001_POINTS_FL,
    pointsPole: F1_2001_POINTS_POLE
  },
  2002: {
    drivers: F1_2002_DRIVERS,
    teams: F1_2002_TEAMS,
    calendar: F1_2002_CALENDAR,
    pointsSystem: F1_2002_POINTS_SYSTEM,
    pointsFL: F1_2002_POINTS_FL,
    pointsPole: F1_2002_POINTS_POLE
  },
  2003: {
    drivers: F1_2003_DRIVERS,
    teams: F1_2003_TEAMS,
    calendar: F1_2003_CALENDAR,
    pointsSystem: F1_2003_POINTS_SYSTEM,
    pointsFL: F1_2003_POINTS_FL,
    pointsPole: F1_2003_POINTS_POLE
  },
  2004: {
    drivers: F1_2004_DRIVERS,
    teams: F1_2004_TEAMS,
    calendar: F1_2004_CALENDAR,
    pointsSystem: F1_2004_POINTS_SYSTEM,
    pointsFL: F1_2004_POINTS_FL,
    pointsPole: F1_2004_POINTS_POLE
  },  
  2005: {
    drivers: F1_2005_DRIVERS,
    teams: F1_2005_TEAMS,
    calendar: F1_2005_CALENDAR,
    pointsSystem: F1_2005_POINTS_SYSTEM,
    pointsFL: F1_2005_POINTS_FL,
    pointsPole: F1_2005_POINTS_POLE
  },  
  2006: {
    drivers: F1_2006_DRIVERS,
    teams: F1_2006_TEAMS,
    calendar: F1_2006_CALENDAR,
    pointsSystem: F1_2006_POINTS_SYSTEM,
    pointsFL: F1_2006_POINTS_FL,
    pointsPole: F1_2006_POINTS_POLE
  },  
  2007: {
    drivers: F1_2007_DRIVERS,
    teams: F1_2007_TEAMS,
    calendar: F1_2007_CALENDAR,
    pointsSystem: F1_2007_POINTS_SYSTEM,
    pointsFL: F1_2007_POINTS_FL,
    pointsPole: F1_2007_POINTS_POLE
  }
  // Add more seasons here as you create them
};

const exportToExcel = (rawRaceResults, seasonResults, teamStandings, drivers, teams, calendar) => {
  const wb = XLSX.utils.book_new();

  // Helper functions
  const getDriverById = (driverId) => drivers.find(d => d.id === driverId);
  const getResultDisplay = (result) => result === null ? '' : (result === 'Ret' ? 'Ret' : result);

  // 1. Create Drivers Championship sheet (same as before)
  const driversChampionshipData = seasonResults.map((standing, index) => {
    const driverData = {
      Position: index + 1,
      Driver: standing.driver.name,
      Team: teams.find(t => t.id === standing.driver.teamId)?.name || 'Unknown',
      Points: standing.points,
      Poles: standing.poles.filter(Boolean).length,
      FastestLaps: standing.fastestlaps.filter(Boolean).length
    };
    
    standing.positions.forEach((pos, raceIndex) => {
      const raceInfo = calendar[raceIndex];
      if (raceInfo) {
        driverData[raceInfo.shortName || `Race ${raceIndex + 1}`] = getResultDisplay(pos);
      }
    });
    
    return driverData;
  });
  
  XLSX.utils.book_append_sheet(
    wb,
    XLSX.utils.json_to_sheet(driversChampionshipData),
    "Drivers Championship"
  );

  // 2. Create Constructors Championship sheet with both drivers
  const constructorsChampionshipData = [];
  
  teamStandings.forEach((teamEntry, teamIndex) => {
    // Sort drivers by their ID to maintain consistent order
    const sortedDrivers = [...teamEntry.drivers].sort((a, b) => a.driver.id - b.driver.id);
    
    // Process each driver
    sortedDrivers.forEach((driverEntry, driverNum) => {
      const driver = getDriverById(driverEntry.driver.id);
      const driverRow = {
        Position: driverNum === 0 ? teamIndex + 1 : '', // Only show position for first driver
        Team: driverNum === 0 ? teamEntry.team.name : '', // Only show team name for first driver
        'Car Number': driver?.id || '',
        Driver: driver?.name || 'Unknown',
        Points: driverNum === 0 ? teamEntry.points : '' // Only show points for first driver
      };
      
      // Add race results for this driver
      driverEntry.positions.forEach((pos, raceIndex) => {
        const raceInfo = calendar[raceIndex];
        if (raceInfo) {
          driverRow[raceInfo.shortName || `Race ${raceIndex + 1}`] = getResultDisplay(pos);
        }
      });
      
      constructorsChampionshipData.push(driverRow);
    });
    
    // Add empty row between teams for better readability
    constructorsChampionshipData.push({});
  });
  
  XLSX.utils.book_append_sheet(
    wb,
    XLSX.utils.json_to_sheet(constructorsChampionshipData),
    "Constructors Championship"
  );

  // 3. Create sheets for each race's qualifying and results
  rawRaceResults.forEach((raceData) => {
    const qbefore = raceData.qualifying[0];
    const rbefore = raceData.results[0];
    const raceInfo = calendar.find(r => r.id === raceData.raceId);
    if (!raceInfo) return;

    const raceName = raceInfo.name;

    // Qualifying Sheet
    const qualifyingData = raceData.qualifying.map((driver, index) => ({
      Position: index + 1,
      Driver: driver.name,
      Team: teams.find(t => t.id === driver.teamId)?.name || 'Unknown',
      Time: formatTime(driver.qualifyingTime) || 'N/A',
      Gap: "+" + formatTime(driver.qualifyingTime - qbefore.qualifyingTime)
    }));
    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(qualifyingData),
      `${raceName} Q`
    );

    // Race Results Sheet
    const raceResultsData = raceData.results.map((result,index) => {
      var time;
      if(index == 0)
        time = formatTime(result.raceTime);
      else{
        const gap = result.raceTime - rbefore.raceTime;
        const laps = Math.floor(gap / qbefore.qualifyingTime);
        if(laps > 0)
          time = "+" + laps + " Lap" + (laps > 1 ? "s" : "");
        else
          time = "+" + formatTime(gap);
      }
      const driver = drivers.find(d => d.id === result.driverId);
      return {
        Position: result.position,
        Driver: driver?.name || 'Unknown',
        Team: teams.find(t => t.id === driver?.teamId)?.name || 'Unknown',
        'Grid Position': result.startingPosition,
        'Time/Reason': result.position === 'Ret' ? `${result.reason}` : time,
        Points: result.points + (result.isFastestLap ? ' (FL)' : '')
      };
    });
    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(raceResultsData),
      `${raceName} R`
    );
  });

  // Generate and download the file
  XLSX.writeFile(wb, 'f1_season_results.xlsx');
};

const TeamManagement = ({ 
  drivers, 
  teams, 
  onDriverUpdate, 
  onTeamUpdate,
  teamBoosts, setTeamBoosts
}) => {
  const [newDriver, setNewDriver] = useState({
    id: 0, // Will be set when replacing
    name: '',
    country: '',
    teamId: 1, // Default, will be overwritten
    performance: 75,
    reliability: 75,
    consistency: 75,
    tyreConservation: 75,
    racecraft: 75
  });
  const [selectedTeam, setSelectedTeam] = useState(teams[0]?.id || 1);
  const [boostAmount, setBoostAmount] = useState(5);
  const [boostStat, setBoostStat] = useState('engine');
  const [driverToReplace, setDriverToReplace] = useState(null);

  const handleReplaceDriver = (driverId) => {
    if (!driverId) {
      setDriverToReplace(null);
      return;
    }

    const driver = drivers.find(d => d.id === driverId);
    if (!driver) return;

    setDriverToReplace(driver);
    setNewDriver({
      ...driver, // Copy all existing driver properties
    });
  };

  const handleSubmitReplacement = (e) => {
    e.preventDefault();
    if (!driverToReplace) return;

    const updatedDrivers = drivers.map(d => 
      d.id === driverToReplace.id ? newDriver : d
    );
    
    onDriverUpdate(updatedDrivers);
    setDriverToReplace(null);
  };

  const handleAddBoost = () => {
    const newBoost = {
      teamId: selectedTeam,
      stat: boostStat,
      amount: boostAmount,
      // Add team name for display
      teamName: teams.find(t => t.id === selectedTeam)?.name || 'Unknown'
    };
    
    // Add to boosts list
    setTeamBoosts([...teamBoosts, newBoost]);
    
    // Apply boost to team stats
    const updatedTeams = teams.map(team => {
      if (team.id === selectedTeam) {
        return {
          ...team,
          [boostStat]: team[boostStat] + boostAmount
        };
      }
      return team;
    });
    
    onTeamUpdate(updatedTeams);
    
    // Reset boost controls
    setBoostAmount(5);
  };

  return (
    <div className="management-panel">
      <h3>Team Management</h3>
      
      <div className="management-section">
        <h4>Replace Driver</h4>
        <div className="replace-driver">
          <label>Select driver to replace:</label>
          <select 
            value={driverToReplace?.id || ''}
            onChange={(e) => handleReplaceDriver(parseInt(e.target.value))}
          >
            <option value="">Select driver</option>
            {drivers.map(driver => (
              <option key={driver.id} value={driver.id}>
                {driver.name} ({teams.find(t => t.id === driver.teamId)?.name})
              </option>
            ))}
          </select>
        </div>

        {driverToReplace && (
          <form onSubmit={handleSubmitReplacement}>
            <div className="form-group">
              <label>Name:</label>
              <input 
                type="text" 
                value={newDriver.name}
                onChange={(e) => setNewDriver({...newDriver, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Country:</label>
              <input 
                type="text" 
                value={newDriver.country}
                onChange={(e) => setNewDriver({...newDriver, country: e.target.value})}
                required
              />
            </div>
            <div className="stats-grid">
              <div className="stat-group">
                <label>Performance:</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={newDriver.performance}
                  onChange={(e) => setNewDriver({...newDriver, performance: parseInt(e.target.value)})}
                />
              </div>
              <div className="stat-group">
                <label>Reliability:</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={newDriver.reliability}
                  onChange={(e) => setNewDriver({...newDriver, reliability: parseInt(e.target.value)})}
                />
              </div>
              <div className="stat-group">
                <label>Consistency:</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={newDriver.consistency}
                  onChange={(e) => setNewDriver({...newDriver, consistency: parseInt(e.target.value)})}
                />
              </div>
              <div className="stat-group">
                <label>Tyre Conservation:</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={newDriver.tyreConservation}
                  onChange={(e) => setNewDriver({...newDriver, tyreConservation: parseInt(e.target.value)})}
                />
              </div>
              <div className="stat-group">
                <label>Racecraft:</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={newDriver.racecraft}
                  onChange={(e) => setNewDriver({...newDriver, racecraft: parseInt(e.target.value)})}
                />
              </div>
            </div>
            <button type="submit">Confirm Replacement</button>
          </form>
        )}
      </div>

      <div className="management-section">
        <h4>Team Boosts</h4>
        <div className="boost-controls">
          <div className="form-group">
            <label>Team:</label>
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(parseInt(e.target.value))}
            >
              {teams.map(team => (
                <option key={team.id} value={team.id}>{team.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Stat:</label>
            <select
              value={boostStat}
              onChange={(e) => setBoostStat(e.target.value)}
            >
              <option value="engine">Engine Power</option>
              <option value="chassis">Chassis/Handling</option>
              <option value="tyreConservation">Tyre Conservation</option>
              <option value="reliability">Reliability</option>
            </select>
          </div>
          <div className="form-group">
            <label>Boost Amount:</label>
            <input 
              type="number" 
              min="-100" 
              max="100"
              value={boostAmount}
              onChange={(e) => setBoostAmount(parseInt(e.target.value))}
            />
          </div>
          <button onClick={handleAddBoost}>Apply Boost</button>
        </div>

        <div className="active-boosts">
          <h5>Active Boosts:</h5>
          {teamBoosts.length === 0 ? (
            <p>No active boosts</p>
          ) : (
            <ul>
              {teamBoosts.map((boost, index) => (
                <li key={index}>
                  {boost.teamName}: {boost.amount > 0 ? "+" : ""}{boost.amount} to {boost.stat}
                  <button 
                    onClick={() => {
                      // Remove this boost
                      const updatedBoosts = teamBoosts.filter((_, i) => i !== index);
                      setTeamBoosts(updatedBoosts);
                      
                      // Revert the boost effect
                      const updatedTeams = teams.map(team => {
                        if (team.id === boost.teamId) {
                          return {
                            ...team,
                            [boost.stat]: team[boost.stat] - boost.amount
                          };
                        }
                        return team;
                      });
                      onTeamUpdate(updatedTeams);
                    }}
                    className="remove-boost"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

function App() {
  const [selectedSeason, setSelectedSeason] = useState(1998); // Default to 1998
  const [originalDrivers, setOriginalDrivers] = useState(SEASONS[selectedSeason].drivers);
  const [originalTeams, setOriginalTeams] = useState(SEASONS[selectedSeason].teams);
  const [drivers, setDrivers] = useState(SEASONS[selectedSeason].drivers);
  const [teams, setTeams] = useState(SEASONS[selectedSeason].teams);
  const [calendar, setCalendar] = useState(SEASONS[selectedSeason].calendar);
  const [seasonResults, setSeasonResults] = useState([]);
  const [teamResults, setTeamResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRaceId, setSelectedRaceId] = useState(null);
  const [rawRaceResults, setRawRaceResults] = useState([]);
  const [showManagement, setShowManagement] = useState(false);
  const [showRatings, setShowRatings] = useState(false);
  const [teamBoosts, setTeamBoosts] = useState([]);
  const [pointsSystem, setPointsSystem] = useState(SEASONS[selectedSeason].pointsSystem);
  const [pointsFL, setPointsFL] = useState(SEASONS[selectedSeason].pointsFL);
  const [pointsPole, setPointsPole] = useState(SEASONS[selectedSeason].pointsPole);

  // Add season change handler
  const handleSeasonChange = (season) => {
    setSelectedSeason(season);
    setOriginalDrivers(SEASONS[season].drivers);
    setOriginalTeams(SEASONS[season].teams);
    setDrivers(SEASONS[season].drivers);
    setTeams(SEASONS[season].teams);
    setCalendar(SEASONS[season].calendar);
    setPointsSystem(SEASONS[season].pointsSystem);
    setPointsFL(SEASONS[season].pointsFL);
    setPointsPole(SEASONS[season].pointsPole);
    setIsLoading(true);
  };

  const simulateSeason = async () => {
    const seasonResults = [];
    
    for (const race of calendar) {
      const grid = await simulateQualifying(drivers, teams, race.trackId);
      const raceResult = await simulateRace(grid, race.trackId, pointsSystem, pointsFL, pointsPole);
      
      seasonResults.push({
        raceId: race.id,
        results: raceResult,
        qualifying: grid
      });
    }
    
    setRawRaceResults(seasonResults);
    return seasonResults;
  };

  // Calculate championship standings
  const calculateStandings = (seasonResults) => {
    const standings = {};
    
    // Initialize all drivers with 0 points
    drivers.forEach(driver => {
      standings[driver.id] = {
        driver: driver,
        points: 0,
        results: {},
        positions: Array(calendar.length).fill(null),
        poles: Array(calendar.length).fill(false),
        fastestlaps: Array(calendar.length).fill(false)
      };
    });
    
    // Process each race result
    seasonResults.forEach((race, raceIndex) => {
      race.results.forEach(result => {
        if(result.isFastestLap)
          standings[result.driverId].fastestlaps[raceIndex] = true;
        if (result.position !== "Ret") {
          standings[result.driverId].points += result.points;
          standings[result.driverId].positions[raceIndex] = result.position;
        } else {
          standings[result.driverId].positions[raceIndex] = "Ret";
        }
      });
      var pole = race.qualifying[0].id;
      standings[pole].poles[raceIndex] = true;
    });
    
    // Convert to array and sort by points
    return Object.values(standings).sort((a, b) => b.points - a.points);
  };
  
  const calculateTeamStandings = (driverStandings) => {
    const teamStandings = {};
    
    teams.forEach(team => {
      teamStandings[team.id] = {
        team,
        points: 0,
        drivers: []
      };
    });
    
    driverStandings.forEach(driver => {
      const teamId = driver.driver.teamId;
      if (teamStandings[teamId]) {
        teamStandings[teamId].points += driver.points;
        teamStandings[teamId].drivers.push(driver);
      }
    });
    
    return Object.values(teamStandings).sort((a, b) => b.points - a.points);
  };

  useEffect(() => {
    const initSeason = async () => {
      setIsLoading(true);
      const results = await simulateSeason();
      const standings = calculateStandings(results);
      const teamStandings = calculateTeamStandings(standings);
      setTeamResults(teamStandings);
      setSeasonResults(standings);
      setIsLoading(false);
    };
    
    initSeason();
  }, [drivers, teams]);

  const handleResimulate = async () => {
    setIsLoading(true);
    const results = await simulateSeason();
    const standings = calculateStandings(results);
    const teamStandings = calculateTeamStandings(standings);
    setTeamResults(teamStandings);
    setSeasonResults(standings);
    setIsLoading(false);
  };

  const resetToOriginal = () => {
    setDrivers(originalDrivers);
    setTeams(originalTeams);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>{selectedSeason} Formula 1 Season Simulator</h1>
      </header>

      <div className="sticky-controls">
        <div className="action-buttons">
          <label htmlFor="season-select">Season: </label>
          <select
            id="season-select"
            value={selectedSeason}
            onChange={(e) => handleSeasonChange(Number(e.target.value))}
          >
            {Object.keys(SEASONS).map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <button onClick={handleResimulate}>Resimulate Season</button>
          <button onClick={() => setShowManagement(!showManagement)}>
            {showManagement ? 'Hide Management' : 'Show Management'}
          </button>
          <button onClick={resetToOriginal}>Reset to Original</button>
          <button onClick={() => setShowRatings(!showRatings)}>
            {showRatings ? 'Hide Ratings' : 'Show Ratings'}
          </button>
          <button
            onClick={() => exportToExcel(rawRaceResults, seasonResults, teamResults, drivers, teams, calendar)}
            disabled={seasonResults.length === 0}
          >
            Export Full Results (Excel)
          </button>
        </div>
      </div>

      <main>
        {isLoading ? (
          <div className="loading">Simulating season...</div>
        ) : selectedRaceId !== null ? (
          <RaceResults
            race={rawRaceResults.find(r => r.raceId === selectedRaceId)}
            calendar={calendar}
            drivers={drivers}
            teams={teams}
            onBack={() => setSelectedRaceId(null)}
          />
        ) : (
          <>
            {showManagement && (
              <TeamManagement
                drivers={drivers}
                teams={teams}
                onDriverUpdate={setDrivers}
                onTeamUpdate={setTeams}
                teamBoosts = {teamBoosts}
                setTeamBoosts = {setTeamBoosts}
              />
            )}

            {showRatings && ( <DriverRatings drivers={drivers} teams={teams}/> )}
            {showRatings && ( <TeamPerformanceChart teams={teams}/> )}
            <RaceCalendar
              calendar={calendar}
              onRaceClick={(raceId) => setSelectedRaceId(raceId)}
              selectedSeason={selectedSeason}
            />
            <SeasonResults
              standings={seasonResults}
              teamStandings={teamResults}
              calendar={calendar}
              drivers={drivers}
              teams={teams}
              onRaceClick={(raceId) => setSelectedRaceId(raceId)}
              selectedSeason={selectedSeason}
              pointsSystem={pointsSystem}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;