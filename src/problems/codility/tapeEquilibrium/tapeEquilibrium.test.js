const { findSmallestDifference } = require('./tapeEquilibrium');

test('Finds smallest difference between two sections of an array', () => {
  expect(findSmallestDifference([3, 1, 2, 4, 3])).toEqual(1);
});

test('', () => {
  expect(findSmallestDifference([-3, -1, -2, -4, -3])).toEqual(1);
  expect(findSmallestDifference([-1000, -1000, -1000, -1000])).toEqual(0);
});

test('', () => {
  expect(findSmallestDifference([1000, 1000])).toEqual(0);
  expect(findSmallestDifference([1000, 1000, 1000, 1000])).toEqual(0);
});

test('', () => {
  expect(findSmallestDifference([-1000, 1000])).toEqual(2000);
});