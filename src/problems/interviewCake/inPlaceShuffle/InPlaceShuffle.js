// Write a function for doing an in-place ↴ shuffle of an array.
// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.
// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

function shuffleArray (array) {
  for (let i = 0; i < array.length; i++) {
    let randomeNewIndex = getRandom(0, array.length - 1);

    if (randomeNewIndex !== i) {
      let temp = array[randomeNewIndex];
      array[randomeNewIndex] = array[i];
      array[i] = temp;
    }
  }
  console.log(array);
  return array;
}

function getRandom (floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

module.exports = { shuffleArray };