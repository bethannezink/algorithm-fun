// You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins.
// You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.
// While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.
// Each type of cake has a weight and a value, stored in an object with two properties:
// weight: the weight of the cake in kilograms
// value: the monetary value of the cake in British shillings

// For example:
//   // Weighs 7 kilograms and has a value of 160 shillings
//   { weight: 7, value: 160 }
//   // Weighs 3 kilograms and has a value of 90 shillings
//   { weight: 3, value: 90 }

// You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.
// Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.
// For example:
//   const cakeTypes = [
//   { weight: 7, value: 160 },
//   { weight: 3, value: 90 },
//   { weight: 2, value: 15 },
// ];

// const capacity = 20;
// maxDuffelBagValue(cakeTypes, capacity);
// // Returns 555 (6 of the middle type of cake and 1 of the last type of cake)

function getMaxDuffelBagValue (cakeTypes, capacity) {
  // memoization
  const maxValuesAtCapacities = new Array(capacity + 1).fill(0);

  for (let currentCapacity = 0; currentCapacity <= capacity; currentCapacity++) {
    let currentMaxValue = 0;

    for (let j = 0; j < cakeTypes.length; j++) {
      const cakeType = cakeTypes[j];

      if (cakeType.weight === 0 && cakeType.value === 0) {
        return Infinity;
      }

      if (cakeType.weight <= currentCapacity) {
        const maxValueWithCurrentCake = cakeType.value + maxValuesAtCapacities[currentCapacity - cakeType.weight];
        currentMaxValue = Math.max(maxValueWithCurrentCake, currentMaxValue);
      }
    }

    maxValuesAtCapacities[currentCapacity] = currentMaxValue;
  }

  return maxValuesAtCapacities[capacity];
}

function getMaxAtCapacity1(cakeTypes) {
  let maxValueAtCapacity1 = 0;

  cakeTypes.map(cake => {
    if (cake.weight === 1) {
      maxValueAtCapacity1 = Math.max(cake.value, maxValueAtCapacity1);
    }
  });
  return maxValueAtCapacity1;
}

function getMaxAtCapacity2(cakeTypes) {
  let maxValueAtCapacity2 = 0;

  cakeTypes.map(cake => {
    if (cake.weight <= 2) {
      maxValueAtCapacity2 = Math.max(cake.value, maxValueAtCapacity2);
    }
  });
  return maxValueAtCapacity2;
}

module.exports = { getMaxAtCapacity1, getMaxAtCapacity2, getMaxDuffelBagValue };