// Given a positive integer N, find the smallest number of steps it will take to reach 1.

// There are two kinds of permitted steps:

// You may decrement N to N - 1.
// If a * b = N, you may decrement N to the larger of a and b.
// For example, given 100, you can reach 1 in five steps with the following route: 100 -> 10 -> 9 -> 3 -> 2 -> 1.

// while n > 1
// successively try to find its largest divisor
// set to largest divisor
function findSmallestNumStepsTo1 (n) {
  let steps = 0;

  while (n > 1) {
    let divisor = findSmallestGreaterDivisor(n);

    if (divisor) {
      n = divisor
    } else {
      n--;
    }

    steps++;
    console.log(n)
  }
}

function findSmallestGreaterDivisor (n) {
  const nSqrt = Math.sqrt(n);

  if (nSqrt % 2 === 0) {
    return nSqrt;
  }

  let smallestGreaterDivisor = Math.ceil(nSqrt);

  if (n % smallestGreaterDivisor === 0) {
    return smallestGreaterDivisor;
  } else {
    return false;
  }
}

module.exports = { findSmallestNumStepsTo1 };
