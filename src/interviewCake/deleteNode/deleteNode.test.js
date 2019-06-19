const { deleteNode } = require('./deleteNode');

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let a, b, c;

beforeEach(() => {
  a = new LinkedListNode('A');
  b = new LinkedListNode('B');
  c = new LinkedListNode('C');

  a.next = b;
  b.next = c;
})

// To Do: add tests for beginning, middle, end placement
test('linked list no longer points to node after deletion', () => {
  deleteNode(b);

  expect(a.next.value).toBe(c.value);
});