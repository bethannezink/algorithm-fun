function grep (haystack, needle) {
  let allIndices = [];

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.charAt(i) === needle.charAt(0)) {
      if (haystack.substring(i, needle.length + i) === needle) {
        allIndices.push(i);
      }
    }
  }

  return allIndices;
}

module.exports = { grep };
