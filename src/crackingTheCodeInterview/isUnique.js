function isUnique(string) {
  if (string.length <= 1) { return true; }

  var counter = {};

  for (var i = 0; i < string.length; i++) {
    if (counter[string.charAt(i)]) {
      return false;
    } else {
      counter[string.charAt(i)] = 1;
    }
  }
  return true;
}