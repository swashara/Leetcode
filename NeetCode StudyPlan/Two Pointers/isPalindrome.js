/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let revS = s
    .replace(/[^0-9a-z]/gi, "")
    .trim()
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  s = s
    .replace(/[^0-9a-z]/gi, "")
    .trim()
    .toLowerCase();
  if (s === revS) return true;
  else return false;
};

let ans = isPalindrome("ab_a");
console.log(ans);
