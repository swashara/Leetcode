"use strict";
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function (nums) {
//   let maxP = nums[0];
//   let curP = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (curP < 1) {
//       curP = 1;
//     }
//     curP = curP * nums[i];
//     if (curP > maxP) {
//       maxP = curP;
//     }
//   }
//   return maxP;
// };
// var maxProduct = function (nums) {
//   let hashMap = {};
//   let curP = 1;
//   for (let i = 0; i < nums.length; i++) {
//     let maxP = nums[i];
//     curP = 1;
//     for (let j = i; j < nums.length; j++) {
//       curP = curP * nums[j];
//       if (curP > maxP) {
//         hashMap[nums[i]] = curP;
//       } else {
//         hashMap[nums[i]] = maxP;
//       }
//     }
//   }
//   //   maxP = hashMap[nums[0]];
//   let maxP = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     if (hashMap[nums[i]] > maxP) {
//       maxP = hashMap[nums[i]];
//     }
//   }
//   //   console.log(hashMap);
//   return maxP;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = Math.max(...nums);
  let curMax = 1;
  let curMin = 1;
  for (let n of nums) {
    if (n === 0) {
      curMin = 1;
      curMax = 1;
    }
    let temp = n * curMax;
    curMax = Math.max(n * curMax, n * curMin, n);
    curMin = Math.min(temp, n * curMin, n);
    res = Math.max(res, curMax);
  }
  return res;
};
console.log(maxProduct([2, 3, -2, 4]));

//OR

/**
 * @param {Array<number>} nums
 * @return {number}
 */
const maxContiguousSubarraySum = (nums) => {
  /*
      We default to say the the best maximum seen so far is the first
      element.
  
      We also default to say the the best max ending at the first element
      is...the first element.
    */
  var maxSoFar = nums[0];
  var maxEndingHere = nums[0];

  /*
      We will investigate the rest of the items in the array from index
      1 onward.
    */
  for (var i = 1; i < nums.length; i++) {
    /*
        We are inspecting the item at index i.
  
        We want to answer the question:
        "What is the Max Contiguous Subarray Sum we can achieve ending at index i?"
  
        We have 2 choices:
  
        maxEndingHere + nums[i] (extend the previous subarray best whatever it was)
          1.) Let the item we are sitting at contribute to this best max we achieved
          ending at index i - 1.
  
        nums[i] (start and end at this index)
          2.) Just take the item we are sitting at's value.
  
        The max of these 2 choices will be the best answer to the Max Contiguous
        Subarray Sum we can achieve for subarrays ending at index i.
  
        Example:
  
        index     0  1   2  3   4  5  6   7  8
        Input: [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]
                 -2, 1, -2, 4,  3, 5, 6,  1, 5    'maxEndingHere' at each point
        
        The best subarrays we would take if we took them:
          ending at index 0: [ -2 ]           (snippet from index 0 to index 0)
          ending at index 1: [ 1 ]            (snippet from index 1 to index 1) [we just took the item at index 1]
          ending at index 2: [ 1, -3 ]        (snippet from index 1 to index 2)
          ending at index 3: [ 4 ]            (snippet from index 3 to index 3) [we just took the item at index 3]
          ending at index 4: [ 4, -1 ]        (snippet from index 3 to index 4)
          ending at index 5: [ 4, -1, 2 ]     (snippet from index 3 to index 5)
          ending at index 6: [ 4, -1, 2, 1 ]  (snippet from index 3 to index 6)
          ending at index 7: [ 4, -1, 2, 1, -5 ]    (snippet from index 3 to index 7)
          ending at index 8: [ 4, -1, 2, 1, -5, 4 ] (snippet from index 3 to index 8)
  
        Notice how we are changing the end bound by 1 everytime.
      */
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);

    // Did we beat the 'maxSoFar' with the 'maxEndingHere'?
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
};
