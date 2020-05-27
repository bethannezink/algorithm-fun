const { findLargestInclusiveRange } = require('./findLargestInclusiveRange');

test('', () => {
  expect(findLargestInclusiveRange([9, 6, 1, 3, 8, 10, 12, 11])).toEqual([8, 12])
  expect(findLargestInclusiveRange([9, 4, 1, 2, 3, 13, 10, 12, 5])).toEqual([1, 5])
});