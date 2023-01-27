// function mergeArays(arr1, arr2) {
//   var result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] < arr2[j]) {
//         result.push(arr1[i]);
//       } else {
//         result.push(arr2[j]);
//       }
//     }
//   }
//   return result;
// }
// console.log(mergeArays([3, 2, 5], [0, 4, 6]));

function mergeArays(arr1, arr2) {
  var result = [];
  let i = 0;
  let j = 0;
  while (arr1.length > i && arr2.length > j) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      console.log(result);
      i++;
    } else {
      result.push(arr2[j]);
      console.log(result);
      j++;
    }
  }
  while (arr1.length > i) {
    result.push(arr1[i]);
    i++;
  }
  while (arr2.length > j) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  let sortedArray = [];
  if (arr.length <= 1) return;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  sortedArray = mergeArays(left, right);
  return sortedArray;
}
console.log(mergeArays([3, 2, 5], [0, 4, 6]));
