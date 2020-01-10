const { findNLookAndSaySequence } = require('./findNLookAndSaySequence');

test('Finds the Nth Look and Say Sequence', () => {
  expect(findNLookAndSaySequence(1)).toBe('1');
  expect(findNLookAndSaySequence(2)).toBe('11');
  expect(findNLookAndSaySequence(3)).toBe('21');
  expect(findNLookAndSaySequence(4)).toBe('1211');
  expect(findNLookAndSaySequence(5)).toBe('111221');
  expect(findNLookAndSaySequence(6)).toBe('312211');
  expect(findNLookAndSaySequence(7)).toBe('13112221');
  expect(findNLookAndSaySequence(8)).toBe('1113213211');
  expect(findNLookAndSaySequence(9)).toBe('31131211131221');
  expect(findNLookAndSaySequence(10)).toBe('13211311123113112211');
});
