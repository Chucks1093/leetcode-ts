# Add two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**

![image](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

**Example 2:**
```
Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

**Constraints:**

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.


Certainly! Here's an explanation of the provided TypeScript code in markdown:


## Explanation of the Linked List and Addition Algorithm

The given TypeScript code defines a class called `ListNode` and a function called `addTwoNumbers`. This code is typically used to add two numbers represented as linked lists. Let's break it down step by step:

### `ListNode` Class

- The `ListNode` class is used to create nodes for a singly linked list. Each node has two properties: `val`, which stores a numeric value, and `next`, which points to the next node in the list. The constructor allows you to create a new node with an initial value and an optional reference to the next node.

### `addTwoNumbers` Function

- The `addTwoNumbers` function takes two linked lists (`l1` and `l2`) and an optional `carry` value (default is 0) as input.

- It initializes a dummy head node for the result list. The `current` variable is used to keep track of the current node in the result list, starting with the dummy head.

- Inside a `while` loop, it processes each digit of the numbers and performs addition, considering the current digits of `l1`, `l2`, and the carry from the previous step.

- It calculates the sum of current digits and the carry, updates the carry for the next iteration, and creates a new node with the digit value (sum % 10). This node is appended to the result list.

- It moves to the next nodes in both input lists (`l1` and `l2`) if they exist.

- The loop continues until there are no more digits to add, and the result is returned as a linked list, excluding the dummy head.


The Big O notation for the provided code that adds two numbers represented as linked lists is `O(max(N, M))`, where N is the length of the first linked list `l1`, and M is the length of the second linked list `l2`.