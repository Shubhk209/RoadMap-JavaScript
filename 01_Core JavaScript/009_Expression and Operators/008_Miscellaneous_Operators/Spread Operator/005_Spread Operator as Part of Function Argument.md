# Spread Operator as Part of Function Argument

You can also use the spread operator as part of a function argument.

```js
// function that takes three arguments
function sum(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

let num1 = [1, 3, 4, 5];

// pass the first three array elements
sum(...num1);

// Output: 8
```

If you pass multiple arguments using the spread operator, the function takes the required number of arguments and ignores the rest.

- The spread operator (`...`) in JavaScript allows an iterable (like an array) to be expanded in places where zero or more arguments are expected.
- When you pass multiple arguments using the spread operator to a function, the function will take the required number of arguments and ignore the rest.

```javascript
function sum(a, b) {
  return a + b;
}

const numbers = [1, 2, 3, 4, 5];
const result = sum(...numbers); // Only the first two elements are used

console.log(result); // Output: 3
```

In this snippet:

1. We have a function `sum` that takes two arguments `a` and `b`.
2. We have an array `numbers` containing five elements.
3. We use the spread operator to pass the elements of the `numbers` array to the `sum` function.

**Even though `numbers` contains five elements, the `sum` function only requires two arguments.**

- The spread operator expands the array into individual arguments, and `sum` takes the first two (`1` and `2`) and ignores the rest (`3`, `4`, `5`). The result is `3`, which is the sum of `1` and `2`.

## **Another example:**

```javascript
function concatenateStrings(str1, str2, str3) {
  return str1 + str2 + str3;
}

const words = ["Hello", " ", "World", "!", " How", " are", " you?"];
const message = concatenateStrings(...words); // Only the first three elements are used

console.log(message); // Output: "Hello World"
```

In this example:

1. We have a function `concatenateStrings` that takes three arguments `str1`, `str2`, and `str3`.
2. We have an array `words` containing seven elements.
3. We use the spread operator to pass the elements of the `words` array to the `concatenateStrings` function.

The `concatenateStrings` function takes the first three arguments (`"Hello"`, `" "`, and `"World"`) and ignores the rest (`"!"`, `" How"`, `" are"`, `" you?"`). The result is `"Hello World"`.
