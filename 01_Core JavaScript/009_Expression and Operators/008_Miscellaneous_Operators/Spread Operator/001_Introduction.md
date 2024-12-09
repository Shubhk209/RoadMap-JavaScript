# JavaScript Spread Operator

`The JavaScript spread operator `...` is used to expand or spread out elements of an iterable, such as an **array**, **string**, or **object**.`

This makes it incredibly useful for tasks like combining **arrays**, passing elements to functions as separate arguments, or even copying arrays.

```js
let numbers = [1, 2, 3];

// equivalent to
// console.log(numbers[0], numbers[1], numbers[2])
console.log(...numbers);

// Output: 1 2 3
```

Here, we used the spread operator `... inside console.log()` to expand the numbers array into individual elements.
