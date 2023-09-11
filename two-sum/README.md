# **Two Sum**

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.


You can return the answer in any order.

Example 1:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Constraints:**
- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists.

**Follow-up**: Can you come up with an algorithm that is less than O(n2) time complexity?



Certainly! Here's the explanation of the code in markdown format to make it more understandable:


### Understanding the `twoSum` Function

The `twoSum` function is designed to find a pair of numbers in an array (`nums`) whose sum equals a given target number (`target`). Let's break down how it works:

1. **Initialization:**
   ```javascript
   let tmp = new Map();
   ```
   - We start by creating an empty Map called `tmp`. A Map is like a collection where we can store key-value pairs.

2. **Loop Through the Array:**
   ```javascript
   for (let i = 0; i < nums.length; ++i) {
   ```
   - Next, we enter a loop that goes through each element in the `nums` array one by one.

3. **Check for Complement:**
   ```javascript
   if (tmp.has(target - nums[i])) {
   ```
   - Inside the loop, we check if the Map `tmp` already has a key that equals the difference between the `target` and the current number in the `nums` array (`target - nums[i]`).

4. **Pair Found:**
   ```javascript
   return [tmp.get(target - nums[i]), i];
   ```
   - If such a key exists in the Map, it means we've found two numbers in the `nums` array whose sum equals the `target`. We return an array containing the indices of these two numbers. The indices are retrieved from the Map using `tmp.get(target - nums[i])` (the index of the first number) and `i` (the index of the second number).

5. **Store in Map:**
   ```javascript
   tmp.set(nums[i], i);
   ```
   - If no such key exists in the Map, it means we haven't found a matching pair yet. So, we add the current number and its index to the Map using `tmp.set(nums[i], i)`.

6. **No Pair Found:**
   ```javascript
   return [-1, -1];
   ```
   - After looping through all elements in the `nums` array and not finding a matching pair, the function returns `[-1, -1]`, indicating that there's no such pair.

In simpler terms, this function efficiently finds two numbers in the `nums` array whose sum equals the `target` and returns their indices as an array. If no such pair is found, it returns `[-1, -1]`.

*My opinion on this code:* It's a clever and efficient solution to the "Two Sum" problem, using a Map to store previously seen numbers. This algorithm has a time complexity of O(n), which is quite efficient. 

