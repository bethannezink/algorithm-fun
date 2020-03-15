function sort (array) {
  let counter = 0;

  while (counter < array.length) {
    let tmp;
    for (let i = 0; i < array.length - counter; i++) {
      if (array[i] > array[i+1]) {
        tmp = array[i];
        array[i] = array[i+1];
        array[i+1] = tmp;
      }
      counter++;
    }
  }
  return array;
}

module.expors = { sort };
