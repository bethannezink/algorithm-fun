// The "look and say" sequence is defined as follows:
// beginning with the term 1, each subsequent term visually
// describes the digits appearing in the previous term. The first few terms are as follows:
// 1
// 11
// 21
// 1211
// 111221
// As an example, the fourth term is 1211, since the third term consists of one 2 and one 1.
// Given an integer N, print the Nth term of this sequence.

// starting with '1', iterate over string --> store count of consecutive current value
// when value changes, add to result string, then reset count and repeat

const sequence = '1';

function findNLookAndSaySequence (n) {
  let counter = 1;
  let nLookAndSaySequence = sequence;

  while (counter < n) {
    nLookAndSaySequence = findPreviousLookAndSaySequence(nLookAndSaySequence);
    counter++;
  }

  return nLookAndSaySequence;
}

function findPreviousLookAndSaySequence (lookAndSayString) {
  let previousChar = lookAndSayString.charAt(0);
  let previousCharCount = 1;
  let resultString = '';

  if (lookAndSayString.length === 1) {
    return '1' + lookAndSayString;
  }

  for (let i = 1; i < lookAndSayString.length; i++) {
    const currentChar = lookAndSayString.charAt(i);
    const isEqualToPreviousChar = previousChar === currentChar;
    const isLastChar = i === lookAndSayString.length - 1;

    if (isEqualToPreviousChar) {
      previousCharCount++;
    } else {
      resultString += previousCharCount.toString() + previousChar;
      previousChar = currentChar;
      previousCharCount = 1;
    }

    if (isLastChar) {
      resultString += previousCharCount.toString() + previousChar;
    }
  }

  return resultString;
}

module.exports = { findNLookAndSaySequence };
