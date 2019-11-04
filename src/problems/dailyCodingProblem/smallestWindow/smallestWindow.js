// Given a string, find the length of the smallest window that contains every distinct character.
// Characters may appear more than once in the window.


// what are all the distinct characters
// track current smallest window
// can do in one loop?
function findSmallestWindow (string) {
  const distinctChars = getAllDistinctChars(string);

  for (let char of string) {
    
  }
  
}

function getAllDistinctChars (string) {
  const distinctChars = {};
  for (let char of string) {
     const isDistinct = !distinctChars[char];
    if (isDistinct) {
      distinctChars[char] = true;
    }
  }
  return distinctChars;
}
