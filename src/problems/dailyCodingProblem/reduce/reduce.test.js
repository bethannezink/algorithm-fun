const { reduce } = require('./reduce');

function sum (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}

function flatten (a, b) {
  return a.concat(b);
}

test('returns the initial value when the array is empty', () => {
  expect(reduce([], sum, 0)).toEqual(0);
});

test('subtracts the contents of an array when passed a sum function', () => {
  expect(reduce([1, 2, 3], sum, 0)).toEqual(1 + 2 + 3);
});

test('subtracts the contents of an array when passed a subtract function', () => {
  expect(reduce([1, 2, 3], subtract, 0)).toEqual(0 - 1 - 2 - 3);
});

test('multiplies the contents of an array when passed a multiply function', () => {
  expect(reduce([1, 2, 3], multiply, 1)).toEqual(1 * 2 * 3);
});

test('divides the contents of an array when passed a divide function', () => {
  expect(reduce([1, 2, 3], divide, 1)).toEqual(1 / 2 / 3);
});

test('flattens the contents of an array when passed a flatten function', () => {
  expect(reduce([[0, 1], [2, 3], [4, 5]], flatten, [])).toEqual([0, 1, 2, 3, 4, 5]);
});
