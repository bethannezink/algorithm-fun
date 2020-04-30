const { getAllAddends, getAllDivisors } = require('./findPositiveIntegerPairs.js');

test('gets all addends for an even number', () => {
  const evenNumber = 10;
  const allAddends = getAllAddends(evenNumber);
  expect(allAddends.length).toEqual(evenNumber / 2 + 1);
  expect(allAddends).toMatchObject([[0, 10], [1, 9], [2, 8], [3, 7], [4, 6], [5, 5]]);
});

test('gets all addends for an odd number', () => {
  const oddNumber = 11;
  const allAddends = getAllAddends(oddNumber);
  expect(Math.abs(allAddends.length)).toEqualoddNumber / 2 + 1;
  expect(allAddends).toMatchObject([[0, 11], [1, 10], [2, 9], [3, 8], [4, 7], [5, 6]]);
});

test('gets all divisors for a particular number', () => {
  expect(getAllDivisors(50).sort((a, b) => a > b)).toEqual([1, 2, 5, 10, 25, 50]);
});

