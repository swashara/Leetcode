/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  let stack = [];
  function backtrack(openN, closedN) {
    if (openN === n && closedN === n) {
      res.push(stack.join(""));
      return;
    }
    if (openN < n) {
      stack.push("(");
      backtrack(openN + 1, closedN);
      stack.pop();
    }
    if (closedN < openN) {
      stack.push(")");
      backtrack(openN, closedN + 1);
      stack.pop();
    }
  }
  backtrack(0, 0);
  return res;
};
let ans = generateParenthesis(5);
console.log(ans);
