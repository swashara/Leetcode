class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    let flag = true;
    while (flag) {
      if (val === currentNode.val) return undefined;
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else if (val > currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (val < currentNode) {
        currentNode = currentNode.left;
      } else if (val > currentNode) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }
  bfs() {
    if (!this.root) {
      return undefined;
    }
    let queue = [];
    let currentNode = this.root;
    queue.push(currentNode);
    let visited = [];
    while (queue.length) {
      currentNode = queue.shift();
      visited.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return visited;
  }
  dfsPreOrder() {
    let visited = [];
    let currentNode = this.root;
    function traverse(node) {
      visited.push(node.val);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(currentNode);
    return visited;
  }
  dfsPostOrder() {
    let visited = [];
    let currentNode = this.root;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      visited.push(node.val);
    }
    traverse(currentNode);
    return visited;
  }
  dfsInOrder() {
    let visited = [];
    let currentNode = this.root;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      visited.push(node.val);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(currentNode);
    return visited;
  }
}
let bst = new BST();
bst.root = new Node(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst);
// console.log(bst.bfs());
// console.log(bst.dfsPreOrder());
console.log(bst.dfsInOrder());
