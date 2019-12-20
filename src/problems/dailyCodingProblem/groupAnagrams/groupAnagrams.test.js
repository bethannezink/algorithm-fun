const { groupAnagrams } = require('./groupAnagrams');

test('', () => {
  const ungroupedAnagrams = ['eat', 'ate', 'apt', 'pat', 'tea', 'now'];

  expect(groupAnagrams(ungroupedAnagrams)).toMatchObject([['eat', 'ate', 'tea'], ['apt', 'pat'], ['now']]);
});