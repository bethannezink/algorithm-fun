const { runLengthDecodeString, runLengthEncodeString } = require('./runLengthEncodeString');

test('run-length encodes the string', () => {
  expect(runLengthEncodeString('AAAABBBCCDAA')).toEqual('4A3B2C1D2A');
  expect(runLengthEncodeString('FFFFFJJJJJ')).toEqual('5F5J');
  expect(runLengthEncodeString('IUACB')).toEqual('1I1U1A1C1B');
  expect(runLengthEncodeString('YYYYYYYYY')).toEqual('9Y');
});

test('decodes the run-length encoded string', () => {
  expect(runLengthDecodeString('4A3B2C1D2A')).toEqual('AAAABBBCCDAA');
  expect(runLengthDecodeString('5F5J')).toEqual('FFFFFJJJJJ');
  expect(runLengthDecodeString('1I1U1A1C1B')).toEqual('IUACB');
  expect(runLengthDecodeString('9Y')).toEqual('YYYYYYYYY');
});