function binarySearch(arr, item) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (item === arr[middle]) return middle;
    else if (item < arr[middle]) right = middle - 1;
    else if (item > arr[middle]) left = middle + 1;
  }
  return -1;
}

let exArr = [1, 2, 3, 4, 5];
console.log(binarySearch(exArr, 6));
