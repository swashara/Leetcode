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
 * @return {string[]}
 */
const header = require("./header.js");

var binaryTreePaths = function (root) {
  let result = [];
  if (!root) {
    return result;
  }
  let visited = [];
  function traverse(node, data) {
    if (!node) {
      return;
    }
    if (node.left === null && node.right === null) {
      data.push(node.val.toString());
      let ans = data.reduce((a, b) => a + "->" + b);
      visited.push(ans);
      data.pop();
      return;
    }
    if (node.left) {
      traverse(node.left, [...data, node.val]);
    }
    if (node.right) {
      traverse(node.right, [...data, node.val]);
    }
  }
  traverse(root, []);
  return visited;
};
console.log(binaryTreePaths(header.buildTreeLeetCode([1, 2, 3, null, 5])));
