# Example

```js
// closure example

function calculate(x) {
  function multiply(y) {
    return x * y;
  }
  return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3); // returns calculate function definition
console.log(multiply3()); // NaN

console.log(multiply3(6)); // 18
console.log(multiply4(2)); // 8
```

**In the above program, the `calculate()` function takes a single argument x and returns the function definition of the `multiply()` function.**

- The `multiply()` function takes a single argument y and returns `x * y`.

- Both multiply3 and multiply4 are closures.

**The `calculate()` function is called passing a parameter x.** When multiply3(6) and multiply4(2) are called, the multipy() function has access to the passed x argument of the outer calculate() function.
