function hasDuplicates(arr) {
  let obj = {};
  for (i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) return true;
    else obj[arr[i]] = true;
  }
  return false;
}
console.log(hasDuplicates([1, 2, 3, 2]));
console.log(hasDuplicates(-1, -2, -3, -4, 4, 5, 6));
