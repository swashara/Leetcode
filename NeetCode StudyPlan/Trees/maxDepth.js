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
 * @return {number}
 */
const header = require("./header.js");

var maxDepth = function (root) {
  let res = 0;
  if (root === null || root === undefined) {
    return res;
  }
  return dfs(root);
};
function dfs(root) {
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  let height = Math.max(left, right);
  return height + 1;
}
console.log();
console.log(maxDepth(header.buildTreeLeetCode([3, 9, 20, null, null, 15, 7])));
