## Reverse A String

This is the solution on how to reverse a string in javascript. One thing I learnt was how to for loop starting from the end of an array or string to the beginning.

Another programmer might first try to check if the value that is being received is a string or not and  if this string is less than two words.

```js
    if (value.length < 2 || typeof value !== 'string') {
        // do somethingelse
    }
```

This solution can also be solved using a forward loop.

```js
    function reverse(value: string) {
        const stringArr = value.split("");
        for (let i=0; i < value.length; i++) {
            stringArr[i] = value[value.length - (i + 1)];
        }
        return stringArr.join("");
    }
```