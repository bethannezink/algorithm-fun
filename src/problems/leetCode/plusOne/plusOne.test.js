const { plusOne } = require('./plusOne');

test('', () => {
  expect(plusOne([1, 2, 3])).toMatchObject([1, 2, 4]);
});

test('', () => {
  expect(plusOne([1, 2, 9])).toMatchObject([1, 3, 0]);
});

test('', () => {
  expect(plusOne([1, 9, 9])).toMatchObject([2, 0, 0]);
});

test('', () => {
  expect(plusOne([9, 9, 9])).toMatchObject([1, 0, 0, 0]);
});