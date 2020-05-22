// Daily Coding Problem #282
// Given an array of integers, determine whether it contains a Pythagorean triplet.
// Recall that a Pythogorean triplet (a, b, c) is defined by the equation a2+ b2 = c2.

function findPythagoreanTriplet(array) {
  const squaredArray = array.map(num => num ** 2);

  for (const square1 of squaredArray) {
    for (const square2 of squaredArray) {
      for (const square3 of squaredArray) {
        const isTriplet =
          square1 + square2 === square3 ||
          square1 + square3 === square2 ||
          square2 + square3 === square1;

          if (isTriplet) {
            return true;
          }
      }
    }
  }
  return false;
}

function findPythagoreanTripletWithSlightOptimization(array) {
  const squaredArray = array.map(num => num ** 2);

  for (let i = 0; i < squaredArray.length; i++) {
    for (let j = i + 1; j < squaredArray.length; j++) {
      for (let k = j + 1; k < squaredArray.length; k++) {
        const square1 = squaredArray[i];
        const square2 = squaredArray[j];
        const square3 = squaredArray[k];

        const isTriplet =
          square1 + square2 === square3 ||
          square1 + square3 === square2 ||
          square2 + square3 === square1;

          if (isTriplet) {
            return true;
          }
      }
    }
  }
  return false;
}

module.exports = { findPythagoreanTriplet, findPythagoreanTripletWithSlightOptimization };