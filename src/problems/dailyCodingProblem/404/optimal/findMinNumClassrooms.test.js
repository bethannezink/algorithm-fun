const { findMinNumClassrooms } = require('./findMinNumClassrooms');

test.skip('Finds the minimum number of classrooms needed for the provided class schedule', () => {
  expect(findMinNumClassrooms([[30, 75], [0, 50], [60, 150]])).toEqual(2);
});