/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const header = require("./header.js");

var rightSideView = function (root) {
  let queue = [root];
  let visited = [];
  while (queue.length) {
    let qLen = queue.length;
    let rightSide;
    for (let i = 0; i < qLen; i++) {
      let node = queue.shift();
      if (node) {
        rightSide = node;
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (rightSide) {
      visited.push(rightSide.val);
    }
  }
  return visited;
};

console.log(rightSideView(header.buildTreeLeetCode([1, null, 3])));
