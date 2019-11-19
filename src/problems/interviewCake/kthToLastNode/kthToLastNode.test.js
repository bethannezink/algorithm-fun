const { kthToLastNode } = require('./kthToLastNode');

// To Do: update using linkedlist class in /dataStructures
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode('Chocolate');
const e = new LinkedListNode('Boston Cream Pie');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

test('', () => {
  expect(kthToLastNode(2, a).value).toBe('Chocolate');
});

test('', () => {
  expect(kthToLastNode(4, a).value).toBe('Angel Food');
});