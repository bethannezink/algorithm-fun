// Daily Coding Problem #126
// Write a function that rotates a list by k elements.
// For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2].
// Try solving this without creating a copy of the list.
// How many swap or move operations do you need?

function reverseListByIndices(array, firstIndex, lastIndex) {
  while (firstIndex < lastIndex) {
    const temp = array[firstIndex];
    array[firstIndex] = array[lastIndex];
    array[lastIndex] = temp;

    firstIndex++;
    lastIndex--;
  }

  return array;
}


function rotateList(array, k) {
  reverseListByIndices(array, 0, k - 1);
  reverseListByIndices(array, k, array.length - 1);
  return reverseListByIndices(array, 0, array.length - 1);
}

module.exports = { reverseListByIndices, rotateList };