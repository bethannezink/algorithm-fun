const { findPositiveIntegerPairs } = require('./findPositiveIntegerPairs.js');

test('returns empty array when there are no positive integer pairs that meet conditions', () => {
  expect(findPositiveIntegerPairs(2, 3)).toMatchObject([]);
});


test('returns positive integer pairs that meet conditions', () => {
  expect(findPositiveIntegerPairs(1, 1)).toMatchObject([[0, 1]]);
});
