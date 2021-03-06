//Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    var head = new ListNode(0);
    var now = head;
    var p1 = l1;
    var p2 = l2;
    while (p1 || p2) {
        if (p1 === null || (p2 !== null && p2.val < p1.val)) {
            now.next = p2;
            p2 = p2.next;
        } else {
            now.next = p1;
            p1 = p1.next;
        }
        now = now.next;
    }
    return head.next;
};
