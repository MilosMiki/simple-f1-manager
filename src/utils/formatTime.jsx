// Helper function to format time in hours:minutes:seconds.milliseconds
export const formatTime = (totalSeconds) => {
  if (totalSeconds === undefined || totalSeconds === null) {
    return '';
  }
  const totalMilliseconds = Math.round(totalSeconds * 1000);
  const hours = Math.floor(totalMilliseconds / (60 * 60 * 1000));
  const minutes = Math.floor((totalMilliseconds % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((totalMilliseconds % (60 * 1000)) / 1000);
  const milliseconds = totalMilliseconds % 1000;

  const formattedMilliseconds = String(milliseconds).padStart(3, '0');
  let formattedTime = `${seconds}.${formattedMilliseconds}`;
  var formattedSeconds;
  if (minutes > 0) {
    formattedSeconds = String(seconds).padStart(2, '0');
    formattedTime = `${minutes}:${formattedSeconds}.${formattedMilliseconds}`;
  }

  if (hours > 0) {
    const formattedMinutes = String(minutes).padStart(2, '0');
    formattedTime = `${hours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
  }

  return formattedTime;
};