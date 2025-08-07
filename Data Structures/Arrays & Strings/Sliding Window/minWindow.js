/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// var minWindow = function (s, t) {
//   let cnt = {},
//     len = t.length,
//     res = [],
//     min = Infinity;
//   for (let char of t) {
//     cnt[char] = (cnt[char] || 0) + 1;
//   }
//   for (let r = 0, l = 0; r < s.length; r++) {
//     if (cnt[s[r]] > 0) len--;
//     cnt[s[r]]--;
//     while (!len) {
//       if (r - l < min) {
//         min = r - l;
//         res = [l, r];
//       }
//       if (cnt[s[l]] >= 0) len++;
//       cnt[s[l]]++;
//       l++;
//     }
//   }
//   return s.slice(res[0], res[1] + 1);
// };
var minWindow = function (s, t) {
  let hashT = {};
  let tLen = t.length;
  let min = Infinity;
  let res = [];
  let l = 0;
  for (let c of t) {
    hashT[c] = (hashT[c] || 0) + 1;
  }
  for (let r = 0; r < s.length; r++) {
    if (hashT[s[r]] > 0) {
      tLen--;
    }
    hashT[s[r]]--;
    while (!tLen) {
      if (r - l < min) {
        min = r - l;
        res = [l, r];
      }
      if (hashT[s[l]] >= 0) tLen++;
      hashT[s[l]]++;
      l++;
    }
  }
  return s.slice(res[0], res[1] + 1);
};
let ans = minWindow("ADOBECODEBANC", "ABC");
console.log(ans);
