// Given an array of integers, return a new array such that each element at index i of
// the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
//If our input was [3, 2, 1], the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?

// Edge Cases:
// 1. Empty array
// 2. Only one element in array
// 3. 0 in array -- if 1, complicated, if > 1, all elements become 0

function convertArrayToProductsOfArray(array) {
  let currentPrefixProduct = 1;
  const prefixProducts = array.map(num => {
    const updatedValue = currentPrefixProduct;
    currentPrefixProduct *= num;
    return updatedValue;
  });
  let currentSuffixProduct = 1;
  const suffixProducts = array.slice(0).reverse().map(num => {
    const udpatedValue = currentSuffixProduct;
    currentSuffixProduct *= num;
    return udpatedValue;
  }).reverse();

  return prefixProducts.map((num, index) => {
    return num * suffixProducts[index];
  });
}

module.exports = { convertArrayToProductsOfArray };