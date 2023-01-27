/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let stk = [];
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (stk.length >= 1) {
        res = res + s[i];
      }
      stk.push(s[i]);
    } else {
      if (stk.length > 1) {
        res = res + s[i];
      }
      stk.pop();
    }
  }
  return res;
};

// var removeOuterParentheses = function (s) {
//   let res = "";
//   let opened = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(" && opened++ > 0) {
//       res = res + s[i];
//     } else if (s[i] === ")" && opened-- > 1) {
//       res = res + s[i];
//     }
//   }
//   return res;
// };
let s = "(()(()))";
let res = removeOuterParentheses(s);
console.log(res);
