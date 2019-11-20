const { kthToLastNode } = require('./kthToLastNode');
const { LinkedList, Node } = require('../../../dataStructures/linkedList/linkedList.js');

const linkedList = new LinkedList();
const a = new Node('Angel Food');
const b = new Node('Bundt');
const c = new Node('Cheese');
const d = new Node('Chocolate');
const e = new Node('Boston Cream Pie');

linkedList.head = a;
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