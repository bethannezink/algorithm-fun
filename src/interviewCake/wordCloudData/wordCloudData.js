// You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.
// To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a dictionary, where the keys are words and the values are the number of times the words occurred.
// Think about capitalized words. For example, look at these sentences:
// 'After beating the eggs, Dana read the next step:'
// 'Add milk and eggs, then add flour and sugar.'
// What do we want to do with "After", "Dana", and "add"? In this example, your final dictionary should include one "Add" or "add" with a value of 22. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".
// Assume the input will only contain words and standard punctuation.

function buildWordCloud (wordString) {
  const wordArray = wordString.split(' ');
  const wordCloud = {};

  for (let i = 0; i < wordArray.length; i++) {
    let wordToAddToCloud = '';

    for (let j = 0; j < wordArray[i].length; j++) {
      const wordToCheck = wordArray[i].toLowerCase();
      const isHyphen = wordToCheck.charCodeAt(j) === 45;

      // should I strictly look at beginning (") and end of word (,"-?!)
      if (wordToCheck.charCodeAt(j) >= 97 && wordToCheck.charCodeAt(j) <= 122 || isHyphen) {
        wordToAddToCloud += wordToCheck.charAt(j);
      }
    }

    if (wordCloud[wordToAddToCloud]) {
      wordCloud[wordToAddToCloud]++;
    } else {
      wordCloud[wordToAddToCloud] = 1;
    }
  }

  return wordCloud;
}

module.exports = { buildWordCloud };