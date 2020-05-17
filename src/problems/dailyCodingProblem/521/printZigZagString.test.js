const { printDiagonalString } = require('./printZigZagString.js');

test('prints a diagonal string', () => {
  const expectedDiagonalString = 'c\n a\n  t';
  expect(printDiagonalString('cat')).toMatch(expectedDiagonalString);

  const expectedLongDiagonalString = 'h\n o\n  p\n   s\n    c\n     o\n      t\n       c\n        h';
  expect(printDiagonalString('hopscotch')).toMatch(expectedLongDiagonalString);
});
