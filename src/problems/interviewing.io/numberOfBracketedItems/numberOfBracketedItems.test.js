const { numberOfBracketedItems } = require('./numberOfBracketedItems');

test('', () => {
  expect(numberOfBracketedItems('{cats}')).toEqual(1);
});

test('', () => {
  expect(numberOfBracketedItems('{ca(t)s}')).toEqual(2);
});

test('', () => {
  expect(numberOfBracketedItems('{c[{a(t)}]s}')).toEqual(4);
});

test('', () => {
  expect(numberOfBracketedItems('[({cats})]')).toEqual(3);
});

test('', () => {
  expect(numberOfBracketedItems('{cats]')).toEqual(-1);
});

test('', () => {
  expect(numberOfBracketedItems(')cats(')).toEqual(-1);
});

test('', () => {
  expect(numberOfBracketedItems(']cats')).toEqual(-1);
});

test('', () => {
  expect(numberOfBracketedItems('(cats')).toEqual(-1);
});

test('', () => {
  expect(numberOfBracketedItems('(cats]')).toEqual(-1);
});

test('', () => {
  expect(numberOfBracketedItems('(cats(')).toEqual(-1);
});