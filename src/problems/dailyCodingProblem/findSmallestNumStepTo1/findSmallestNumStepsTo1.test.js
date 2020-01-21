const { findSmallestNumStepsTo1 } = require('./findSmallestNumStepsTo1');

test('finds smallest number of steps to reach 1', () => {
  expect(findSmallestNumStepsTo1(100)).toEqual(5);
});