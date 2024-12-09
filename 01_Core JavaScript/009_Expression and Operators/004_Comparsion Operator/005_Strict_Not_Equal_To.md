# Strict Not Equal To Operator

The strict not equal to operator !== evaluates to

- true if either the values or the types of the operands are not the same.
- false if both the values and the types of the operands are the same.

```js
// same value, same type
console.log(2 !== 2); // false

// same value, different type
console.log(2 !== "2"); // true

// different value, same type
console.log("Hello" !== "World"); // true
```
