import { useMemo } from 'react';
import { getCountryFlag } from '../utils/getCountryFlag';

const SeasonResults = ({ standings, teamStandings, calendar, drivers, teams, onRaceClick, selectedSeason }) => {
  const getDriverById = (driverId) => {
    return drivers.find(d => d.id === driverId);
  };

  const getTeamById = (teamId) => {
    return teams.find(t => t.id === teamId);
  };

  const getResultDisplay = (result) => {
    if (result === null) return '';
    if (result === 'Ret') return 'Ret';
    return result;
  };

  
  // Process team standings to include both drivers' results in original order
  const processedTeamStandings = useMemo(() => {
    return teamStandings.map(teamEntry => {
      // Sort drivers by their ID to maintain consistent order
      const sortedDrivers = [...teamEntry.drivers].sort((a, b) => a.driver.id - b.driver.id);
      
      const teamDrivers = sortedDrivers.map(driverEntry => {
        const driver = getDriverById(driverEntry.driver.id);
        return {
          ...driverEntry,
          driverInfo: driver,
          carNumber: driver?.id
        };
      });

      return {
        ...teamEntry,
        teamDrivers,
        // Calculate best position per race for team position (optional)
        positions: calendar.map((_, raceIndex) => {
          const positions = teamDrivers.map(d => d.positions[raceIndex]);
          const validPositions = positions.filter(p => typeof p === 'number');
          return validPositions.length ? Math.min(...validPositions) : 'Ret';
        })
      };
    });
  }, [teamStandings, calendar, drivers]);

  return (
    <div className="season-results">
      <h2>{selectedSeason} FIA Formula One World Championship</h2>

      {/* Drivers' Championship */}
      <div className="championship-section">
        <h3>Drivers' Championship</h3>
        <div className="results-table-container">
          <table className="results-table">
            <thead>
              <tr>
                <th>Pos.</th>
                <th>Driver</th>
                <th>Team</th>
                {calendar.map(race => (
                  <th key={`driver-${race.id}`} title={race.name}>
                    <span className="race-link" onClick={() => onRaceClick?.(race.id)}>
                      {race.shortName}
                    </span>
                  </th>
                ))}
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((standing, index) => {
                const driver = getDriverById(standing.driver.id);
                const team = getTeamById(driver?.teamId);
                return (
                  <tr key={`driver-${standing.driver.id}`}>
                    <td>{index + 1}</td>
                    <td>{getCountryFlag(driver?.country)} {driver?.name}</td>
                    <td>{team?.name}</td>
                    {standing.positions.map((pos, i) => (
                      <td 
                        className="table-position"
                        key={`driver-${standing.driver.id}-${i}`}
                        data-position={pos}
                        data-pole={standing.poles?.[i] || false}
                        data-fastestlap={standing.fastestlaps?.[i] || false}
                      >
                        {getResultDisplay(pos)}
                      </td>
                    ))}
                    <td className="points">{standing.points}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Constructors' Championship - updated */}
      <div className="championship-section">
        <h3>Constructors' Championship</h3>
        <div className="results-table-container">
          <table className="results-table team-results">
            <thead>
              <tr>
                <th>Pos.</th>
                <th>Constructor</th>
                <th>No.</th>
                {calendar.map(race => (
                  <th key={`team-${race.id}`} title={race.name}>
                    <span className="race-link" onClick={() => onRaceClick?.(race.id)}>
                      {race.shortName}
                    </span>
                  </th>
                ))}
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {processedTeamStandings.map((standing, index) => (
                <>
                  <tr key={`team-${standing.team.id}-1`} className="team-primary-driver">
                    <td rowSpan="2">{index + 1}</td>
                    <td rowSpan="2">{getCountryFlag(standing.team.country)} {standing.team.name}</td>
                    <td>{standing.teamDrivers[0]?.carNumber}</td>
                    {standing.teamDrivers[0]?.positions.map((pos, i) => (
                      <td 
                        className="table-position"
                        data-position={pos}
                        data-pole={standing.teamDrivers[0]?.poles?.[i] || false}
                        data-fastestlap={standing.teamDrivers[0]?.fastestlaps?.[i] || false}
                        key={`team-${standing.team.id}-${i}-1`}
                      >
                        {getResultDisplay(pos)}
                      </td>
                    ))}
                    <td rowSpan="2" className="points">{standing.points}</td>
                  </tr>
                  <tr key={`team-${standing.team.id}-2`} className="team-secondary-driver">
                    <td>{standing.teamDrivers[1]?.carNumber}</td>
                    {standing.teamDrivers[1]?.positions.map((pos, i) => (
                      <td 
                        className="table-position"
                        data-position={pos}
                        data-pole={standing.teamDrivers[1]?.poles?.[i] || false}
                        data-fastestlap={standing.teamDrivers[1]?.fastestlaps?.[i] || false}
                        key={`team-${standing.team.id}-${i}-2`}
                      >
                        {getResultDisplay(pos)}
                      </td>
                    ))}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SeasonResults;