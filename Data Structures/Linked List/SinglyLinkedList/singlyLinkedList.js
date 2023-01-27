class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return;
    let current = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    if (index === 0) return this.head;
    while (current.next) {
      counter++;
      current = current.next;
      if (counter === index) {
        return current;
      }
    }
    return;
  }
  set(index, val) {
    let current = this.get(index);
    if (!current) return false;
    current.val = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      let res = this.push(val);
      if (res) return true;
      else false;
    }

    if (index === 0) {
      let res = this.unShift(val);
      if (res) return true;
      else false;
    }
    var newNode = new Node(val);
    let prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length - 1) {
      let res = this.pop(val);
      if (res) return true;
      else false;
    }

    if (index === 0) {
      let res = this.shift(val);
      if (res) return true;
      else false;
    }
    let prev = this.get(index - 1);
    var temp = this.get(index + 1);
    prev.next = temp;
    this.length--;
    return true;
  }
  reverse() {
    if (!this.length) return;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next;
    for (var i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.reverse();
console.log(list);
