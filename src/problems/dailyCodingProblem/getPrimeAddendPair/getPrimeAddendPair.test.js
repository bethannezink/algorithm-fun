const { getPrimeAddendPair } = require('./getPrimeAddendPair');

test('returns the lexicographically smaller pair when many pairs are valid', () => {
  expect(getPrimeAddendPair(4)).toMatchObject([2, 2]);
  expect(getPrimeAddendPair(6)).toMatchObject([3, 3]);
  expect(getPrimeAddendPair(10)).toMatchObject([3, 7]);
  expect(getPrimeAddendPair(12)).toMatchObject([5, 7]);
  expect(getPrimeAddendPair(18)).toMatchObject([5, 13]);
  expect(getPrimeAddendPair(26)).toMatchObject([3, 23]);
});