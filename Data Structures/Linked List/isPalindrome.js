class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// By creating a copy of given linkedlist and storing that list in another linkedlist
// var isPalindrome = function (head) {
//   //   create a copy of given list
//   let copy = new ListNode();
//   copy = head;

//   if (!head) return true;

//   //   reverse the copy
//   let prev = null;
//   let curr = copy;
//   while (curr) {
//     let temp = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = temp;
//   }
//   // check both the lists to see if their corresponding values are equal
//   let currCopy = prev;
//   let currOrig = head;
//   while (currCopy && currOrig) {
//     if (currCopy.val !== currOrig.val) {
//       return false;
//     }
//     currCopy = currCopy.next;
//     currOrig = currOrig.next;
//   }
//   return true;
// };

// By creating a copy of given linkedlist and storing that list in an array
var isPalindrome = function (head) {
  //   create a copy of given list
  let copy = [];
  let curr = head;
  while (curr) {
    copy.push(curr.val);
    curr = curr.next;
  }

  let left = 0;
  let right = copy.length - 1;
  while (left <= right) {
    if (copy[left] !== copy[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// Solution with O(1) space complexity
var isPalindrome = function (head) {
  // Find middle
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //     Reverse second half:
  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  let left = head;
  let right = prev;
  //  When the right pointer has reached the middle of the list stop checking
  while (right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }
  return true;
};

console.log(isPalindrome([1, 2, 3, 4]));
