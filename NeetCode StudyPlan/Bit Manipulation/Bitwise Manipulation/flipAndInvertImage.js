/**
 * @param {number[][]} image
 * @return {number[][]}
 */
// var flipAndInvertImage = function (image) {
//   let res = [];
//   for (let row of image) {
//     let resRow = [];
//     for (let j = row.length - 1; j >= 0; j--) {
//       if (row[j]) {
//         resRow.push(0);
//       } else {
//         resRow.push(1);
//       }
//     }
//     res.push(resRow);
//   }
//   return res;
// };
var flipAndInvertImage = function (image) {
  for (let row in image) {
    image[row] = image[row].reverse();
    image[row] = image[row].map((x) => 1 - x);
  }
  return image;
};
let ans = flipAndInvertImage([
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
]);
console.log(ans);
