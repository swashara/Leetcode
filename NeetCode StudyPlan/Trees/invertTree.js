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
 * @return {TreeNode}
 */
const header = require("./header.js");

var invertTree = function (root) {
  if (root === undefined) {
    return root;
  }
  invertTree(root.left);
  invertTree(root.right);
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
};

console.log(invertTree(header.buildTreeLeetCode([2, 1, 3])));
