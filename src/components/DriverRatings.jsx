import { useEffect, useState } from 'react';
import { F1_1998_DRIVERS, F1_1998_TEAMS } from '../stats/seasons/F11998';
import '../styles/DriverRatings.css';

const DriverRatings = () => {
  const [drivers, setDrivers] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setDrivers(F1_1998_DRIVERS);
    setTeams(F1_1998_TEAMS);
  }, []);

  // Calculate overall rating using weighted formula
  const calculateDriverRating = (driver) => {
    // Weighted formula (adjust weights as needed)
    return Math.round(
      (driver.performance * 0.35) +
      (driver.racecraft * 0.25) +
      (driver.consistency * 0.15) +
      (driver.tyreConservation * 0.25) +
      (driver.reliability * 0.05)
    );
  };

  // Get team color for a driver
  const getTeamColor = (driver) => {
    const team = teams.find(t => t.id === driver.teamId);
    return team ? team.color : '#4CAF50';
  };

  // Get team name for a driver
  const getTeamName = (driver) => {
    const team = teams.find(t => t.id === driver.teamId);
    return team ? team.shortName || team.name : 'Unknown';
  };

  // Prepare driver data with ratings
  const getDriverData = () => {
    return drivers.map(driver => ({
      ...driver,
      rating: calculateDriverRating(driver),
      teamColor: getTeamColor(driver),
      teamName: getTeamName(driver)
    })).sort((a, b) => b.rating - a.rating); // Sort by rating descending
  };

  return (
    <div className="driver-ratings">
      <h2>Driver Ratings</h2>
      <div className="ratings-container">
        {getDriverData().map(driver => (
          <div key={driver.id} className="driver-row">
            <div className="driver-info">
              <span className="driver-name">{driver.name}</span>
            </div>
            <div className="rating-bar-container">
              <div 
                className="rating-bar" 
                style={{ 
                  width: `${driver.rating}%`,
                  backgroundColor: driver.teamColor
                }}
              >
                <span className="rating-value">{driver.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverRatings;