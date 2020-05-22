const { findMinimumPairwiseDifferences } = require('./findMinimumPairwiseDifferences');

test.skip('', () => {
  expect(findMinimumPairwiseDifferences([1.3, 3.3])).toMatchObject([1, 2, 5]);
});
