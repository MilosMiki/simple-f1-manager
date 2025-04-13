import { useState, useEffect } from 'react';
import { F1_1998_DRIVERS, F1_1998_TEAMS, F1_1998_CALENDAR } from './stats/seasons/F11998';
import SeasonResults from './components/SeasonResults';
import RaceCalendar from './components/RaceCalendar';
import TeamPerformanceChart from './components/TeamPerformanceChart';
import DriverRatings from './components/DriverRatings';
import { simulateQualifying, simulateRace } from './utils/simulation';
import RaceResults from './components/RaceResults';
import './styles/App.css';

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
  const [originalDrivers] = useState(F1_1998_DRIVERS);
  const [originalTeams] = useState(F1_1998_TEAMS);
  const [drivers, setDrivers] = useState(F1_1998_DRIVERS);
  const [teams, setTeams] = useState(F1_1998_TEAMS);
  const [seasonResults, setSeasonResults] = useState([]);
  const [teamResults, setTeamResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRaceId, setSelectedRaceId] = useState(null);
  const [rawRaceResults, setRawRaceResults] = useState([]);
  const [showManagement, setShowManagement] = useState(false);
  const [showRatings, setShowRatings] = useState(false);
  const [teamBoosts, setTeamBoosts] = useState([]);

  const simulateSeason = async () => {
    const seasonResults = [];
    
    for (const race of F1_1998_CALENDAR) {
      const grid = await simulateQualifying(drivers, teams, race.trackId);
      const raceResult = await simulateRace(grid, race.trackId);
      
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
    F1_1998_DRIVERS.forEach(driver => {
      standings[driver.id] = {
        driver: driver,
        points: 0,
        results: {},
        positions: Array(F1_1998_CALENDAR.length).fill(null),
        poles: Array(F1_1998_CALENDAR.length).fill(false),
        fastestlaps: Array(F1_1998_CALENDAR.length).fill(false)
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
    
    F1_1998_TEAMS.forEach(team => {
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
        <h1>1998 Formula 1 Season Simulator</h1>
      </header>
      
      <main>
        {isLoading ? (
          <div className="loading">Simulating season...</div>
        ) : selectedRaceId !== null ? (
          <RaceResults
            race={rawRaceResults.find(r => r.raceId === selectedRaceId)}
            calendar={F1_1998_CALENDAR}
            drivers={drivers}
            teams={teams}
            onBack={() => setSelectedRaceId(null)}
          />
        ) : (
          <>
            <div className="action-buttons">
              <button onClick={handleResimulate}>Resimulate Season</button>
              <button onClick={() => setShowManagement(!showManagement)}>
                {showManagement ? 'Hide Management' : 'Show Management'}
              </button>
              <button onClick={resetToOriginal}>Reset to Original</button>
              <button onClick={() => setShowRatings(!showRatings)}>
                {showRatings ? 'Hide Ratings' : 'Show Ratings'}
              </button>
            </div>
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
              calendar={F1_1998_CALENDAR} 
              onRaceClick={(raceId) => setSelectedRaceId(raceId)}
            />
            <SeasonResults 
              standings={seasonResults} 
              teamStandings={teamResults} 
              calendar={F1_1998_CALENDAR} 
              drivers={drivers} 
              teams={teams}
              onRaceClick={(raceId) => setSelectedRaceId(raceId)}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;