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
  //   find(val) {
  //     if (!this.root) {
  //       return false;
  //     }
  //     let currentNode = this.root;
  //     let flag = true;
  //     while (flag) {
  //       if (val === currentNode.val) return true;
  //       if (val < currentNode.val) {
  //         if (currentNode.left === null) {
  //           return false;
  //         } else {
  //           currentNode = currentNode.left;
  //         }
  //       } else if (val > currentNode.val) {
  //         if (currentNode.right === null) {
  //           return false;
  //         } else {
  //           currentNode = currentNode.right;
  //         }
  //       }
  //     }
  //   }
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
}
let bst = new BST();
bst.root = new Node(80);
bst.insert(60);
bst.insert(70);
// console.log(bst);
console.log(bst.find(90));
