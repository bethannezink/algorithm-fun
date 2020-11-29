const { dominoOrientation } = require('./dominoOrientation');

test('Returns the result orientation when the string starts and ends with the same orientation', () => {
  expect(dominoOrientation('L..L')).toEqual('LLLL');
  expect(dominoOrientation('L.....L')).toEqual('LLLLLLL');
  expect(dominoOrientation('R...R')).toEqual('RRRRR');
  expect(dominoOrientation('R........R')).toEqual('RRRRRRRRRR');
});

test('Returns the result orientation when the string starts and ends with the same orientation', () => {
  expect(dominoOrientation('L..L..L')).toEqual('LLLLLLL');
  expect(dominoOrientation('L.....L.....L')).toEqual('LLLLLLLLLLLLL');
  expect(dominoOrientation('R...R...R')).toEqual('RRRRRRRRR');
  expect(dominoOrientation('R........R.R')).toEqual('RRRRRRRRRRRR');
});

test('Returns the result orientation when the string starts and ends with different orientation', () => {
  expect(dominoOrientation('L..R')).toEqual('LLRR');
  expect(dominoOrientation('R....L')).toEqual('RRRLLL');
  expect(dominoOrientation('R......L')).toEqual('RRRRLLLL');
  expect(dominoOrientation('L........R')).toEqual('LLLLLRRRRR');
});

test('', () => {
  expect(dominoOrientation('L..R..L')).toEqual('LLRRRLL');
  expect(dominoOrientation('R....L....L')).toEqual('RRRLLLLLLL');
  expect(dominoOrientation('R..LL..R')).toEqual('RRLLLRR');
});