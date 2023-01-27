class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return;
    }
    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      poppedNode.next = null;
      this.tail = poppedNode.prev;
      poppedNode.prev = null;
    }
    this.length--;

    return this;
  }
  shift() {
    if (!this.head) {
      return;
    }
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }
    this.length--;

    return oldHead;
  }
}

let list = new DoublyLinkedList();
list.push(8);
console.log(list);
list.push(10);
list.push(12);
console.log(list);
list.shift();
console.log(list);
