function reduce (array, fn, initialValue) {
  for (let element of array) {
    initialValue = fn(initialValue, element);
  }
  return initialValue;
}

module.exports = { reduce };
