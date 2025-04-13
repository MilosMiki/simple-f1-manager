import { useState, useEffect } from 'react';
import { F1_1998_DRIVERS, F1_1998_TEAMS, F1_1998_CALENDAR } from './stats/seasons/F11998';
import SeasonResults from './components/SeasonResults';
import RaceCalendar from './components/RaceCalendar';
import './styles/App.css';
import { simulateQualifying, simulateRace } from './utils/simulation';
import RaceResults from './components/RaceResults';
import TeamPerformanceChart from './components/TeamPerformanceChart';
import DriverRatings from './components/DriverRatings';

function App() {
  const [seasonResults, setSeasonResults] = useState([]);
  const [teamResults, setTeamResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRaceId, setSelectedRaceId] = useState(null);
  const [rawRaceResults, setRawRaceResults] = useState([]);

  const simulateSeason = async () => {
    const seasonResults = [];
    
    for (const race of F1_1998_CALENDAR) {
      // Qualifying
      const grid = await simulateQualifying(F1_1998_DRIVERS, F1_1998_TEAMS, race.trackId);
      
      // Race
      const raceResult = await simulateRace(grid, race.trackId);
      
      seasonResults.push({
        raceId: race.id,
        results: raceResult,
        qualifying: grid
      });
    }
    
    console.log(seasonResults);
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

  // Update the useEffect to handle async
  useEffect(() => {
    const initSeason = async () => {
      setIsLoading(true);
      const results = await simulateSeason();
      const standings = calculateStandings(results);
      console.log(standings);
      const teamStandings = calculateTeamStandings(standings);
      console.log(teamStandings);
      setTeamResults(teamStandings);
      setSeasonResults(standings);
      setIsLoading(false);
    };
    
    initSeason();
  }, []);

  const handleResimulate = async () => {
    setIsLoading(true);
    const results = await simulateSeason(); // ❗ await was missing
    const standings = calculateStandings(results);
    const teamStandings = calculateTeamStandings(standings);
    setTeamResults(teamStandings);
    setSeasonResults(standings);
    setIsLoading(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>1998 Formula 1 Season Simulator</h1>
        <button onClick={handleResimulate}>Resimulate Season</button>
      </header>
      
      <main>
        <TeamPerformanceChart />
        <DriverRatings />
        {isLoading ? (
          <div className="loading">Simulating season...</div>
        ) : selectedRaceId !== null ? (
          <RaceResults
            race={rawRaceResults.find(r => r.raceId === selectedRaceId)}
            calendar={F1_1998_CALENDAR}
            drivers={F1_1998_DRIVERS}
            teams={F1_1998_TEAMS}
            onBack={() => setSelectedRaceId(null)}
          />
        ) : (
          <>
            <RaceCalendar 
              calendar={F1_1998_CALENDAR} 
              onRaceClick={(raceId) => setSelectedRaceId(raceId)}
            />
            <SeasonResults 
              standings={seasonResults} 
              teamStandings={teamResults} 
              calendar={F1_1998_CALENDAR} 
              drivers={F1_1998_DRIVERS} 
              teams={F1_1998_TEAMS}
              onRaceClick={(raceId) => setSelectedRaceId(raceId)}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;