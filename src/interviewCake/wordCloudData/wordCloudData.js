// You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.
// To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a dictionary, where the keys are words and the values are the number of times the words occurred.
// Think about capitalized words. For example, look at these sentences:
// 'After beating the eggs, Dana read the next step:'
// 'Add milk and eggs, then add flour and sugar.'
// What do we want to do with "After", "Dana", and "add"? In this example, your final dictionary should include one "Add" or "add" with a value of 22. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".
// Assume the input will only contain words and standard punctuation.

const validLetterCharCodes = []

// function buildWordCloud (wordString) {
//   const wordArray = wordString.split(' ').join();
//   const wordCloud = {};

//   for (let i = 0; i < wordArray; i++) {
//     for (let j = 0; j < wordArray[i].length; j++) {
//       const wordToAdd = '';
//       if ((wordArray[i].charCodeAt(j) > 64 && wordArray[i].charCodeAt(j) < 91) || (wordArray[i].charCodeAt(j) > 96 && wordArray[i].charCodeAt(j) < 123)) {
//         wordToAdd += wordArray[i].charCodeAt(j);
//       }
//     }
    
//     wordCloud 
//   }

//   if 
// }