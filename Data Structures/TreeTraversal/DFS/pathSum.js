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
 * @return {number[][]}
 */
const header = require("./header.js");

// var pathSum = function (root, targetSum) {
//   let result = [];
//   if (root === []) {
//     return result;
//   }
//   function helper(node, data) {
//     if (node === null) {
//       return;
//     }
//     if (node.left === null && node.right === null) {
//       if (node.val + data[1] === targetSum) {
//         result.push([...data[0], node.val]);
//       }
//     } else {
//       helper(node.left, [[...data[0], node.val], node.val + data[1]]);
//       helper(node.right, [[...data[0], node.val], node.val + data[1]]);
//     }
//     data.pop();
//   }
//   helper(root, [[], 0]);
//   return result;
// };
var pathSum = function (root, targetSum) {
  let result = [];
  if (!root) {
    return result;
  }
  let visited = [];
  function traverse(node) {
    visited.push(node.val);
    if (node.left === null && node.right === null) {
      let leafSum = [...visited].reduce((a, b) => a + b);
      if (leafSum === targetSum) {
        result.push([...visited]);
      }
    }
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
    visited.pop();
  }
  traverse(root);
  return result;
};
console.log(
  pathSum(
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
      5,
      1,
    ]),
    22
  )
);
