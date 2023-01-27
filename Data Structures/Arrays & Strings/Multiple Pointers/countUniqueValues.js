function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      // arr[i] = arr[j];
      i++;
    }
  }

  return i + 1;
}

let arr = [-1, -1, 0, 1, 2, 3, 4];
let res = countUniqueValues(arr);
console.log(res);
