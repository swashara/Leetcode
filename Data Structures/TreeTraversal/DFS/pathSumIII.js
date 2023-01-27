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
 * @param {number} targetSum
 * @return {number}
 */
const header = require("./header.js");

var pathSum = function (root, targetSum) {
  let count = 0;
  if (!root) {
    return count;
  }
  function traverse(node, sum) {
    if (!node) {
      return;
    }
    sum = sum - node.val;
    if (sum === 0) {
      count++;
    }
    if (node.left) {
      traverse(node.left, sum);
    }
    if (node.right) {
      traverse(node.right, sum);
    }
  }
  function main(node, sum) {
    if (!node) {
      return;
    }
    traverse(node, sum);
    main(node.left, sum);
    main(node.right, sum);
  }
  main(root, targetSum);
  return count;
};
console.log(
  pathSum(
    header.buildTreeLeetCode([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]),
    8
  )
);
