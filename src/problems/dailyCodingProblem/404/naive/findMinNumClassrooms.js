// Daily Coding Problem #404
// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping),
// find the minimum number of rooms required.
// For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

// Big O:

function findMinNumClassrooms(classArray){
  let roomCounter = 1;
  for (let i = 0; i < classArray.length; i++) {
    let [ currStartTime, currEndTime ] = classArray[i];

    for (let j = i + 1; j < classArray.length; j++) {
      let [ nextStartTime, nextEndTime ] = classArray[j];

      if (currEndTime < nextStartTime || currStartTime > nextEndTime) {
        roomCounter++;
        break;
      }
    }
  }
  return roomCounter;
}

function overlaps(interval1, interval2) {
  const [start1, end1] = interval1;
  const [start2, end2] = interval2;

  return end1 < start2 || start1 > end2;
}

function findMinNumClassroomsAlt(intervalsArray) {
  let numOverlaps = 1;

  for (let i = 0; i < intervalsArray.length; i++) {
    let firstInterval = intervalsArray[i];
    for (let j = i + 1; j < intervalsArray.length; j++) {
      let secondInterval = intervalsArray[j];

      if (overlaps(firstInterval, secondInterval)) {
        numOverlaps += 1;
      }
    }
  }

  return numOverlaps;
}

module.exports = { findMinNumClassrooms, findMinNumClassroomsAlt };
