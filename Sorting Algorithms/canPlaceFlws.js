var canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length < n) return false;

  for (let i = 1; i < flowerbed.length; i++) {
    if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      n--;
      console.log(n);
    }
  }
  console.log(n);
  if (n <= 0) return true;

  return false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
