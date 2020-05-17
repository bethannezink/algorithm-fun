// Daily Coding Problem #126
// Write a function that rotates a list by k elements.
// For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2].
// Try solving this without creating a copy of the list.
// How many swap or move operations do you need?

function reverseEntireList(array) {
  const maxSwaps = Math.floor(array.length / 2);
  let swapCounter = 0;

  while (swapCounter < maxSwaps) {
    const reverseElementIndex = array.length - swapCounter - 1;

    const temp = array[swapCounter];
    array[swapCounter] = array[reverseElementIndex];
    array[reverseElementIndex] = temp;

    swapCounter++;
  }

  return array;
}


function rotateList(array, k) {
}

module.exports = { reverseEntireList, rotateList };