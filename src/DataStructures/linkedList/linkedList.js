class LinkedList {
  constructor () {
    this.head = null;
  }
}

class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
}

module.exports = { LinkedList, Node };