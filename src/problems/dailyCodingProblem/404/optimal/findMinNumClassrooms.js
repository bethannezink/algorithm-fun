// Daily Coding Problem #404
// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping),
// find the minimum number of rooms required.
// For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

// Big O:

function findMinNumClassrooms(intervalsArray){
  const schedule = {};
  let counter = 0;

  for (const [startTime, endTime] of intervalsArray) {
    if (counter === 0) {
      schedule[`classInterval${counter + 1}`] = [[startTime, endTime]];
    } else {

      for (const classSchedule in schedule) {
        for (const [scheduledStartTime, scheduledEndTime] of classSchedule) {
          if (scheduledEndTime <= startTime) {
            schedule.unshift([scheduledStartTime, scheduledEndTime]);
          } else if (scheduledStartTime > )
        }
      }

    }
  }


}

module.exports = { findMinNumClassrooms };
