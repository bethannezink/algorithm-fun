function sort (array) {
  if (array.length === 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIndex);
  const rightHalf = array.slice(middleIndex);

  return merge(sort(leftHalf), sort(rightHalf));
}

function merge (leftArray, rightArray) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  return mergedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}

module.exports = { sort };
