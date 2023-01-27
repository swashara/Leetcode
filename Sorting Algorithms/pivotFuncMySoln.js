// function pivotFunc(arr) {
//   let pivot = arr[0];
//   let pivotIndex = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       let temp = arr[pivotIndex];
//       arr[pivotIndex] = arr[i];
//       arr[i] = temp;
//       arr[pivotIndex] = arr[i];

//       pivotIndex++;
//     }
//   }
//   return arr;
// }

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function pivotFunc(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      console.log(`${arr}---->swap ${arr[swapIndex]} and ${arr[i]}`);

      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  console.log(`${arr}---->pivot=${pivot}--->pivotIndex=${swapIndex}`);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  let pivotIdx = pivotFunc(arr, left, right);
  // console.log(pivotIdx, left, right);
  if (left < right) {
    // console.log(
    //   "Before 1st call to recursive quickSort():arr" +
    //     arr +
    //     "   left=" +
    //     left +
    //     "   right=" +
    //     right
    // );
    quickSort(arr, left, pivotIdx - 1);

    // console.log(
    //   "Before second call to recursive quickSort():arr" +
    //     arr +
    //     "   left=" +
    //     left +
    //     "   right=" +
    //     right
    // );
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}
quickSort([10, 19, 1, 12, 16, 2]);
