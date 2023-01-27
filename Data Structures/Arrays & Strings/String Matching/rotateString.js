/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
// var rotateString = function (s, goal) {
//   if (s === goal) {
//     return true;
//   }
//   let splitS = s.split("");
//   let len = splitS.length;
//   for (let i = 0; i < len; i++) {
//     let shiftedChar = splitS.shift();
//     splitS.push(shiftedChar);
//     let ans = splitS;
//     let printAns = ans.join("");
//     if (printAns === goal) {
//       return true;
//     }
//   }
//   return false;
// };

var rotateString = function (s, goal) {
  if (s === goal) {
    return true;
  }
  for (let char of s) {
    s = s.slice(1) + s.slice(0, 1);
    console.log(s);
    if (s === goal) {
      return true;
    }
  }
  return false;
};
let res = rotateString("abcde", "cdeab");
console.log(res);
