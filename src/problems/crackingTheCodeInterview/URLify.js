function URLify(string) {
  var URLifiedString = '';

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === ' ') {
      URLifiedString += '%20';
    } else {
      URLifiedString += string.charAt(i);
    }
  }
  return URLifiedString;
}