const { findMinNumClassrooms } = require('./findMinNumClassrooms');

test('', () => {
  expect(findMinNumClassrooms([[30, 75], [0, 50], [60, 150]])).toEqual(2);
});