/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits.length < 1) {
    return digits;
  }
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i] = digits[i] + 1;
      break;
    } else {
      digits[i] = 0;
    }
  }
  if (digits[0] === 0) digits.unshift(1);
  return digits;
};

// let arr = [4, 3, 2, 1];
let arr = [9, 9];
let res = plusOne(arr);
console.log(res);

//   let lastIndex = digits.length - 1;
//   let sum = digits[lastIndex] + 1;
//   sum = sum.toString();
//   sum = sum.split("");
//   for (let i = 0; i < sum.length; i++) {
//     digits[lastIndex + i] = parseInt(sum[i]);
//   }
