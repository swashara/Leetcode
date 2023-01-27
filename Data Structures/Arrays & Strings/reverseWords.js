/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let sArr = s.trim().split(" ");
  console.log(sArr);
  let resArr = [];
  for (let i = sArr.length - 1; i >= 0; i--) {
    if (sArr[i] !== "") resArr.push(sArr[i]);
  }
  let resStr = resArr.join(" ");
  return resStr;
};
let ans = reverseWords("a good   example");
console.log(ans);
