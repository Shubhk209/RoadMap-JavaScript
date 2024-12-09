# JavaScript try...catch in setTimeout

The `try...catch` won't catch the exception if it happened in "timed" code, like in `setTimeout()`.

```js
try {
  setTimeout(function () {
    // error in the code
  }, 3000);
} catch (e) {
  console.log("won't work");
}
```

**The above `try...catch` won't work because the engine has already left the `try..catch` construct and the function is executed later.**

**The `try..catch` block must be inside that function to catch an exception inside a timed function.**

```js
setTimeout(function () {
  try {
    // error in the code
  } catch {
    console.log("error is caught");
  }
}, 3000);
```

**You can also use the throw statement with the `try...catch` statement to use user-defined exceptions.**

- For example, a certain number is divided by 0.
- If you want to consider Infinity as an error in the program, then you can throw a user-defined exception using the throw statement to handle that condition.
