class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var swapPairs = function (head) {
  let dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;
  //The condition inside of while is because we want to make sure that there are always two node to swap
  while (curr && curr.next) {
    //   Saving pointers
    let nextPair = curr.next.next;
    let second = curr.next;

    // reverse nodes
    second.next = curr;
    curr.next = nextPair;
    prev.next = second;

    // Update pointers
    prev = curr;
    curr = nextPair;
  }
  return dummy.next;
};

console.log(swapPairs([1, 2, 3, 4]));
