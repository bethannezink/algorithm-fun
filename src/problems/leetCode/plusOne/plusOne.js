// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.
// Example 1:
// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:
// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// last element in array 
// if < 9, add 1, be done
// === 9, make element 0, repeat with element at index - 1

// if index - 1 < 9, add 1, be done
// if index - 1 === 9, make index - 1, 0, repeat with index - 2

// worst worst case 
// add another element to the beginning of the array
// .unshift to add 1 to beginning of the array

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits.length === 0) { return digits };

  if (digits[digits.length - 1] === 9) {
      digits.pop();
      plusOne(digits).push(0);
      
      if (digits.length === 1) {
          digits.unshift(1);
          return digits;
      }
  } else {
      digits[digits.length - 1]++;
  }

  return digits;
};

module.exports = { plusOne };
