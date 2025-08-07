/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let hashMap = [];
  let res = 0;
  let largestCount = 0;
  let l = 0;
  for (r = 0; r < s.length; r++) {
    const c = s[r];
    hashMap[c] = (hashMap[c] || 0) + 1;
    largestCount = Math.max(largestCount, hashMap[c]);
    if (r - l + 1 - largestCount > k) {
      hashMap[s[l]] -= 1;
      l = l + 1;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
};
let ans = characterReplacement((s = "ABAA"), (k = 0));
console.log(ans);
