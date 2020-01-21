function mergeSortedArrays (arrayA, arrayB) {
  let mergedArray = [];
  let currIndexA = 0;
  let currIndexB = 0;

  while (currIndexA < arrayA.length || currIndexB < arrayB.length) {
    if (arrayA[currIndexA] <= arrayB[currIndexB] || (arrayA[currIndexA] !== undefined && arrayB[currIndexB] === undefined)) {
      mergedArray.push(arrayA[currIndexA]);
      currIndexA++;
    }
    
    if (arrayB[currIndexB] <= arrayA[currIndexA] || (arrayB[currIndexB] !== undefined && arrayA[currIndexA] === undefined)) {
      mergedArray.push(arrayB[currIndexB]);
      currIndexB++;
    }
  }

  return mergedArray;
}

module.exports = { mergeSortedArrays };
