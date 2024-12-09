# Ternary operator (?:) instead of an if…else statement

We can use the ternary operator `?:` instead of an `if...else` statement if the operation we're performing is very simple.

## **Syntax**

```js
condition ? expressionIfTrue : expressionIfFalse;
```

- **condition**: An expression that evaluates to true or false.
- **expressionIfTrue**: The expression that gets executed if the condition is true.
- **expressionIfFalse**: The expression that gets executed if the condition is false.

# Example

```js
let age = 18;
let message;

if (age >= 16) {
  message = "You can drive.";
} else {
  message = "You cannot drive.";
}

console.log(message);
```

We can use the ternary operator in an expression.

```js
let age = 18;
let message;

message = age >= 16 ? "You can drive." : "You cannot drive.";

console.log(message);
```

## When to Use the Ternary Operator

1. **Simple Conditional Assignments**: When you need to assign a value to a variable based on a condition.

   ```javascript
   let isAdult = age >= 18 ? true : false;
   ```

2. **Inline Conditional Expressions**: When you want to return different values or perform different operations within an expression.

   ```javascript
   console.log(isAdult ? "Adult" : "Minor");
   ```

3. **Short Conditional Logic**: When the logic is simple and can be easily understood at a glance.

## When Not to Use the Ternary Operator

1. **Complex Conditions**: When the condition and resulting expressions are complex.

   - Using the ternary operator in such cases can make the code difficult to read and maintain.

   ```javascript
   // Avoid this:
   let result =
     a > b ? (b > c ? "A is greater" : "B is in middle") : "C is greatest";
   ```

2. **Multiple Conditions**: When you have multiple conditions to check, an `if-else` statement is usually more readable.

   ```javascript
   // Prefer this:
   if (a > b) {
     if (b > c) {
       result = "A is greater";
     } else {
       result = "B is in middle";
     }
   } else {
     result = "C is greatest";
   }
   ```

3. **Side Effects**: When the expressions include side effects (like function calls) or require multiple statements. In such cases, an `if-else` block is clearer.

## Benefits of the Ternary Operator

1. **Conciseness**: It allows for a more concise way to write simple conditional logic, reducing the lines of code.

   ```javascript
   let message = isLoggedIn ? "Welcome back!" : "Please log in.";
   ```

2. **Improved Readability for Simple Conditions**: For straightforward conditions, the ternary operator can make the code easier to read.

3. **Inline Usage**: It can be used directly within expressions, which is useful for return statements and template literals.
