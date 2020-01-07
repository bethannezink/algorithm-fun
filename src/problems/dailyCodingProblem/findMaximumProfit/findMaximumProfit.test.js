const { findMaximumProfit } = require('./findMaximumProfit');

it('', () => {
  expect(findMaximumProfit([5, 2, 4, 0, 1], 2)).toEqual(3);
});

it('', () => {
  expect(findMaximumProfit([5, 2, 4, 0, 1, 0, 5], 2)).toEqual(7);
});