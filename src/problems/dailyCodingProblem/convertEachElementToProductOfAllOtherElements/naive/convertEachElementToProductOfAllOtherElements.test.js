const { convertToProductsOfRemainingArray, convertToProductsOfRemainingArrayWithoutDivision } = require('./convertEachElementToProductOfAllOtherElements');

test('returns array containing products of every element in array excluding current element', () => {
  expect(convertToProductsOfRemainingArray([3, 2, 1])).toMatchObject([2, 3, 6]);
  expect(convertToProductsOfRemainingArray([1, 2, 3, 4, 5])).toMatchObject([120, 60, 40, 30, 24]);
});

test('returns array containing products of every element in array excluding current element without division', () => {
  expect(convertToProductsOfRemainingArrayWithoutDivision([3, 2, 1])).toMatchObject([2, 3, 6]);
  expect(convertToProductsOfRemainingArrayWithoutDivision([1, 2, 3, 4, 5])).toMatchObject([120, 60, 40, 30, 24]);
});