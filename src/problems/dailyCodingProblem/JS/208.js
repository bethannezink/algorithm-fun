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