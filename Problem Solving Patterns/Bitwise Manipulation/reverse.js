/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//   let min = -Math.pow(2, 31);
//   let max = Math.pow(2, 31) - 1;

//   let isNegative = false;
//   if (x < 0) {
//     isNegative = true;
//     x = Math.abs(x);
//   }
//   let n = Array.from(String(x), Number);
//   let reversedNumArr = [];
//   for (let i = n.length - 1; i >= 0; i--) {
//     reversedNumArr.push(n[i]);
//   }
//   let reversedNum = reversedNumArr.join("");
//   if (isNegative) {
//     reversedNum = -reversedNum;
//   } else {
//     reversedNum = reversedNum;
//   }
//   if (reversedNum > min && reversedNum < max) {
//     return reversedNum;
//   } else {
//     return 0;
//   }
// };
// var reverse = function (x) {
//   let min = -Math.pow(2, 31);
//   let max = Math.pow(2, 31) - 1;
//   let res = 0;
//   while (x) {
//     let digit = x % 10;
//     x = Math.floor(x / 10);
//     if (
//       res > Math.floor(max / 10) ||
//       (res === Math.floor(max / 10) && digit >= max % 10)
//     ) {
//       return 0;
//     }
//     if (
//       res < Math.floor(min / 10) ||
//       (res === Math.floor(min / 10) && digit <= min % 10)
//     ) {
//       return 0;
//     }
//     res = res * 10 + digit;
//   }
//   return res;
// };

var reverse = function (x) {
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
  }
  let min = -Math.pow(2, 31);
  let max = Math.pow(2, 31) - 1;
  let res = 0;
  x = Math.abs(x);
  while (x) {
    let digit = x % 10;
    x = Math.floor(x / 10);
    res = res * 10 + digit;
  }
  if (isNegative) {
    res = -res;
    if (res > min) {
      return res;
    } else {
      return 0;
    }
  } else {
    if (res < max) {
      return res;
    } else {
      return 0;
    }
  }
};

let ans = reverse(-2147483648);
console.log(ans);
