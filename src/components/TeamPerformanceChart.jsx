import { useEffect, useState } from 'react';
import { F1_1998_TEAMS } from '../stats/seasons/F11998';
import '../styles/TeamPerformanceChart.css';

const TeamPerformanceChart = ({ teams = [] }) => {
  /*const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(F1_1998_TEAMS);
  }, []);*/

  const performanceAttributes = [
    { key: 'engine', label: 'Engine Power' },
    { key: 'chassis', label: 'Chassis/Handling' },
    { key: 'tyreConservation', label: 'Tyre Conservation' },
    { key: 'reliability', label: 'Reliability' }
  ];

  // Split attributes into pairs for 2-column layout
  const attributePairs = [];
  for (let i = 0; i < performanceAttributes.length; i += 2) {
    attributePairs.push(performanceAttributes.slice(i, i + 2));
  }

  // Sort teams by a specific attribute (descending)
  const getSortedTeams = (attributeKey) => {
    return [...teams].sort((a, b) => b[attributeKey] - a[attributeKey]);
  };

  return (
    <div className="team-performance-chart">
      <h2>Team Performance Attributes</h2>
      <div className="chart-grid">
        {attributePairs.map((pair, index) => (
          <div key={`pair-${index}`} className="chart-row">
            {pair.map(attr => (
              <div key={attr.key} className="attribute-container">
                <h3>{attr.label}</h3>
                <div className="bars-container">
                  {getSortedTeams(attr.key).map(team => (
                    <div key={`${attr.key}-${team.id}`} className="bar-row">
                      <span 
                        className="team-name" 
                        style={{ color: team.color || '#333' }}
                      >
                        {team.shortName || team.name}
                      </span>
                      <div className="bar-background">
                        <div 
                          className="bar-fill" 
                          style={{ 
                            width: `${team[attr.key]}%`,
                            backgroundColor: team.color || '#4CAF50'
                          }}
                          title={`${team.name}: ${team[attr.key]}`}
                        ></div>
                        <span className="bar-value">{team[attr.key]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPerformanceChart;