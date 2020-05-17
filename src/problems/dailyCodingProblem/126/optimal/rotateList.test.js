const { reverseListByIndices, rotateList } = require('./rotateList');

test('reverseListByIndices', () => {
  expect(reverseListByIndices([1, 2, 3, 4, 5, 6], 0, 5)).toMatchObject([6, 5, 4, 3, 2, 1]);
  expect(reverseListByIndices([10, 20, 30, 40, 50], 0, 4)).toMatchObject([50, 40, 30, 20, 10]);
  expect(reverseListByIndices([1, 5, 10, 15, 20], 0, 1)).toMatchObject([5, 1, 10, 15, 20]);
  expect(reverseListByIndices([1, 5, 10, 15, 20], 3, 4)).toMatchObject([1, 5, 10, 20, 15]);
  expect(reverseListByIndices([1, 5, 10, 15, 20], 1, 4)).toMatchObject([1, 20, 15, 10, 5]);
});

test('rotates a list of numbers by k elements', () => {
  expect(rotateList([1, 2, 3, 4, 5, 6], 2)).toMatchObject([3, 4, 5, 6, 1, 2]);
  expect(rotateList([1, 2, 3, 4, 5, 6], 3)).toMatchObject([4, 5, 6, 1, 2, 3]);
  expect(rotateList([1, 2, 3, 4, 5, 6], 5)).toMatchObject([6, 1, 2, 3, 4, 5]);
  expect(rotateList([1, 2, 3, 4, 5, 6], 6)).toMatchObject([1, 2, 3, 4, 5, 6]);
});