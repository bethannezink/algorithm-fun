function isPermutation(firstString, secondString) {
  if (firstString.length !== secondString.length) { return false; }

  var charCounter = {};

  for (var i = 0; i < firstString.length; i++) {
    if (charCounter[firstString.charAt(i)]) {
      charCounter[firstString.charAt(i)] ++;
    } else {
      charCounter[firstString.charAt(i)] = 1;
    }
  }

  for (var j = 0; j < secondString.length; j++) {
    if (charCounter[secondString.charAt(j)]) {
      charCounter[secondString.charAt(j)] --;
    } else {
      return false;
    }
  }
  return true;
}