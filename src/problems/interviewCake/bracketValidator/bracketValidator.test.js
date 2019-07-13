const { validateBrackets } = require('./bracketValidator');

test('returns false if string is empty', () => {
  const emptyBracketString = '';
  expect(validateBrackets(emptyBracketString)).toBe(false);
});

test('returns false if length of bracket string is an odd nunber', () => {
  const oddLengthString = '{([}])}';
  expect(validateBrackets(oddLengthString)).toBe(false);
});

test('returns false if every bracket in string is a close bracket', () => {
  const allCloseBracketString = ')})}}}]]))}';
  expect(validateBrackets(allCloseBracketString)).toBe(false);
});

test('returns false if every bracket in string is an open bracket', () => {
  const allOpenBracketString = '{{{{{((((([[[[[[';
  expect(validateBrackets(allOpenBracketString)).toBe(false);
});

test('returns false if every open bracket does not have a corresponding close bracket', () => {
  const unmatchedBracketString = '[{([)}';
  expect(validateBrackets(unmatchedBracketString)).toBe(false);
});

test('returns false if every open bracket has a corresponding close bracket, but bracket order is invalid', () => {
  const invalidOrderBracketString = '{()[{]}}';
  expect(validateBrackets(invalidOrderBracketString)).toBe(false);
});

test('returns true if every open bracket has a corresponding close bracket, and bracket order is valid', () => {
  const validOrderBracketString = '{()[{([])}]{}}';
  expect(validateBrackets(validOrderBracketString)).toBe(true);
});

test('returns true if only one bracket pair is included in the string', () => {
  const validOrderBracketString = '{}';
  expect(validateBrackets(validOrderBracketString)).toBe(true);
});