// Daily Coding Problem #521
// Given a string and a number of lines k, print the string in zigzag form.
// In zigzag, characters are printed out diagonally from top left to bottom right
// until reaching the kth line, then back up to top right, and so on.

// For example, given the sentence "thisisazigzag" and k = 4, you should print:
// t     a     g
//  h   s z   a
//   i i   i z
//    s     g

function printDiagonalString(string) {
  // edge cases
  let diagonalString = '';

  for (let i = 0; i < string.length; i++) {
    diagonalString += `${string.charAt(i)}\n`.padStart(i + 2, ' ');
  }

  return diagonalString;
}

// function printZigZagString(string, numLines) {

// }

function getNumSpaces(currRow, numLines, desc) {
  const maxWhiteSpace = (numLines - 1) * 2 - 1;

  if (desc) {
    return maxWhiteSpace
  }
}

module.exports = { printDiagonalString };