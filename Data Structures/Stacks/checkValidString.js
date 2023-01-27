/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let stk = [];
  let leftParenStk = [];
  let asteriskStk = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (leftParenStk.length) {
        leftParenStk.pop();
      } else if (asteriskStk.length) {
        asteriskStk.pop();
      } else {
        return false;
      }
    } else if (s[i] === "(") {
      leftParenStk.push(i);
    } else {
      asteriskStk.push(i);
    }
  }
  while (leftParenStk.length > 0 && asteriskStk.length > 0) {
    if (
      leftParenStk[leftParenStk.length - 1] >
      asteriskStk[asteriskStk.length - 1]
    ) {
      return false;
    }
    leftParenStk.pop();
    asteriskStk.pop();
  }
  if (leftParenStk.length > 0) {
    return false;
  }
  return true;
};
let s = "(";
let res = checkValidString(s);
console.log(res);
