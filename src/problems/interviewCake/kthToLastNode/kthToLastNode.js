function kthToLastNode (k, head) {
  // To Do: handle edge cases (ex: k is greater than # of nodes, k = 0, k = 1)
  let counter = 0;
  let nodeTracker = [];
  let node = head;

  while (node.next) {
    nodeTracker.push(node);
    node = node.next;
    counter++;
  }

  nodeTracker.push(node.next);

  if (counter < k) {
    return false;
  } else if (counter === k) {
    return nodeTracker[0];
  }

  return nodeTracker[counter - k + 1];
}

module.exports = { kthToLastNode };
