class LinkedList {
  constructor () {
    this.head = null;
  }
}

class Node {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = { LinkedList, Node };