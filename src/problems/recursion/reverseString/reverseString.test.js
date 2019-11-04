const { reverseString } = require('./reverseString');

test('returns the original string if empty', () => {
  expect(reverseString('')).toEqual('')
});

test('returns the original string if it contains only one character', () => {
  expect(reverseString('X')).toEqual('X')
});

test('reverses a word using recursion', () => {
  expect(reverseString('string')).toEqual('gnirts');
});

test('reverses a phrase using recursion', () => {
  expect(reverseString('able was I ere I saw elba')).toEqual('able was I ere I saw elba')
});

