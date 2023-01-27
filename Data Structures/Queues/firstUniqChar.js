/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let str = s.split("");
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      hash[str[i]]++;
    } else {
      hash[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]] === 1) {
      return i;
    }
  }
  return -1;
};
let s = "aabb";
let res = firstUniqChar(s);
console.log(res);
