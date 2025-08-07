/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let len = p.length;
  let res = [];
  p = p.split("").sort().join("");
  for (let i = 0; i < s.length; i++) {
    if (s[i + len - 1]) {
      let word = s
        .slice(i, i + len)
        .split("")
        .sort()
        .join("");
      if (word === p) {
        res.push(i);
      }
    }
  }
  return res;
};
let ans = findAnagrams("cbaebabacd", "abc");
console.log(ans);
