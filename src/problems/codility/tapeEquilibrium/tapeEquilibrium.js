function findSmallestDifference(array) {
  const totalSum = array.reduce((a, b) => a + b);
  let firstHalfSum = array[0];
  let secondHalfSum = totalSum - firstHalfSum;
  let smallestDifference = Math.abs(firstHalfSum - secondHalfSum);

  for (let i = 1; i < array.length - 1; i++) {
    firstHalfSum += array[i];
    secondHalfSum = totalSum - firstHalfSum;
    const currentDifference = Math.abs(firstHalfSum - secondHalfSum);

    if (currentDifference < smallestDifference) {
      smallestDifference = currentDifference;
    }
  }

  return smallestDifference;
}

module.exports = { findSmallestDifference };
