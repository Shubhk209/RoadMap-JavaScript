# Introduction to Closure (Chai Aur javascript)

## Lexical Scope

**Each function in JavaScript has its own scope.**

- If we attempt to access a variable or property inside a function from outside that function, it will result in an error.

```javascript
function outer() {
  var username = "hitesh";
}

console.log(username); // Uncaught ReferenceError: username is not defined
```

**Lexical scope describes how nested (also known as "child") functions have access to variables defined in parent scopes.**

**In JavaScript, lexical scope allows inner functions to access the scope of their outer functions.**

### Example 1

```javascript
const myFunction = () => {
  let myValue = 2;
  console.log(myValue); // 2

  const childFunction = () => {
    console.log((myValue += 1)); // 3
  };

  childFunction();
};

myFunction();
```

## Closure

**A closure is a function having access to the parent scope, even after the parent function has closed.**

- A closure allows an inner function to remember and access variables from its outer function's scope even after the outer function has finished executing.

**Let's note the first part of the sentence before the comma:**

> **...a function having access to the parent scope**

**That's describing lexical scope!**
