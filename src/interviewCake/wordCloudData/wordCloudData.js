// You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.
// To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a dictionary, where the keys are words and the values are the number of times the words occurred.
// Think about capitalized words. For example, look at these sentences:
// 'After beating the eggs, Dana read the next step:'
// 'Add milk and eggs, then add flour and sugar.'
// What do we want to do with "After", "Dana", and "add"? In this example, your final dictionary should include one "Add" or "add" with a value of 22. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".
// Assume the input will only contain words and standard punctuation.

function buildWordCloud (wordString) {
  wordString = wordString.toLowerCase();
  const wordCloud = {};
  let wordToAddToCloud = '';

  for (let i = 0; i < wordString.length; i++) {
    const isHyphen = wordString.charCodeAt(i) === 45;
    const isLetter = wordString.charCodeAt(i) >= 97 && wordString.charCodeAt(i) <= 122;
    const isSpace = wordString.charCodeAt(i) === 32;
    const isLastCharacter = i === wordString.length - 1;

    if (isLetter || isHyphen) {
      wordToAddToCloud += wordString.charAt(i);
    } else if (isSpace || isLastCharacter) {
      if (wordCloud[wordToAddToCloud]) {
        wordCloud[wordToAddToCloud]++;
      } else {
        wordCloud[wordToAddToCloud] = 1;
      }
      wordToAddToCloud = '';
    }
  }

  return wordCloud;
}

module.exports = { buildWordCloud };
