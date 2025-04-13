const RaceCalendar = ({ calendar, onRaceClick, selectedSeason }) => {
  return (
    <div className="race-calendar">
      <h2>{selectedSeason} Season Calendar</h2>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Grand Prix</th>
            <th>Circuit</th>
            <th>Date</th>
            <th>Report</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map(race => (
            <tr key={race.id}>
              <td>{race.id}</td>
              <td>{race.name}</td>
              <td>{race.circuit}</td>
              <td>{race.date}</td>
              <td>
                <span className="race-link" onClick={() => onRaceClick?.(race.id)}>
                  Report
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RaceCalendar;