import { getCountryFlag } from '../utils/getCountryFlag';
import { formatTime } from '../utils/formatTime';

const RaceResults = ({ race, drivers, teams, calendar, onBack }) => {
  if (!race) return <div>Race not found</div>;

  const trackInfo = calendar.find(c => c.id === race.raceId);
  const getDriver = (id) => drivers.find(d => d.id === id);
  const getTeam = (id) => teams.find(d => d.id === id);
  const qbefore = race.qualifying[0];
  const rbefore = race.results[0];

  return (
    <div className="race-details">
      <h2>{trackInfo.name} Results</h2>
      <button onClick={onBack}>← Back to Season Overview</button>

      <h3>Qualifying</h3>
      <table className="results-table race-results-table">
        <thead>
          <tr>
            <th>Pos.</th>
            <th>Driver</th>
            <th>Constructor</th>
            <th>Time</th>
            <th>Gap</th>
          </tr>
        </thead>
        <tbody>
          {race.qualifying.map((q, i) => {
            const d = getDriver(q.id);
            const t = getTeam(d?.teamId);
            var gap;
            if(i == 0)
              gap = "";
            else{
              gap = "+" + formatTime(q.qualifyingTime - qbefore.qualifyingTime);
            }
            return (
              <tr key={q.id}>
                <td>{i + 1}</td>
                <td> 
                  {d?.country && getCountryFlag(d.country)}
                  &nbsp;
                  {d?.name}
                </td>
                <td>{t?.name}</td>
                <td>{formatTime(q.qualifyingTime)}</td>
                <td>{gap}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>Race</h3>
      <table className="results-table race-results-table">
        <thead>
          <tr>
            <th>Pos.</th>
            <th>Driver</th>
            <th>Constructor</th>
            <th>Grid</th>
            <th>Time/Reason</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {race.results.map((r,i) => {
            const d = getDriver(r.driverId);
            const t = getTeam(d?.teamId);
            var time;
            if(i == 0)
              time = formatTime(r.raceTime);
            else{
              const gap = r.raceTime - rbefore.raceTime;
              const laps = Math.floor(gap / qbefore.qualifyingTime);
              if(laps > 0)
                time = "+" + laps + " Lap" + (laps > 1 ? "s" : "");
              else
                time = "+" + formatTime(gap);
            }
            return (
              <tr key={r.driverId} style={{ fontWeight: r.points >= 1 ? 'bold' : 'normal' }}>
                <td>{r.position}</td>
                <td>
                  {d?.country && getCountryFlag(d.country)}
                  &nbsp;
                  {d?.name}
                </td>
                <td>{t?.name}</td>
                <td>{r.startingPosition}</td>
                <td>{typeof r.position === 'string' ? r.reason : time}</td>
                <td>{Math.floor(r.points)}{r.isFastestLap ? ' (FL)' : ''}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RaceResults;