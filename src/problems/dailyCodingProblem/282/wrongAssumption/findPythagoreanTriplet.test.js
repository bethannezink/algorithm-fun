const { findPythagoreanTriplet } = require('./findPythagoreanTriplet');

test('', () => {
  expect(findPythagoreanTriplet([25, 16, 3, 9])).toEqual(true);
  expect(findPythagoreanTriplet([25, 15, 3, 9])).toEqual(false);
});