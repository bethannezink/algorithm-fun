// Daily Coding Problem #282
// Given an array of integers, determine whether it contains a Pythagorean triplet.
// Recall that a Pythogorean triplet (a, b, c) is defined by the equation a2+ b2= c2.

// Big O: n ^ 2

// NOTE: This solution assumed the array was an array of integers that had already been squared -- WRONG

function isSquare(number) {
  return Math.sqrt(number) % 1 === 0;
}

function findPythagoreanTriplet(array) {
  let squaresLookup = {};

  for (let i = 0; i < array.length; i++) {
    const firstNum = array[i];

    if (squaresLookup[firstNum]) {
      return true;
    } else {
      if (isSquare(firstNum)) {
        for (let j = i + 1; j < array.length; j++) {
          const secondNum = array[j];

          if (isSquare(secondNum)) {
            const sum = firstNum + secondNum;
            const difference = Math.abs(firstNum - secondNum);

            if (isSquare(sum)) {
              squaresLookup[sum] = true;
            }
            if (isSquare(difference)) {
              squaresLookup[difference] = true;
            }
          }
        }
      }
    }
  }
  return false;
}

module.exports = { findPythagoreanTriplet };
