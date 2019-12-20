// Given an array of strings, group anagrams together.
// For example, given the following array:
// ['eat', 'ate', 'apt', 'pat', 'tea', 'now']
// Return:
// [['eat', 'ate', 'tea'],
//  ['apt', 'pat'],
//  ['now']]

// all the letters in the string are equal, but rearranged

// iterate over array
// create data structure to collect all anagrams
// iterate over data structure --> print out anagram groupings
function groupAnagrams (ungroupedAnagramsArray) {
  let anagramGroupings = {};

  for (const anagram of ungroupedAnagramsArray) {
    const sortedAnagram = anagram.split('').sort().join('');

    if(anagramGroupings[sortedAnagram]) {
      anagramGroupings[sortedAnagram].push(anagram);
    } else {
      anagramGroupings[sortedAnagram] = [anagram];
    }
  }

  return Object.values(anagramGroupings);
}

module.exports = { groupAnagrams };
