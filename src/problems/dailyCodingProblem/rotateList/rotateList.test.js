const { rotateList } = require('./rotateList');

test('', () => {
  expect(rotateList([1, 2, 3, 4, 5, 6], 2)).toMatchObject([3, 4, 5, 6, 1, 2]);
});