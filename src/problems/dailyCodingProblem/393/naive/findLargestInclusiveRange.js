// Daily Coding Problem #393

// Given an array of integers, return the largest range, inclusive, of integers that are all included in the array.
// For example, given the array [9, 6, 1, 3, 8, 10, 12, 11], return (8, 12) since 8, 9, 10, 11, and 12
// are all in the array.

function findLargestInclusiveRange(array) {
  array.sort((a, b) => a - b);

  let currentRange = 0
  let longestRange = 0;
  let firstNumInCurrentRange = array[0];
  let firstNumInLongestRange = array[0];

  for (let i = 1; i < array.length; i++) {
    let currentNumber = array[i];
    let previousNumber = array[i - 1];
    let isLastNumber = i === array.length - 1;
    let isInclusive = previousNumber === currentNumber - 1;

    if (isInclusive) {
      currentRange++;
    }

    if (!isInclusive || isLastNumber) {
      if (longestRange < currentRange) {
        longestRange = currentRange;
        firstNumInLongestRange = firstNumInCurrentRange;
      }
      currentRange = 0;
      firstNumInCurrentRange = currentNumber;
    }
  }

  return longestRange > 0 ? [firstNumInLongestRange, firstNumInLongestRange + longestRange] : []
}

module.exports = { findLargestInclusiveRange };