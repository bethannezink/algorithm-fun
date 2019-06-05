const { findUniqueId, findUniqueIdWithBitwiseOperator } = require('./245');

test('finds unique id from array of positive integers', () => {
  expect(findUniqueId([1, 2, 3, 4, 5, 3, 2, 4, 1])).toBe(5)
});

test('finds unique id from array of positive integers using bit operators', () => {
  expect(findUniqueIdWithBitwiseOperator([1, 2, 3, 4, 5, 3, 2, 4, 1])).toBe(5)
});