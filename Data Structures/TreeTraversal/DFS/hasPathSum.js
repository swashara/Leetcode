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
 * @return {boolean}
 */
const header = require("./header.js");

// var hasPathSum = function (root, targetSum) {
//   if (!root) {
//     return false;
//   }
//   let stk = [];
//   stk.push([root, 0]);

//   while (stk.length) {
//     let temp = stk.pop();

//     let node = temp[0];
//     let sum = temp[1];

//     if (
//       node.left === null &&
//       node.right === null &&
//       sum + node.val === targetSum
//     ) {
//       return true;
//     }
//     if (node.right) {
//       stk.push([node.right, sum + node.val]);
//     }
//     if (node.left) {
//       stk.push([node.left, sum + node.val]);
//     }
//   }
//   return false;
// };
var hasPathSum = function (root, targetSum) {
  function helper(node, sum) {
    if (node === null) {
      return null;
    }
    if (
      node.left === null &&
      node.right === null &&
      node.val + sum === targetSum
    ) {
      return true;
    }
    return (
      helper(node.left, sum + node.val) || helper(node.right, sum + node.val)
    );
  }
  return helper(root, 0) || false;
};
console.log(
  hasPathSum(
    header.buildTreeLeetCode([
      5,
      4,
      8,
      11,
      null,
      13,
      4,
      7,
      2,
      null,
      null,
      null,
      1,
    ]),
    22
  )
);
