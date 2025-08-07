function mapPractice(arr) {
  // Array mapping
  let mappedArr = arr.map((x) => {
    return Math.sqrt(x);
  });
  let mappedArr1 = arr.map(Math.sqrt);
  let squaredArr = arr.map((x) => {
    return x * x;
  });
  let squaredArr1 = arr.map((x) => x * x);
  for (let [key, value] of arr.entries()) {
    // console.log(key, value);
  }
  /* ****************************************************************** */
  //   Object
  const entries = new Map([
    ["foo", "bar"],
    ["baz", 42],
  ]);
  let obj = Object.fromEntries(entries);
  //   console.log(Object.keys(obj));
  /* ****************************************************************** */
  // Array filter
  let filteredArr = arr.filter((x) => {
    // if (x % 2 === 0) return x;
    return x % 2 === 0;
  });
  /* ****************************************************************** */
  //   Array reducer
  //   let totalSum = arr.reduce((total, x) => total + x, 0);
  let totalSum = arr.reduce((total, x) => total + x);
  const fruitBasket = [
    "banana",
    "cherry",
    "orange",
    "apple",
    "cherry",
    "orange",
    "apple",
    "banana",
    "cherry",
    "orange",
    "fig",
  ];
  let talliedFruitBasket = fruitBasket.reduce((tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1;
    return tally;
  }, {});
  //   console.log(talliedFruitBasket);
  /************************************************************* */
  function doSomething() {
    console.log(this);
  }

  doSomething();
  //   return totalSum;
}
let mapAns = mapPractice([4, 9, 16, 25]);
console.log(mapAns);
