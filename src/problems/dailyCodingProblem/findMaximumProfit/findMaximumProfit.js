// Given an array of numbers representing the stock prices of a company in chronological order and an integer k,
// return the maximum profit you can make from k buys and sells.
// You must buy the stock before you can sell it, and you must sell the stock before you can buy it again.

// For example, given k = 2 and the array [5, 2, 4, 0, 1], you should return 3.

// To Do: 
// iterate over array 
// greatest difference between consecutive elements in array, but only if first element is greater
// create a data structure that storest the greatest differences between consecutive elements in array
// do you have to use up the k buys/sells, or can you avoid?

// data structure of sorted greatest differences between consecutive elements
// store in another array; iterate over that array to return k largest?

function findMaximumProfit (array, k) {
  let consecutiveDifferences = [];
  
  for (let [index, element] of array.entries()) {
    const nextElement = array[index + 1];

    if (nextElement && element < nextElement) {
      consecutiveDifferences.push(nextElement - element);
    }
  }

  console.log(consecutiveDifferences);

  if (consecutiveDifferences.length <= k) {
    return consecutiveDifferences.reduce((element, total) => total += element);
  }
}


module.exports = { findMaximumProfit };
