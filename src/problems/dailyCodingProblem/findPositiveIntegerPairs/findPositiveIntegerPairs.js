// Given integers M and N, write a program that counts how many positive integer
// pairs (a, b) satisfy the following conditions:

// a + b = M
// a XOR b = N


// calculate all addends -- return array of addend pairs for M
// iterate over result of addend pairs and calc a XOR b
// if calc for pair = N, filter into response array of pairs
// return length of array --> correct return value?
// To Do: understand XOR calc


// what is the big O of this? n / 2? (is that just n?)
function getAllAddends(num) {
  let allAddends = [];
  let addend1 = 0;

  while (addend1 <= num / 2) {
    let addend2 = num - addend1;

    allAddends.push([addend1, addend2]);
    addend1++;
  }

  return allAddends;
}

// unneeded
function getAllDivisors(num) {
  let allDivisors = [];
  let potentialDivisor = num;

  while (potentialDivisor > 0) {
    const isDivisor = num % potentialDivisor === 0;

    if (isDivisor) {
      allDivisors.push(potentialDivisor);
    }
    potentialDivisor--;
  }

  return allDivisors;
}

module.exports = { getAllAddends, getAllDivisors };