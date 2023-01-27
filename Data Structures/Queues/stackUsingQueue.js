var MyStack = function () {
  this.inQueue = [];
  this.outQueue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.inQueue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.inQueue.length > 1) {
    this.outQueue.push(this.inQueue.shift());
  }
  let res = this.inQueue.shift();
  [this.inQueue, this.outQueue] = [this.outQueue, this.inQueue];
  return res;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.inQueue.length > 1) {
    this.outQueue.push(this.inQueue.shift());
  }
  let res = this.inQueue[0];
  this.outQueue.push(this.inQueue.shift());
  [this.inQueue, this.outQueue] = [this.outQueue, this.inQueue];

  return res;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.inQueue.length ? false : true;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
