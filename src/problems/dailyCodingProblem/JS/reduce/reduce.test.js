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

test('returns the initial value when the array is emptys', () => {
  expect(reduce([], sum, 0)).toEqual(0);
});

test('subtracts the contents of an array when a sum function is passed', () => {
  expect(reduce([1, 2, 3], sum, 0)).toEqual(1 + 2 + 3);
});

test('subtracts the contents of an array when a subtract function is passed', () => {
  expect(reduce([1, 2, 3], subtract, 0)).toEqual(0 - 1 - 2 - 3);
});

test('multiplies the contents of an array when a multiply function is passed', () => {
  expect(reduce([1, 2, 3], multiply, 1)).toEqual(1 * 2 * 3);
});

test('divides the contents of an array when a divide function is passed', () => {
  expect(reduce([1, 2, 3], divide, 1)).toEqual(1 / 2 / 3);
});