// Given an even number (greater than 2), return two prime numbers whose sum will be equal to the given number.

// A solution will always exist. See Goldbach’s conjecture.

// Example:

// Input: 4
// Output: 2 + 2 = 4
// If there are more than one solution possible, return the lexicographically smaller solution.

// If [a, b] is one solution with a <= b, and [c, d] is another solution with c <= d, then

// [a, b] < [c, d]
// If a < c OR a==c AND b < d.

// input: integer
// output: two prime integers

// returning two prime addends
// iterate over every number < input / 2
// if number is prime, check if input - number is also prime
// if so, return

// is prime check
// iterate over every number < self
// divide, if result % 1 === 0, return false
// if get all the way through, return true

// Big O:
// Edge Cases: ensure input is even number > 2

function isPrime(number) {
  let divisor = number - 1;

  while (divisor > 1) {
    if (number / divisor % 1 === 0) {
      return false;
    }
    divisor--;
  }
  return true;
}

function getPrimeAddendPair(number) {
  let firstAddend = Math.floor(number / 2);

  while (firstAddend > 0) {
    if (isPrime(firstAddend)) {
      const secondAddend = number - firstAddend;
      const secondAddendIsPrime = isPrime(secondAddend);

      if (secondAddendIsPrime) {
        return [firstAddend, secondAddend];
      }
    }

    firstAddend--;
  }
}

module.exports = { getPrimeAddendPair };