/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let res = [];
  while (matrix.length) {
    let shiftedM = matrix.shift();
    res.push(...shiftedM);
    for (const m of matrix) {
      let val = m.pop();
      if (val !== undefined) res.push(val);
      m.reverse();
    }
    matrix.reverse();
  }
  return res;
};
let ans = spiralOrder([
  [1, 2, 3],
  [4, 6, 0],
  [7, 8, 9],
]);
console.log(ans);
