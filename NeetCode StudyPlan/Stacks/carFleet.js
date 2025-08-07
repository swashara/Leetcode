/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  let pair = [];
  for (let i = 0; i < position.length; i++) {
    pair.push([position[i], speed[i]]);
  }
  pair = pair.sort((a, b) => b[0] - a[0]);
  let stack = [];
  for (let car of pair) {
    let timeToDest = (target - car[0]) / car[1];
    stack.push(timeToDest);
    const stackLength = stack.length;
    if (stack.length >= 2 && stack[stackLength - 1] <= stack[stackLength - 2]) {
      stack.pop(); //if cars collide remove the car whose starting position is less. (i.e last pushed car)
    }
  }
  console.log(stack);
  return stack.length;
};
let ans = carFleet(
  (target = 12),
  (position = [10, 8, 0, 5, 3]),
  (speed = [2, 4, 1, 1, 3])
);
console.log(ans);
