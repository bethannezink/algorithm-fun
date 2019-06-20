const { convertToMilitary } = require('./whatTimeIsIt');

test('converts simple PM date strings to military time', () => {
  const pmDateString = '11:01:23PM';

  expect(convertToMilitary(pmDateString)).toEqual('23:01:23');
});

test('converts simple AM date strings to military time', () => {
  const amDateString = '11:01:23AM';

  expect(convertToMilitary(amDateString)).toEqual('11:01:23');
});

// test('converts noon date strings to military time', () => {

// });

// test('converts midnight date strings to military time', () => {

// });