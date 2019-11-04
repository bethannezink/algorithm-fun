const { greatestCommonDivisor } = require('./greatestCommonDivisor');

test('returns the greatest commone divisor when the smaller number is the first argument', () => {
  expect(greatestCommonDivisor(12, 24)).toEqual(12);
});

test('returns the greatest common divisor when the larger number is the first argument', () => {
  expect(greatestCommonDivisor(18, 12)).toEqual(6);
});

test('returns 1 when one of the arguments equals 1', () => {
  expect(greatestCommonDivisor(1, 12)).toEqual(1);
});

test('returns the other number when one of the arguments equals 0', () => {
  expect(greatestCommonDivisor(0, 12)).toEqual(12);
});