const { hasExactInflightEntertainment } = require('./inflightEntertainment');

test('returns true when movie lengths array contains two movies that exactly equal the duration of the flight', () => {
  const movieLengths = [30, 20, 60, 90];
  expect(hasExactInflightEntertainment(movieLengths, 80)).toBe(true);
});

test('returns false when movie lengths array does not contain two movies that exactly equal the duration of the flight', () => {
  const movieLengths = [30, 20, 60, 90];
  expect(hasExactInflightEntertainment(movieLengths, 75)).toBe(false);
});