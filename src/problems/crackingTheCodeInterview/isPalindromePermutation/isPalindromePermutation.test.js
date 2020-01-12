const { isPalindromePermutation } = require('./isPalindromePermutation');

test('returns true if string is a permutation of a palindrome', () => {
  expect(isPalindromePermutation('omm')).toEqual.true;
  expect(isPalindromePermutation('iivic')).toEqual.true;
  expect(isPalindromePermutation('racecar')).toEqual.true;
  expect(isPalindromePermutation('123321')).toEqual.true;
});

test('returns false if string is not a permutation of a palindrome', () => {
  expect(isPalindromePermutation('om')).toEqual.true;
  expect(isPalindromePermutation('iivi')).toEqual.true;
  expect(isPalindromePermutation('racecarz')).toEqual.true;
  expect(isPalindromePermutation('12345')).toEqual.true;
});