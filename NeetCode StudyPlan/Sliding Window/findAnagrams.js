/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let res = [];
  let hash = {};
  let l = 0;
  let r = 0;
  for (let c of p) {
    hash[c] = (hash[c] || 0) + 1;
  }
  while (r < s.length) {
    if (hash[s[r]] > 0) {
      hash[s[r]]--;
      if (r - l + 1 === p.length) res.push(l);
      r++;
    } else {
      if (hash[s[l]] !== undefined) hash[s[l]]++;
      l++;
      if (l > r) r = l;
    }
  }
  return res;
};
let ans = findAnagrams((s = "cbaebabacd"), (p = "abc"));
console.log(ans);
