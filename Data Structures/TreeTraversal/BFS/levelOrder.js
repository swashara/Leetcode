const header = require("./header.js");
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === undefined) {
    return root;
  }
  let queue = [root];
  let visited = [];
  while (queue[0]) {
    // The above line is tricky! It doesn't work if you replace it with queue.length. Watch out...
    let row = [];
    let qlen = queue.length; // This is tricky! Watch out...
    for (let i = 0; i < qlen; i++) {
      let currentNode = queue.shift();
      row.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    visited.push(row);
  }
  return visited;
};

console.log(
  levelOrder(header.buildTreeLeetCode([3, 9, 20, null, null, 15, 7]))
);
