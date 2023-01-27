/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let stk = [];
  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") stk.push(char);
    else if (char === ")" && stk.length !== 0 && stk[stk.length - 1] === "(") {
      stk.pop();
    } else if (
      char === "]" &&
      stk.length !== 0 &&
      stk[stk.length - 1] === "["
    ) {
      stk.pop();
    } else if (
      char === "}" &&
      stk.length !== 0 &&
      stk[stk.length - 1] === "{"
    ) {
      stk.pop();
    } else {
      return false;
    }
  }
  if (stk.length === 0) return true;
  else return false;
};
console.log(isValid("([])"));
