function countUniqueValues(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
    console.log(res);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) continue;
      else {
        res.push(arr[j]);
      }
    }
  }
  return res;
}

console.log(countUniqueValues(1, 2, 3, 4, 4, 5, 5));
