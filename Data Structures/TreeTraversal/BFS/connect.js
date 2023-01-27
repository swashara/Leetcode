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
// var connect = function (root) {
//   if (root == null) return root;
//   let queue = [root];
//   while (queue.length != 0) {
//     let next = [];
//     while (queue.length != 0) {
//       let node = queue.shift();
//       node.next = queue[0] || null;
//       if (node.left != null) {
//         next.push(node.left);
//         next.push(node.right);
//       }
//     }
//     queue = next;
//   }
//   return root;
// };

var connect = function (root) {
  let curr = root;
  let nxt = curr ? curr.left : null;
  while (curr && nxt) {
    curr.left.next = curr.right;
    if (curr.next) {
      curr.right.next = curr.next.left;
    }
    curr = curr.next;
    if (!curr) {
      curr = nxt;
      nxt = curr.left;
    }
  }
  return root;
};
console.log(connect(header.buildTreeLeetCode([1, 2, 3, 4, 5, 6, 7])));
// console.log(connect(header.buildTreeLeetCode([])));
