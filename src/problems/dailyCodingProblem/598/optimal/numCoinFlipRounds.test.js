const { numCoinFlipRounds } = require('./numCoinFlipRounds');

test('returns correct number of coin flip rounds when number of coins is even', () => {
  expect(numCoinFlipRounds(2)).toEqual(1);
  expect(numCoinFlipRounds(4)).toEqual(2);
  expect(numCoinFlipRounds(20)).toEqual(5);
  expect(numCoinFlipRounds(100)).toEqual(7);
});

test('returns correct number of coin flip rounds when number of coins is odd', () => {
  expect(numCoinFlipRounds(3)).toEqual(2);
  expect(numCoinFlipRounds(5)).toEqual(3);
});