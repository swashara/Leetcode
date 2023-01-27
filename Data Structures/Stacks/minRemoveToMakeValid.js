/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let stk = [];
  let splittedStr = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stk.push(i);
    } else if (s[i] === ")") {
      if (stk.length === 0) {
        splittedStr[i] = "";
      } else {
        stk.pop();
      }
    }
  }
  for (let i = 0; i < stk.length; i++) {
    splittedStr[stk[i]] = "";
  }
  return splittedStr.join("");
};
let s = "))((";
let res = minRemoveToMakeValid(s);
console.log(res);
