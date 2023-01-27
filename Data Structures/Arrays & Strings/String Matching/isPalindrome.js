/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   let xArr = Array.from(String(x), Number);
//   let left = 0;
//   let right = xArr.length - 1;
//   while (left <= right) {
//     if (xArr[left] !== xArr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// };
var isPalindrome = function (x) {
  let copy = x;
  let reverse = 0;
  while (copy > 0) {
    const digit = copy % 10;
    copy = Math.floor(copy / 10);
    reverse = reverse * 10 + digit;
  }
  return reverse === x;
};
let ans = isPalindrome(-121);
console.log(ans);
