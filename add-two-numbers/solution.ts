class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
};

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry: number = 0): ListNode | null {
    // Initialize the dummy head of the result list.
    const dummyHead: ListNode = new ListNode();
    let current: ListNode | null = dummyHead;

    while (l1 || l2 || carry) {
        // Calculate the sum of current digits and carry.
        const sum: number = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

        // Update the carry for the next iteration.
        carry = Math.floor(sum / 10);

        // Create a new node with the digit value and append it to the result list.
        current.next = new ListNode(sum % 10);
        current = current.next;

        // Move to the next nodes in both input lists if they exist.
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next;
};
