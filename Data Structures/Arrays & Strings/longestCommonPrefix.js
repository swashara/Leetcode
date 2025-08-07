/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs = strs.sort((a, b) => a.length - b.length);
  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (s[i] !== strs[0][i]) return s.slice(0, i);
    }
  }
  return strs[0];
};
const ans = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(ans);
