function reverseString(string) {
  if (string.length === 0) {
    return string;
  }

  const lastChar = string.charAt(string.length - 1);
  const remainingString = string.slice(0, -1);

  return lastChar + reverseString(remainingString);
}

module.exports = { reverseString };
