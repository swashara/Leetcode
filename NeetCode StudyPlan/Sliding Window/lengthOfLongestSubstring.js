/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s === "") {
    return 0;
  }
  let l = 0;
  let res = 0;
  let uniqueSubstrings = new Set();
  for (let r = 0; r < s.length; r++) {
    while (uniqueSubstrings.has(s[r])) {
      uniqueSubstrings.delete(s[l]);
      l++;
    }
    uniqueSubstrings.add(s[r]);
    res = Math.max(res, r - l + 1);
  }
  return res;
};
let ans = lengthOfLongestSubstring((s = "abcabcbb"));
console.log(ans);
