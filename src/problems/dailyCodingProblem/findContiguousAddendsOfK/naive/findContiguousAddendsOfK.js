// Given a list of integers and a number K, return which contiguous
// elements of the list sum to K.

// For example, if the list is [1, 2, 3, 4, 5] and K is 9,
// then it should return [2, 3, 4], since 2 + 3 + 4 = 9.

// Questions - what if multiple contiguous elements sum to L? (assumption: return first collection)
// What if no contiguous elements sum to K (assumption: return empty array)
// Can integers be negative (assumption: yes)

// Edge Cases:
// less than 2 elements in array - element must = K

// Big O: N^2

function findContiguousAddendsOfK(array, K) {
  for (let firstIndex = 0; firstIndex < array.length; firstIndex++) {
    let sum = 0;

    for (let lastIndex = firstIndex; lastIndex < array.length; lastIndex++) {
      sum += array[lastIndex];

      if (sum === K) {
        return array.slice(firstIndex, lastIndex + 1);
      }
    }
  }

  return [];
}

module.exports = { findContiguousAddendsOfK };