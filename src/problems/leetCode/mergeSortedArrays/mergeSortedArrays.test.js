const { mergeSortedArrays } = require('./mergeSortedArrays');

test('merges sorted arrays', () => {
  expect(mergeSortedArrays([1,2,4,5], [3,6,8,9])).toMatchObject([1,2,3,4,5,6,8,9]);
  expect(mergeSortedArrays([0,0,0,0], [1,1,1,1])).toMatchObject([0,0,0,0,1,1,1,1]);
  expect(mergeSortedArrays([1,2], [1,2])).toMatchObject([1,1,2,2]);
  expect(mergeSortedArrays([9], [3])).toMatchObject([3,9]);
});

test('returns the other array if one array is empty', () => {
  expect(mergeSortedArrays([], [1])).toMatchObject([1]);
  expect(mergeSortedArrays([], [1,2,3,4,7])).toMatchObject([1,2,3,4,7]);
  expect(mergeSortedArrays([0,0,2,3,6,9,122], [])).toMatchObject([0,0,2,3,6,9,122]);
});

test('returns an empty array if both arrays are empty', () => {
  expect(mergeSortedArrays([], [])).toMatchObject([]);
});