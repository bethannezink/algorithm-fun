const { productOfArray } = require('./productOfArray');

test('', () => {
  expect(productOfArray([1, 1, 1, 1])).toEqual(1);
});

test('', () => {
  expect(productOfArray([2, 3, 4])).toEqual(24);
});

test('', () => {
  expect(productOfArray([0, 1, 2, 3, 4, 5])).toEqual(0);
});

test('', () => {
  expect(productOfArray([-1, 2, 3, 4])).toEqual(-24);
});