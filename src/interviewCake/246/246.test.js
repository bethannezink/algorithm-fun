const { getMaxAtCapacity1, getMaxAtCapacity2, getMaxDuffelBagValue } = require('./246');

test('getMaxAtCapacity1', () => {

  const cakeTypes = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 },
  ];

  const capacity = 20;

  expect(getMaxAtCapacity1(cakeTypes)).toBe(0);
});

test('getMaxAtCapacity2', () => {

  const cakeTypes = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 },
    { weight: 1, value: 30 },
  ];

  expect(getMaxAtCapacity2(cakeTypes)).toBe(60);
});