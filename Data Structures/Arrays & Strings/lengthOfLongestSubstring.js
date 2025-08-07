/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s === "") {
    return 0;
  }
  let resStr = "";
  let resArr = [];
  for (let c of s) {
    if (resStr.includes(c)) {
      // resArr.push(resStr);
      resStr = "";
    } else {
      resStr += c;
    }
    resArr.push(resStr);
  }
  resArr.sort(function (a, b) {
    return b.length - a.length;
  });
  return resArr[0].length;
};

let ans = lengthOfLongestSubstring("pwwkew");
console.log(ans);
