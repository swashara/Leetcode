function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}
let numArr = [1, 2, 3, 4];
console.log(linearSearch(numArr, 3));
