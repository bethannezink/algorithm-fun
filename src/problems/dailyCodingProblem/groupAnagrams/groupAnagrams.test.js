const { groupAnagrams } = require('./groupAnagrams');

test('groups anagrams together into separate arrays', () => {
  const ungroupedAnagrams = ['eat', 'ate', 'apt', 'pat', 'tea', 'now'];

  expect(groupAnagrams(ungroupedAnagrams)).toMatchObject([['eat', 'ate', 'tea'], ['apt', 'pat'], ['now']]);
});