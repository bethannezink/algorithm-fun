const { sort } = require('./bubbleSort');

test.skip('returns the same array if it only contains one element', () => {
  const array = [ 10000 ];

  expect(sort(array)).toMatchObject(array);
});

test.skip('sorts an array of unsorted elements', () => {
  const unsortedArray = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ];
  const sortedArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

  expect(sort(unsortedArray)).toMatchObject(sortedArray);
});