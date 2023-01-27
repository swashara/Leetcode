// function selectionSort(arr) {
//   let min = 0;
//   let pos = 0;
//   for (let i = 0; i < arr.length; i++) {
//     min = arr[i];
//     pos = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < min) {
//         min = arr[j];
//         pos = j;
//       }
//     }
//     let temp = arr[i];
//     arr[i] = min;
//     arr[pos] = temp;
//   }
//   return arr;
// }

// console.log(selectionSort([5, 7, 8, 3, 4, 1, 2]));

function selectionSort(arr) {
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
        arr[min] = arr[j];
      }
    }
    if (i !== min) {
      //This check is to OPTIMIZE
      console.log(i, min);
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([0, 2, 10, 17, 19, 22, 34]));
