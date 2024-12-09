# JavaScript Rest Parameter

**When the spread operator is used as a parameter, it is known as the `rest parameter`.**

You can accept multiple arguments in a function call using the rest parameter.

```js
let printArray = function (...args) {
  console.log(args);
};

// pass a single argument
printArray(3);

// pass multiple arguments
printArray(4, 5, 6);
```

**Output**

```
[3]

[(4, 5, 6)];
```

Here,

- When a single argument is passed to `printArray()`, the rest parameter takes only one parameter.
- When three arguments are passed, the rest parameter takes all three parameters.

  > Note: Using the rest parameter will pass the arguments as array elements.

Spread Operator as Part of Function Argument
