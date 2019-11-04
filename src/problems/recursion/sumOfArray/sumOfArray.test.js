const { sumOfArray } = require('./sumOfArray');

test('', () => {
  expect(sumOfArray([1, 2, 3, 4, 5, 6])).toEqual(21);
});