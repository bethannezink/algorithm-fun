function sumOfArray(array) {

  if (array.length === 0) {
    return 0;
  }

  const lastElement = array.pop();
  return lastElement + sumOfArray(array);

}

module.exports = { sumOfArray };
