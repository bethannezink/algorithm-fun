const { isPalindromePermutation } = require('./isPalindromePermutation');

test('returns true if string is a permutation of a palindrome', () => {
  expect(isPalindromePermutation('iivic')).toEqual.true;
});