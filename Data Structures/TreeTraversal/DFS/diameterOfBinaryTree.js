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

// var diameterOfBinaryTree = function (root) {
//   let maxLength = 0;
//   if (!root) {
//     return maxLength;
//   }
//   function traverse(node) {
//     if (!node) {
//       return 0;
//     }
//     let leftLength = traverse(node.left);
//     let rightLength = traverse(node.right);
//     maxLength = Math.max(maxLength, leftLength + rightLength);
//     return Math.max(leftLength, rightLength);
//   }
//   traverse(root, 0);
//   return maxLength;
// };
function diameterOfBinaryTree(root) {
  let max = 0;

  function maxDepth(root) {
    if (!root) return 0; // if our root(num) is null then there is no path. return 0/null
    let left = maxDepth(root.left); // Assign the left  of tree to LEFT; this will be easier to call it instead of writing "maxDepth(root.left)" each time
    let right = maxDepth(root.right); //Same above

    max = Math.max(max, left + right); //if the path doesn't go through the root we just get the max of them
    return Math.max(left, right) + 1; // the path goes through the root so we add 1(for the root)
  }
  //since we don't know if the path will go through the root or not we will have to get the max between(path that visits the root, or the path that doesn't go through the root.)
  maxDepth(root);
  return max;
}
console.log(diameterOfBinaryTree(header.buildTreeLeetCode([1, 2, 3, 4, 5])));
