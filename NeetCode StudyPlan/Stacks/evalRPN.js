/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    // "/": (a, b) => (a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)),
    "/": (a, b) => (a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)),
  };
  for (let t of tokens) {
    if (ops[t]) {
      let numOne = stack.pop();
      let numTwo = stack.pop();
      let operRes = ops[t](numTwo, numOne);
      stack.push(operRes);
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop();
};
let ans = evalRPN(["4", "13", "5", "/", "+"]);
console.log(ans);
