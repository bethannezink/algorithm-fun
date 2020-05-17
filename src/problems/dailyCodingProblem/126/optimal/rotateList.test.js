const { reverseEntireList, rotateList } = require('./rotateList');

test('reverseEntireList', () => {
  expect(reverseEntireList([1, 2, 3, 4, 5, 6])).toMatchObject([6, 5, 4, 3, 2, 1]);
});

// test('rotates a list of numbers by k elements', () => {
//   expect(rotateList([1, 2, 3, 4, 5, 6], 2)).toMatchObject([3, 4, 5, 6, 1, 2]);
//   expect(rotateList([1, 2, 3, 4, 5, 6], 3)).toMatchObject([4, 5, 6, 1, 2, 3]);
//   expect(rotateList([1, 2, 3, 4, 5, 6], 5)).toMatchObject([6, 1, 2, 3, 4, 5]);
//   expect(rotateList([1, 2, 3, 4, 5, 6], 6)).toMatchObject([1, 2, 3, 4, 5, 6]);
// });