function convertToMilitary (timeString) {
  // assume string is in AM/PM format

  // length: 13:00:00PM (10 chars) 
  // AM or PM --> string.length - 2
  // final format: 19:05:45

  // 12AM 12PM
  let militaryTimeString = '';
  const timeUnit = timeString.substring(8);

  const hour = parseInt(timeString.substring(0, 2), 10);
  const militaryHour = timeUnit === 'PM' ? hour + 12 : hour;

  if (hour === 12)

  militaryTimeString = `${militaryHour}${timeString.substring(2, 8)}`;

  return militaryTimeString;
}

module.exports = { convertToMilitary };