// Write a function that rotates a list by k elements.
// For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2].
// Try solving this without creating a copy of the list.
// How many swap or move operations do you need?

function swapElements(array, swapIndex) {
  const temp = array[swapIndex];
  array[swapIndex] = array[swapIndex - 1];
  array[swapIndex - 1] = temp;
  console.log(array);
  return array;
}

function rotateList(array, k) {
  for (let i = k; i < array.length; i++) {
    let counter = i;
    while (counter > 0) {
      swapElements(array, counter);
      counter--;
    }
  }

  return array;
}

module.exports = { rotateList };