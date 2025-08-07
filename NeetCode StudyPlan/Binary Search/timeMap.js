var TimeMap = function () {
  this.timeMap = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.timeMap.has(key)) {
    this.timeMap.set(key, []);
  }
  this.timeMap.get(key).push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.timeMap.has(key)) return "";

  let valueTimePairs = this.timeMap.get(key);
  let left = 0;
  let right = valueTimePairs.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let [val, existingTime] = valueTimePairs[mid];
    if (existingTime <= timestamp) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (right === 0) {
    return "";
  }
  return valueTimePairs[right - 1][0];
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
