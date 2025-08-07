// map()
let arr = [1, 2, 3];
const mappedArr = arr.map((el) => el * 2);
console.log(mappedArr, arr);

// filter()
const filteredArr = arr.filter((el) => el % 2 === 0);
console.log(filteredArr);

// reduce
const reducedArr = arr.reduce((total, item) => total + item, 0);
console.log(reducedArr);
