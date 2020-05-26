const { findMinNumClassrooms, findMinNumClassroomsAlt } = require('./findMinNumClassrooms');

test('Finds the minimum number of classrooms needed for the provided class schedule', () => {
  expect(findMinNumClassrooms([[30, 75], [0, 50], [60, 150]])).toEqual(2);
});

test('Finds the minimum number of classrooms needed for the provided class schedule', () => {
  expect(findMinNumClassroomsAlt([[30, 75], [0, 50], [60, 150]])).toEqual(2);
});