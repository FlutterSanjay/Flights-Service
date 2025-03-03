function compareTime(timeString1, timeString2) {
  let date1 = new Date(timeString1);

  let date2 = new Date(timeString2);

  return date1 > date2;
}
module.exports = compareTime;
