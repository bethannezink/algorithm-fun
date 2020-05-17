// Daily Coding Problem #208
// Given a linked list of numbers and a pivot k, partition the linked list
// so that all nodes less than k come before nodes greater than or equal to k.
// For example, given the linked list 5 -> 1 -> 8 -> 0 -> 3 and k = 3, the
// solution could be 1 -> 0 -> 5 -> 8 -> 3.

function LinkedList() {
	this.head = null;
	this.tail = null;
}

function Node(value, next, previous) {
	this.value = value;
	this.next = next;
	this.previous = previous;
}

LinkedList.prototype.addToHead = function(value) {
	const newNode = new Node(value, this.head, null);

	if (this.head) {
		this.head.prev = newNode;
	} else {
		this.tail = newNode;
	}

	this.head = newNode;
}