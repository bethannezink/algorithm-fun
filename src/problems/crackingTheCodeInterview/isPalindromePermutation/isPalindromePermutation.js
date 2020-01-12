function isPalindromePermutation(string) {
  if (string.length <= 1) { return true; }

  var charCounter = {};
  var oddCounter = 0;

  for (var i = 0; i < string.length; i++) {
    if (charCounter[string.charAt(i)]) {
      charCounter[string.charAt(i)] ++;
    } else {
      charCounter[string.charAt(i)] = 1;
    }
  }

  for (var count in charCounter) {
    if (charCounter[count] % 2 !== 0) {
      if (oddCounter < 1) {
        oddCounter ++;
      } else {
        return false;
      }
    }
  }
  return true;
}

module.exports = { isPalindromePermutation };
