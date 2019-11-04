const { factorial } = require('./factorial');

test('', () => {
  expect(factorial(3)).toEqual(6);
});

test('', () => {
  expect(factorial(5)).toEqual(120);
});