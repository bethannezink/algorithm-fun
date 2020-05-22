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

module.exports = { findPythagoreanTriplet };