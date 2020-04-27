const { printDiagonalString } = require('./printZigZagString.js');

test('prints a diagonal string', () => {
  const expectedDiagonalString = `
  h
    o
      p
        s
          c
            o
              t
                c
                  h`;
  expect(printDiagonalString('hopscotch')).toEqual(expectedDiagonalString);
});
