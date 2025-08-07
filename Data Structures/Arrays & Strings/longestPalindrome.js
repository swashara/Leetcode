/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let subS = "";
  let longestPS = "";
  for (let i = 0; i < s.length; i++) {
    subS += s[i];
    let checkP = subS.split("").reverse().join("");
    if (subS.length > 1 && subS === checkP) {
      if (subS.length > longestPS.length) longestPS = subS;
    }
  }
  return longestPS;
};

const ans = longestPalindrome("cbbd");
console.log(ans);
