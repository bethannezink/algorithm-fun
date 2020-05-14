const { findContiguousAddendsOfK } = require('./findContiguousAddendsOfK');

test('returns an empty array when no contiguous elements add up to K', () => {
  expect(findContiguousAddendsOfK([1, 3, 1, 1], 7)).toMatchObject([]);
  expect(findContiguousAddendsOfK([1, 2, 10, 1, 5], 9)).toMatchObject([]);
  expect(findContiguousAddendsOfK([21, 10, 12, 15, 13, 21, 13, 14], 11)).toMatchObject([]);
});

test('returns an array with one element when one element equals K', () => {
  expect(findContiguousAddendsOfK([1, 3, 1, 7], 7)).toMatchObject([7]);
  expect(findContiguousAddendsOfK([1, 2, 9, 1, 5], 9)).toMatchObject([9]);
  expect(findContiguousAddendsOfK([21, 11, 11, 15, 13, 21, 11, 14], 11)).toMatchObject([11]);
});

test('returns contiguous elements that add up to K when possible', () => {
  expect(findContiguousAddendsOfK([1, 3, 4, 2], 7)).toMatchObject([3, 4]);
  expect(findContiguousAddendsOfK([1, 2, 3, 4, 5], 9)).toMatchObject([2, 3, 4]);
  expect(findContiguousAddendsOfK([2, 1, 1, 5, 3, 2, 1, 4], 11)).toMatchObject([1, 5, 3, 2]);
});