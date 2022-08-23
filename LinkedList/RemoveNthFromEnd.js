//Given a linked list, remove the n-th node from the end of list and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    var h = new ListNode(0);
    var ll = h;
    var rr = h;

    h.next = head;

    for (var i = 0; i < n + 1; i++) {
        rr = rr.next;
    }

    while (rr !== null) {
        ll = ll.next;
        rr = rr.next;
    }

    ll.next = ll.next.next;

    return h.next;
};
