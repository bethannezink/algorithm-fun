const { findPythagoreanTriplet, findPythagoreanTripletWithSlightOptimization } = require('./findPythagoreanTriplet');

test('', () => {
  expect(findPythagoreanTriplet([2, 16, 3, 4, 5, 8])).toEqual(true);
  expect(findPythagoreanTriplet([3, 1, 3, 9])).toEqual(false);
});
test('', () => {
  expect(findPythagoreanTripletWithSlightOptimization([2, 16, 3, 4, 5, 8])).toEqual(true);
  expect(findPythagoreanTripletWithSlightOptimization([3, 1, 3, 9])).toEqual(false);
});