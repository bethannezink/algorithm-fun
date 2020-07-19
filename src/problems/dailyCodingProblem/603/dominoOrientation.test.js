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

test.skip('Returns the result orientation when the string starts and ends with different orientation', () => {
  expect(dominoOrientation('L..R')).toEqual('LLRR');
  expect(dominoOrientation('R.....L')).toEqual('RRR.LLL');
  expect(dominoOrientation('R...L')).toEqual('RR.LL');
  expect(dominoOrientation('L........R')).toEqual('LLLLLRRRRR');
});