const header = require("./header.js");
var sumNumbers = function (root) {
  let result = 0;
  if (!root) {
    return result;
  }
  let visited = [];
  function traverse(node, data) {
    if (!node) {
      return;
    }
    if (node.left === null && node.right === null) {
      data.push(node.val);
      let ans = +data.join("");
      visited.push(ans);
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
  result = visited.reduce((partialSum, a) => partialSum + a, 0);
  return result;
};
console.log(
  sumNumbers(
    header.buildTreeLeetCode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1])
  )
);
