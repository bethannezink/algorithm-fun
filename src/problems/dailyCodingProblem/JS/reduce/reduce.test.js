const { reduce } = require('./reduce');

test('', () => {
  function sum (a, b) {
    return a + b;
  }
  
  expect(reduce([1, 2, 3], sum, 0)).toEqual(6);
});

test('', () => {
  function subtract (a, b) {
    return a - b;
  }
  
  expect(reduce([1, 2, 3], subtract, 0)).toEqual(-6);
});

test('', () => {
  function multiply (a, b) {
    return a * b;
  }
  
  expect(reduce([1, 2, 3], multiply, 1)).toEqual(6);
});

test('', () => {
  function multiply (a, b) {
    return a * b;
  }
  
  expect(reduce([1, 2, 3], multiply, 0)).toEqual(0);
});