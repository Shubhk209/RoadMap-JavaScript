# JavaScript Closures

Before you learn about closures, you need to understand two concepts:

1. Nested Function
2. Returning a function

## Nested Function

In JavaScript, a function can also contain another function.

- This is called a nested function.

```js
// nested function example

// outer function
function greet(name) {
  // inner function
  function displayName() {
    console.log("Hi" + " " + name);
  }

  // calling inner function
  displayName();
}

// calling outer function
greet("John"); // Hi John
```

**The `greet()` function contains the `displayName()` function inside of it.**

## Returning Function

In JavaScript, you can also return a function within a function.

```js
function greet(name) {
  function displayName() {
    console.log("Hi" + " " + name);
  }

  // returning a function
  return displayName;
}

const g1 = greet("John");
console.log(g1); // returns the function definition
g1(); // calling the function
```

In the above program, the greet() function is returning the displayName function definition.

- Here, the returned function definition is assigned to the `g1` variable.
- When you print `g1` using `console.log(g1)`, you will get the function definition.

- To call the function stored in the g1 variable, we use g1() with parentheses.
