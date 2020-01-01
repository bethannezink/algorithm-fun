const { findLargerBranch } = require('./findLargerBranch');

test('handles a tree with a larger left branch', () => {
  expect(findLargerBranch([3,6,2,9,-1,10])).toEqual('Left');
});

test('handles a tree with a larger right branch', () => {
  expect(findLargerBranch([1,4,100,5])).toEqual('Right');
});

test('handles a tree with equal branches', () => {
  expect(findLargerBranch([1,10,5,1,0,6])).toEqual('');
});

test('handles a tree with no nodes', () => {
  expect(findLargerBranch([])).toEqual('');
});
