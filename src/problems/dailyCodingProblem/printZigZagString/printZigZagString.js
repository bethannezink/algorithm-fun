// Given a string and a number of lines k, print the string in zigzag form. In zigzag, characters are printed out diagonally from top left to bottom right until reaching the kth line, then back up to top right, and so on.

// For example, given the sentence "thisisazigzag" and k = 4, you should print:

// t     a     g
//  h   s z   a
//   i i   i z
//    s     g

function printDiagonalString(string) {
  // edge cases
  let diagonalString = '';

  for (let i = 0; i < string.length; i++) {
    const whiteSpace = ' ' * i;
    diagonalString += `${whiteSpace}${string.charAt*(i)}\n`;
  }

  return diagonalString;
}

// function printZigZagString(string, numLines) {

// }

module.exports = { printDiagonalString };