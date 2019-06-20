function isUnique(string) {
  if (string.length <= 1) { return true; }

  var charCounter = {};

  for (var i = 0; i < string.length; i++) {
    if (charCounter[string.charAt(i)]) {
      return false;
    } else {
      charCounter[string.charAt(i)] = 1;
    }
  }
  return true;
}