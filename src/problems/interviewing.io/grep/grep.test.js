const { grep } = require('./grep');

test('', () => {
  const haystack = 'abcdddbbddddabcdefghi';
  const needle = 'abc';

  expect(grep(haystack, needle)).toMatchObject([0, 12]);
});

test('', () => {
  const haystack = 'aaaaa';
  const needle = 'aa';

  expect(grep(haystack, needle)).toMatchObject([0, 1, 2, 3]);
});