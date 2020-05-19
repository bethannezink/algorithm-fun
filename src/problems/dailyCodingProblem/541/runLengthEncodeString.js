// Daily Coding Problem #541
// Run-length encoding is a fast and simple method of encoding strings.
// The basic idea is to represent repeated successive characters as a single count and character.
// For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
// Implement run-length encoding and decoding.
// You can assume the string to be encoded have no digits and consists solely of alphabetic characters.
// You can assume the string to be decoded is valid.

// Big O: O(n)

function runLengthEncodeString(string) {
  let encodedString = '';
  let currentLetter = string.charAt(string.length - 1);
  let currentLetterCount = 1;

  for (let i = string.length - 2; i >= 0; i--) {
    let nextLetter = string.charAt(i);

    if (nextLetter === currentLetter) {
      currentLetterCount++;
    } else if (nextLetter !== currentLetter) {
      encodedString = currentLetterCount.toString() + currentLetter + encodedString;
      currentLetter = nextLetter;
      currentLetterCount = 1;
    }

    if (i === 0) {
      return currentLetterCount.toString() + currentLetter + encodedString;
    }
  }
}

function runLengthDecodeString(string) {
  let decodedString = '';
  for (let i = 0; i < string.length; i += 2) {
    let numCurrentLetter = parseInt(string.charAt(i), 10);
    const currentLetter = string.charAt(i + 1);

    while (numCurrentLetter > 0) {
      decodedString += currentLetter;
      numCurrentLetter--;
    }
  }

  return decodedString;
}

module.exports = { runLengthEncodeString, runLengthDecodeString };
