//Given a linked list, swap every two adjacent nodes and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    var out = new ListNode(0);
    var now = out;

    out.next = head;

    while (now.next && now.next.next) {
        now = swap(now, now.next, now.next.next);
    }

    return out.next;
};

var swap = function (a, b, c) {
    a.next = c;
    b.next = c.next;
    c.next = b;
    return b;
};
