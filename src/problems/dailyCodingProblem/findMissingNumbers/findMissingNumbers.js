// You are given an unsorted list of 999,000 unique integers, each from 1 and 1,000,000.
// Find the missing 1000 numbers. What is the computational and space complexity of your solution?

// sort the list
// if array[0] !== 1 ->> push the difference between array[0] and 1 into the return array (4, ) --> helper function
// start iterating at index 1, compare to the value at index - 1, run the same helper function to push the same # into the return array
// [1, 2, 3, 6]

// is there a way to do this via maths.

function findMissingNumbers (unsortedNumArray, maxNumber = 9999999) {
  unsortedNumArray.sort((a, b)  => a - b);

  let resultArray = [];
  if (unsortedNumArray[0] !== 1) {
    resultArray = findMissingSection(unsortedNumArray[0], 1);
  }


  for (let i = 2; i < maxNumber; i++) { // do we want to start at 2?
    if (unsortedNumArray[i] - 1 !== unsortedNumArray[i - 1]) {
      resultArray.concat(findMissingSection(unsortedNumArray[i], unsortedNumArray[i - 1]));
    }
  }

  // ensure we get to 1 million
  console.log(resultArray);
  return resultArray;
}

function findMissingSection (currentNumber, startingNumber) {
  const diff = currentNumber - startingNumber;
  return [...Array(diff).keys()].map(i => i + startingNumber); // better understand what's going on here
}

module.exports = { findMissingNumbers };
