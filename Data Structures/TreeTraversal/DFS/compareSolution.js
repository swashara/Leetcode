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
var pathSum = function (root, targetSum) {
  const result = [];

  if (!root) return result;

  const helper = (root, data) => {
    if (root == null) return;

    if (root.left == null && root.right == null) {
      if (data[1] + root.val == targetSum) {
        result.push([...data[0], root.val]); //copy is O(N)
      }
      data = null;
      return;
    }

    helper(root.left, [[...data[0], root.val], data[1] + root.val]);
    helper(root.right, [[...data[0], root.val], data[1] + root.val]);
  };

  //Second argument is for Sum
  helper(root, [[], 0]);

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
