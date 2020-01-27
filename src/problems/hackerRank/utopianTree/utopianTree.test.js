const { getUtopianTreeHeight } = require('./utopianTree');

test('gets height of Utopian tree after zero cycles', () => {
  expect(getUtopianTreeHeight(0)).toEqual(1);
});

test('gets height of Utopian tree after one cycle', () => {
  expect(getUtopianTreeHeight(1)).toEqual(2);
});

test('gets height of Utopian tree after multiple cycles', () => {
  expect(getUtopianTreeHeight(3)).toEqual(6);
  expect(getUtopianTreeHeight(4)).toEqual(7);
  expect(getUtopianTreeHeight(5)).toEqual(14);
  expect(getUtopianTreeHeight(6)).toEqual(15);
});