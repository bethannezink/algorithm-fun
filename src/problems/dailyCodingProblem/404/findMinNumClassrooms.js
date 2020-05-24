// Daily Coding Problem #404
// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping),
// find the minimum number of rooms required.
// For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

// Big O: n^2

function findMinNumClassrooms_FAIL(classArray){
  let roomCounter = 1;
  for (let i = 0; i < classArray.length; i++) {
    let [ currStartTime, currEndTime ] = classArray[i];

    for (let j = i + 1; j < classArray.length; j++) {
      let [ nextStartTime, nextEndTime ] = classArray[j];

      if (currEndTime < nextStartTime) {
        roomCounter++;
        break;
      }
    }
  }
  return roomCounter;
}

module.exports = { findMinNumClassrooms };
