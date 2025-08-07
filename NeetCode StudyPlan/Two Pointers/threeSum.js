var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let triplet = [];
  for (i = 0; i < nums.length; i++) {
    let a = nums[i];
    if (a > 0) break;
    if (i > 0 && a === nums[i - 1]) continue;
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = a + nums[l] + nums[r];
      if (sum === 0) {
        triplet.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
        while (nums[l] === nums[l - 1] && l < r) l++;
      } else if (sum > 0) {
        r--;
      } else {
        l++;
      }
    }
  }
  return triplet;
};
let ans = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(ans);
