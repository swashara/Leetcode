// function insertionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         console.log("**************before swapping************");
//         console.log(arr);
//         console.log(arr[min], arr[j]);
//         let temp = arr[j];
//         arr[j] = arr[min];
//         arr[min] = temp;
//         console.log("**************after swapping************");
//         console.log(arr);
//       }
//     }
//   }
//   return arr;
// }
// console.log(insertionSort([5, 3, 4, 1, 2, 7, 0]));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    // console.log(arr);
  }
  return arr;
}

console.log(insertionSort([5, 3, 4, 1, 2, 7, 0]));
