# Closure

In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed.

```js
// javascript closure example

// outer function
function greet() {
  // variable defined outside the inner function
  let name = "John";

  // inner function
  function displayName() {
    // accessing name variable
    return "Hi" + " " + name;
  }

  return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value
```

**Output**

```js
function displayName() {
      // accessing name variable
      return 'Hi' + ' ' + name;
}

Hi John
```

When `greet()` function is called, it returns the function definition of displayName.

- `g1` is a reference to the displayName() function.

- When `g1()` is called, it still has access to the greet() function.

- When we run `console.log(g1)`, it returns the function definition.
