function productOfArray (array) {
  if (array.length < 1) {
    return 1;
  }

  return array.pop() * productOfArray(array);
}

module.exports = { productOfArray };
