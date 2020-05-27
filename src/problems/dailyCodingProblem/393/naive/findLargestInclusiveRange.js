// Daily Coding Problem #393

// Given an array of integers, return the largest range, inclusive, of integers that are all included in the array.
// For example, given the array [9, 6, 1, 3, 8, 10, 12, 11], return (8, 12) since 8, 9, 10, 11, and 12
// are all in the array.

function findLargestInclusiveRange(array) {
  array.sort((a, b) => a - b);

  let longestRange = 0;
  let counter = 0;
  let startingNum = array[0];
  let longestStartingNum = array[0];

  for (let i = 1; i < array.length; i++) {
    let currentNumber = array[i];
    let lastNumber = array[i - 1];

    if (lastNumber) {
      if (lastNumber === currentNumber - 1) {
        counter++;

        if (i === array.length - 1) {
          if (longestRange < counter) {
            longestRange = counter;
            longestStartingNum = startingNum;
          }
        }
      } else {
        if (longestRange < counter) {
          longestRange = counter;
          longestStartingNum = startingNum;
        }
        counter = 0;
        startingNum = currentNumber;
      }
    }
  }
  return longestRange > 0 ? [longestStartingNum, longestStartingNum + longestRange] : []
}

module.exports = { findLargestInclusiveRange };