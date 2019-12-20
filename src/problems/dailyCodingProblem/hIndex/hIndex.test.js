const { findHIndex } = require('./hIndex.js');

test('', () => {
  expect(findHIndex([0, 0, 2, 3, 4])).toEqual(2);
});

test('', () => {
  expect(findHIndex([4, 0, 2, 3, 0])).toEqual(2);
});
