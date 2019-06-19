// Delete a node from a singly-linked list, given only a variable pointing to that node.
// The input could, for example, be the variable b below:

//   class LinkedListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// const a = new LinkedListNode('A');
// const b = new LinkedListNode('B');
// const c = new LinkedListNode('C');

// a.next = b;
// b.next = c;

// deleteNode(b);

function deleteNode(node) {
  const nextNode = node.next;

  // because we don't have access to list,
  // modify node to match the next node and delete the next node instead
  if (nextNode) {
    node.value = nextNode.value;
    node.next = nextNode.next;

    nextNode.next = null;
  } else {
    node = null;
  }
}

module.exports = { deleteNode };