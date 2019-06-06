const { findUniqueId, findUniqueIdWithBitwiseOperator } = require('./245');
const faker = require('faker');

let droneIds, uniqueId;

beforeEach(() => {
  droneIds = [];

  for (let i = 0;  i < 10; i++) {
    const duplicatedId = faker.random.number();
    droneIds.concat([duplicatedId, duplicatedId]);
  }

  uniqueId = faker.random.number();;
  droneIds.push(uniqueId);
});

test('finds unique id from array of positive integers', () => {
  expect(findUniqueId(droneIds)).toBe(uniqueId);
});

test('finds unique id from array of positive integers using bit operators', () => {
  expect(findUniqueIdWithBitwiseOperator(droneIds)).toBe(uniqueId);
});