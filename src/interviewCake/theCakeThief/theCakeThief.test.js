const { getMaxDuffelBagValue } = require('./theCakeThief');

test('get max values at capacity 1', () => {

  const cakeTypes = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 },
  ];

  expect(getMaxDuffelBagValue(cakeTypes, 1)).toBe(0);
});

test('get max values at capacity 2', () => {

  const cakeTypes = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 },
    { weight: 1, value: 30 },
  ];

  expect(getMaxDuffelBagValue(cakeTypes, 2)).toBe(60);
});