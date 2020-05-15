function findContiguousAddendsOfK(array, K) {
  let contiguousSums = {};
  let sum = 0;
  contiguousSums[0] = -1;

  for (const [lastIndex, num] of Object.entries(array)) {
    sum += num;
    contiguousSums[sum] = lastIndex;

    const firstIndex = contiguousSums[sum - K];
    if (typeof firstIndex !== 'undefined') {
      const start = parseInt(firstIndex, 10) + 1;
      const end = parseInt(lastIndex, 10) + 1;
      return array.slice(start, end);
    }
  }

  return [];
}

module.exports = { findContiguousAddendsOfK };
