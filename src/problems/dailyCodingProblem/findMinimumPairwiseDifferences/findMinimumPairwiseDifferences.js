// You are given an array X of floating-point numbers x1, x2, ... xn.
// These can be rounded up or down to create a corresponding array Y of integers y1, y2, ... yn.

// Write an algorithm that finds an appropriate Y array with the following properties:
// The rounded sums of both arrays should be equal.
// The absolute pairwise difference between elements is minimized.
// In other words, |x1 - y1| + |x2 - y2| + ... + |xn - yn| should be as small as possible.
// For example, suppose your input is [1.3, 2.3, 4.4].
// In this case you cannot do better than [1, 2, 5], which has an absolute difference of |1.3 - 1| + |2.3 - 2| + |4.4 - 5| = 0.
// .3 + .3 + - .6 = 0

// |1.3 - 2| + |2.3 - 2| + |4.4 - 4| = 
// -.7 + .3 + .4

// input
const floatsArray = [1.3, 2.3, 4.4];

// iterate over array
// add to data sructure every possible combination of results

// output
// [1, 2, 5] 8
// [1, 2, 4] 7
// [1, 3, 5] 9
// [1, 3, 4] 7
// [2, 2, 5] 9
// [2, 3, 5] 10
// [2, 2, 4] 8
// [2, 3, 4] 9

// iterate over data structure array to compare rounded sums (incredibly expensive)
// if rounded sum matches rounded sum of floatArray, hold on to possible array (new data object)
// lastly, iterate over new data object and return minimum pairwise difference array


function findMinimumPairwiseDifferences (floatArray) {
  let counter = 0;
  const numOptions = 2 ** floatArray.length;
  let roundedTotal = 0;
  let dataArray = Array(numOptions).fill([]);

  for (let float of floatArray) {
    const roundedFloat = Math.round(float);
    roundedTotal += roundedFloat;
    
    const floatFloor = Math.floor(float);
    const floatCeil = Math.ceil(float);

    while (counter < numOptions) {

      if (counter % 2 === 0) {
        dataArray[counter].push(floatFloor);
      } else {
        dataArray[counter].push(floatCeil);
      }

      console.log(numOptions, counter, dataArray);
      counter++;
    }
  }


}

module.exports = { findMinimumPairwiseDifferences };
