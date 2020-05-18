const { runLengthEncodeString } = require('./runLengthEncodeString');

test('', () => {
  expect(runLengthEncodeString('AAAABBBCCDAA')).toEqual('4A3B2C1D2A');
});