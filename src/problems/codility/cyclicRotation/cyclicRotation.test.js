const { rotateArray } = require('./cyclicRotation');

test('Rotates array to the right by number of specified rotations', () => {
  const startingArray = [1, 2, 3, 4, 5];
  expect(rotateArray(startingArray, 1)).toMatchObject([5, 1, 2, 3, 4]);
  expect(rotateArray(startingArray, 2)).toMatchObject([4, 5, 1, 2, 3]);
  expect(rotateArray(startingArray, 3)).toMatchObject([3, 4, 5, 1, 2]);
  expect(rotateArray(startingArray, 4)).toMatchObject([2, 3, 4, 5, 1]);
  expect(rotateArray(startingArray, 5)).toMatchObject(startingArray);
});