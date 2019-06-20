const { deleteNode } = require('./deleteNode');

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let a, b, c, d, e;

beforeEach(() => {
  a = new LinkedListNode('A');
  b = new LinkedListNode('B');
  c = new LinkedListNode('C');
  d = new LinkedListNode('D');
  e = new LinkedListNode('E');

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
})

test('node at beginning of list possesses value of following node after deletion', () => {
  deleteNode(a);

  expect(a.value).toBe(b.value);
});

test('node at middle of list possesses value of following node after deletion', () => {
  deleteNode(c);

  expect(c.value).toBe(d.value);
  expect(b.next.value).toBe(d.value);
});

test('throws an error when attempting to delete last node in the list', () => {
  expect(() => deleteNode(e)).toThrowError(new Error('Cannot delete the last node in the list.'));
});