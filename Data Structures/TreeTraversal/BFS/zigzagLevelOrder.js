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
 * @return {number[][]}
 */
const header = require("./header.js");

var zigzagLevelOrder = function (root) {
  let queue = [root];
  let visited = [];
  let level = 0;

  while (queue[0]) {
    let qLen = queue.length;
    let row = [];
    for (let i = 0; i < qLen; i++) {
      let currentNode = queue.shift();
      if (level % 2 === 0) {
        row.push(currentNode.val);
      } else {
        row.unshift(currentNode.val);
      }
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    visited.push(row);
    level++;
  }
  return visited;
};
console.log(zigzagLevelOrder(header.buildTreeLeetCode([1, 2, 3, 4, 5])));
