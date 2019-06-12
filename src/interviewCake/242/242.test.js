const { buildWordCloud } = require('./242');

const words = 'After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.'

const expectedWordCloud = {
  after: 1,
  beating: 1,
  the: 2,
  eggs: 1,
  dana: 1,
  read: 1,
  next: 1,
  step: 1,
  add: 2,
  milk: 1,
  and: 2,
  eggs: 1,
  then: 1,
  flour: 1,
  sugar: 1
}

test('test test', () => {
  expect(1).toBe(1);
});
