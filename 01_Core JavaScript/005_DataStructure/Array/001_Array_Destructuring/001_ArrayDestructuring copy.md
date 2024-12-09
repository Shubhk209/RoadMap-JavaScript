# Array destructuring

**It is a handy feature in JavaScript introduced in ES6 (ECMAScript 2015).**

**It allows you to unpack values from an array into distinct variables.**

- It's a concise way to extract specific elements from an array and assign them to new names.

## **Basic Destructuring:**

**Without using the array destructuring**

```javascript
const numbers = [1, 2, 3];

const firstNumber = numbers[0];
const secondNumber = numbers[1];
const ThirdNumber = numbers[2];

console.log(firstNumber); // Output: 1
console.log(secondNumber); // Output: 2
```

**With using the array destructuring**

```javascript
const numbers = [1, 2, 3];
const [firstNumber, secondNumber] = numbers;

console.log(firstNumber); // Output: 1
console.log(secondNumber); // Output: 2
```

In this example, we create an array `numbers` and then use array destructuring to assign the first element to `firstNumber` and the second element to `secondNumber`.

- The order of variables on the left side matches the order of elements you want to extract from the array on the right.

# **Destructuring with Rest Syntax (...)**

The rest syntax (`...`) allows you to capture remaining elements of an array into a new array.

```javascript
const colors = ["red", "green", "blue", "purple"];
const [primary, secondary, ...others] = colors;

console.log(primary); // Output: "red"
console.log(secondary); // Output: "green"
console.log(others); // Output: ["blue", "purple"]
```

Here, we use the rest syntax (`...others`) to capture all elements from the third position onwards into a new array called `others`.

**Key Points:**

- Destructuring doesn't modify the original array.
  - It creates new variables with the extracted values.
- You can skip elements by leaving empty slots in the destructuring pattern.
- Destructuring works with any iterable object, not just arrays (strings, Sets, etc.).

**Benefits of Array Destructuring:**

- Improves code readability by making it clear which elements you're interested in.
- Makes code more concise compared to traditional element access using indexes.
- Useful for swapping variable values or working with nested arrays.
