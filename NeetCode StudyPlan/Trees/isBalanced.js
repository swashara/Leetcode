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
 * @return {boolean}
 */
const header = require("./header.js");

var isBalanced = function (root) {
  function dfs(root) {
    if (root === null || root === undefined) {
      return [true, 0];
    }
    let left = dfs(root.left);
    let right = dfs(root.right);
    let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
    return [balanced, Math.max(left[1], right[1]) + 1];
  }

  return dfs(root)[0];
};
console.log(
  isBalanced(header.buildTreeLeetCode([3, 9, 20, null, null, 15, null]))
);
