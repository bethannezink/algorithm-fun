// Daily Coding Problem #523
// Given integers M and N, write a program that counts how many positive integer
// pairs (a, b) satisfy the following conditions:

// a + b = M
// a XOR b = N

function findPositiveIntegerPairs(num1, num2) {
  let pairs = [];
  let addend1 = 0;

  while (addend1 <= num1 / 2) {
    let addend2 = num1 - addend1;
    const addendsXOrValue = addend1 ^ addend2;

    if (addendsXOrValue === num2) {
      pairs.push([addend1, addend2]);
    }

    addend1++;
  }

  return pairs;
}

module.exports = { findPositiveIntegerPairs };

// O(M) time