// You have n fair coins and you flip them all at the same time.
// Any that come up tails you set aside.
// The ones that come up heads you flip again.
// How many rounds do you expect to play before only one coin remains?

// Write a function that, given n, returns the number of rounds you'd expect to play until one coin remains.

// Big O: O(log n)

function numCoinFlipRounds (n) {
  const probabilityPerRound = 0.5;
  let roundCounter = 0;

  while (n > 1) {
    n *= probabilityPerRound;
    roundCounter++;
  }

  return roundCounter;
}

module.exports = { numCoinFlipRounds };