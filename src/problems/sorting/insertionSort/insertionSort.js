function sort (array) {
  if (array.length <= 1) {
    return array;
  }

  for (let i = 1; i < array.length; i++) {
    let elementToInsert = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > elementToInsert) { 
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = elementToInsert;
  }
  return array;
}

module.exports = { sort };
