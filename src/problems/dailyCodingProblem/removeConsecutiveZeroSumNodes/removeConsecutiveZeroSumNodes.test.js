// Given a linked list, remove all consecutive nodes that sum to zero.
// Print out the remaining nodes.

// For example, suppose you are given the input 3 -> 4 -> -7 -> 5 -> -6 -> 6.
// In this case, you should first remove 3 -> 4 -> -7, then -6 -> 6, leaving only 5.

// iterate through the list 
//  
// when you get to a negative number, check the consecutive values before and after the - number to see if we can remove
// is <, keep going
// if >, stop, go back
// if =, cancel out function
// print out all values starting from head
function removeConsecutiveZeroSumNodes (head) {
  let currentNode = head;

  while (currentNode.next) {
    if (currentNode.value >= 0) {

    }

    currentNode = currentNode.next;
  }

}