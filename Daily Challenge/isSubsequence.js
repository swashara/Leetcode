/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let idx = -1;
  for (let c of s) {
    let found = t.indexOf(c, idx + 1);
    if (found === -1) {
      return false;
    }
    idx = found;
  }
  return true;
};

let ans = isSubsequence((s = "abb"), (t = "ahbgdc"));
console.log(ans);
