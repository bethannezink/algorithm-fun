const { findMissingNumbers } = require('./findMissingNumbers');

test('finds the missing numbers in a small array', () => {
  const unsortedArray = [3, 2, 5, 7, 8, 6, 1, 10];
  expect(findMissingNumbers(unsortedArray, 10)).matchObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
