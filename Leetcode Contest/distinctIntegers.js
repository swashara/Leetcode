/**
 * @param {number} n
 * @return {number}
 */
// var distinctIntegers = function (n) {
//   let array1 = [];
//   array1.push(n);
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 1) {
//       array1.push(i);
//     }
//   }
//   array1 = array1.sort();
//   let biggest = array1[array1.length - 1];
//   let array2 = [];
//   for (let ele of array1) {
//     for (let i = 1; i <= biggest; i++) {
//       if (ele % i === 1) {
//         array2.push(i);
//       }
//     }
//   }
//   let array3 = [...new Set([...array1, ...array2])];

//   //   console.log(array1, array2, array3);
//   return array3.length;
// };
// var distinctIntegers = function (n) {
//   let resArr = [];
//   if (n <= 2) return 0;
//   if (n === 3) return 2;
//   for (i = 2; i <= n; i++) {
//     if (n % i === 1) {
//       resArr.push(i);
//     }
//   }
//   console.log(n, resArr);
//   return distinctIntegers(n - 1) + resArr.length;
// };

var distinctIntegers = function (n) {
  if (n === 1) return 1;
  const mySet = new Set();
  const helper = (num) => {
    if (num <= 2) return 0;
    mySet.add(num);
    for (i = 2; i <= num; i++) {
      if (num % i === 1) {
        mySet.add(i);
      }
    }
    return helper(num - 1);
  };
  helper(n);
  let res = mySet.size;
  return res;
};

let ans = distinctIntegers(1);
console.log(ans);
