const { findUniqueId, findUniqueIdWithBitwiseOperator } = require('./245')

test('', () => {
  expect(findUniqueId([1, 2, 3, 4, 5, 3, 2, 4, 1])).toBe(5)
});

test('', () => {
  expect(findUniqueIdWithBitwiseOperator([1, 2, 3, 4, 5, 3, 2, 4, 1])).toBe(5)
});