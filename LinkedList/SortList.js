//Node class
class Node {
    constructor(elm, next = null) {
        this.element = elm;
        this.next = next;
    }

    add(element) {
        var node = new Node(element);
        var current;
        if (this.head == null) this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
}

//Main function
let insertionSort = (head) => {
    let res = null, curr = head, next;
    while (curr !== null) {
        next = curr.next;
        res = sortList(res, curr);
        curr = next;
    }
    return res;
};

let sortList = (sorted, newNode) => {
    //Temporary node to swap the elements
    let temp = new Node();
    let current = temp;
    temp.next = sorted;

    //Sort the list based on the specified order
    while (current.next !== null && current.next.element < newNode.element) {
        current = current.next;
    }

    //Swap the elements
    newNode.next = current.next;
    current.next = newNode;

    //Return the sorted list.
    return temp.next;
};

let ll = new Node();
ll.add(10)
ll.add(3)
ll.add(6)
ll.add(2)

//Sort the list
let sorted = insertionSort(ll.head);

//Print the sorted list
while (sorted !== null) {
    console.log(sorted.element);
    sorted = sorted.next;
}
