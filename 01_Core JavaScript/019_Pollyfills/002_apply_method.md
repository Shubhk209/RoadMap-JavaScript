# **What is `apply`?**

Similar to `call`, `apply` is a built-in function on all JavaScript functions. It allows you to call a function with a given `this` value and arguments provided as an array.

## **Key Differences between `call` and `apply`:**

- **Arguments:**
  - `call` takes two arguments:
    1. The value to be set as `this` within the function.
    2. Individual arguments to be passed to the function (comma-separated).
  - `apply` takes two arguments as well:
    1. The value to be set as `this` within the function.
    2. An array containing the arguments to be passed to the function.

# **When to Use `apply`**

Here are the main scenarios where `apply` is useful:

1. **Arguments as Array:**

   - If you already have your arguments in an array format, `apply` is more convenient than listing them out individually with `call`.

   Example:

   ```javascript
   function sum(a, b) {
     return a + b;
   }

   const numbers = [5, 3];

   console.log(sum.call(null, numbers[0], numbers[1])); // Output: 8 (using call)
   console.log(sum.apply(null, numbers)); // Output: 8 (using apply with array)
   ```

2. **Function Argument Spreading (Modern Equivalent):**

   - In modern JavaScript (ES6+), the spread syntax (`...`) offers a more concise way to achieve the same result as `apply` when spreading an array as arguments:

   ```javascript
   console.log(sum(...numbers)); // Output: 8 (spread syntax)
   ```

## **In Summary**

While both `call` and `apply` serve the purpose of controlling `this`, `apply` is specifically suited for situations where you have your arguments pre-arranged in an array.

- However, for modern JavaScript development, the spread syntax often provides a cleaner and more readable alternative.
