function missingNumber(nums) {
  let n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    n = n ^ nums[i] ^ i;
  }
  return n;
}

let ans = missingNumber([1, 5, 2, 6, 4]); //3
console.log(ans);
