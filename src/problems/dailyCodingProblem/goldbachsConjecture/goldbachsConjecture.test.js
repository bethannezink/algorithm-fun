const { getPrimeAddendPair } = require('./goldbachsConjecture');

test('', () => {
  expect(getPrimeAddendPair(4)).toMatchObject([2, 2]);
  expect(getPrimeAddendPair(6)).toMatchObject([3, 3]);
  expect(getPrimeAddendPair(10)).toMatchObject([5, 5]);
});

test('', () => {
  expect(getPrimeAddendPair(12)).toMatchObject([5, 7]);
  expect(getPrimeAddendPair(18)).toMatchObject([7, 11]);
  expect(getPrimeAddendPair(26)).toMatchObject([13, 13]);
});