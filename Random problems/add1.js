// function addUpTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

let n = 5;
const total = addUpTo(10000000);
console.log(total);
