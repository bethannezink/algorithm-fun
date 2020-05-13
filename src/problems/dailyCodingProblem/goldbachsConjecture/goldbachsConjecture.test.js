const { getPrimeAddendPair } = require('./goldbachsConjecture');

test('returns the lexicographically smaller pair when many pairs are valid', () => {
  expect(getPrimeAddendPair(4)).toMatchObject([1, 3]);
  expect(getPrimeAddendPair(6)).toMatchObject([1, 5]);
  expect(getPrimeAddendPair(10)).toMatchObject([3, 7]);
  expect(getPrimeAddendPair(12)).toMatchObject([1, 11]);
  expect(getPrimeAddendPair(18)).toMatchObject([1, 17]);
  expect(getPrimeAddendPair(26)).toMatchObject([3, 23]);
});