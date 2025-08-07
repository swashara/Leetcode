/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  gcd = helper(str1.length, str2.length);
  return str1.substring(0, gcd);
};
const helper = (a, b) => {
  if (a % b === 0) {
    return b;
  } else {
    return helper(b, a % b);
  }
};
let ans = gcdOfStrings("ABCABC", "ABC");
console.log(ans);
