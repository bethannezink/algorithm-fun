// Daily Coding Problem #393

// Given an array of integers, return the largest range, inclusive, of integers that are all included in the array.
// For example, given the array [9, 6, 1, 3, 8, 10, 12, 11], return (8, 12) since 8, 9, 10, 11, and 12
// are all in the array.

// longest_range = (0, 0)
// for num in nums:
// if num - 1 not in nums:
// curr = num + 1
// while curr in nums:
// curr += 1
// if curr - num > longest_range[1] - longest_range[0]:
// longest_range = (num, curr - 1)
// return longest_range

function findLargestInclusiveRange(array) {
  let numberTracker = {};

  for (let arrayNum of array) {
    numberTracker[arrayNum] = arrayNum;
  }

  let current;
  let longestRange = [0, 0];

  for (let num in numberTracker) {

    if (!numberTracker[num - 1]) {
      current = numberTracker[num] + 1;

      while(numberTracker[current]) {
        current++;
      }

      const lengthLongestRange = longestRange[1] - longestRange[0];

      if (current - numberTracker[num] > lengthLongestRange) {
        longestRange = [numberTracker[num], current - 1];
      }
    }
  }

  return longestRange;
}

module.exports = { findLargestInclusiveRange };