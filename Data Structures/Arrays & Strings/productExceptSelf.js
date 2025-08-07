/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let currP = 0;
  let productArr = [];
  let genP = 1;
  let product = 1;
  while (currP < nums.length) {
    if (genP === nums.length) {
      genP = 0;
      currP++;
      productArr.push(product);
    }
    if (currP === genP) {
      continue;
    } else {
      product = product * nums[genP];
      genP++;
    }
  }
  return productArr;
};

const ans = productExceptSelf([1, 2, 3, 4]);
console.log(ans);
