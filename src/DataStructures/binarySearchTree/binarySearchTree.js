class BinarySearchTree {
  constructor () {
    this.root = null;
  }
}

class Node {
  constructor (value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

BinarySearchTree.prototype.push = function (value) {
  const root = this.root;

  if (!root) {
    this.root = new Node(value);
    return;
  }

  let currentNode = root;
  const newNode = new Node(value);

  while (currentNode) {
    if (value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}