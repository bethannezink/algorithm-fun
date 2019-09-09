const { shuffleArray } = require('./inPlaceShuffle');
const { sort } = require('../../sorting/insertionSort/insertionSort');

test('rearranges all array elements in a different order', () => {
  const sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const shuffledArray = shuffleArray(sortedArray);

  expect(shuffledArray).not.toMatchObject([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('maintains all the original elements within the array', () => {
  const sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const shuffledArray = shuffleArray(sortedArray);

  expect(sort(shuffledArray)).toMatchObject([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
