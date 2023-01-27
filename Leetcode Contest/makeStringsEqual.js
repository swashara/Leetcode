/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */

var makeStringsEqual = function (s, target) {
  if (s === target) {
    return true;
  }
  return s.includes("1") === target.includes("1");
};
// var makeStringsEqual = function (s, target) {
//   if (s === target) {
//     return true;
//   }
//   let sArr = Array.from(s, Number);

//   for (let i = 0; i < sArr.length; i++) {
//     let duplicateSArr = sArr.slice();
//     for (let j = 0; j < sArr.length; j++) {
//       if (i === j) {
//         continue;
//       }
//       duplicateSArr[i] = duplicateSArr[i] || duplicateSArr[j];
//       duplicateSArr[j] = duplicateSArr[i] ^ duplicateSArr[j];
//       let sStr = duplicateSArr.join("");
//       if (sStr === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

/*
class Solution {
public:
    bool makeStringsEqual(string s, string target) {
        if (s == target) return true; 
        string zero = string(s.size(), '0'); 
        return s != zero && target != zero; 
    }
}; */
let ans = makeStringsEqual("101110100", "110011000");
// let ans = makeStringsEqual("101110100", "110011000");
// let ans = makeStringsEqual("0110", "0110");
console.log(ans);
