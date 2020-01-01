// Write a function that determines whether the left or right branch of the tree is larger.
// The size of each branch is the sum of the node values.
// The function should return the string "Right" if the right side is larger and "Left" if the left side is larger.
// If the tree has 0 nodes or if the size of the branches are equal, return an empty string.

// To Do:
// traverse each branch
// compare totals
// return largest branch
// return '' if equal
// return '' if no nodes

function findLargerBranch (array) {
  let largerBranch = '';
  if (array.length === 0) {
      return largerBranch;
  }

  const leftBranchTotal = getBranchTotal(array, 2);
  const rightBranchTotal = getBranchTotal(array, 3);
  
  if (leftBranchTotal !== rightBranchTotal) {
    largerBranch = leftBranchTotal > rightBranchTotal ? 'Left' : 'Right'
  }

  return largerBranch;
}

function getBranchTotal(array, index) {
  const previousIndex = index - 1;

  if (previousIndex < array.length) {
    if (array[previousIndex] === -1) {
      return 0;
    }
   
    return array[previousIndex] + getBranchTotal(array, index * 2) + getBranchTotal(array, index * 2 + 1);
  }

  return 0;
}

module.exports = { findLargerBranch };
