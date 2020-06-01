// Daily Coding Problem #393

// Given an array of integers, return the largest range, inclusive, of integers that are all included in the array.
// For example, given the array [9, 6, 1, 3, 8, 10, 12, 11], return (8, 12) since 8, 9, 10, 11, and 12
// are all in the array.

// Big O: O(n)

function findLargestInclusiveRange(array) {
  let tracker = {};

  for (let numberInArray of array) {
    tracker[numberInArray] = numberInArray;
  }

  let longestRange = [0, 0];

  for (let number in tracker) {
    const currentNumber = tracker[number];
    let lastInRange;
    const isFirstInRange = !tracker[number - 1];

    if (isFirstInRange) {
      lastInRange = currentNumber + 1;

      while(tracker[lastInRange]) {
        lastInRange++;
      }

      const longestRangeLength = longestRange[1] - longestRange[0];

      if (lastInRange - currentNumber > longestRangeLength) {
        longestRange = [currentNumber, lastInRange - 1];
      }
    }
  }

  return longestRange;
}

module.exports = { findLargestInclusiveRange };