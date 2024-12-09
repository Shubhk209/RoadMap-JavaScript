# Control flow in JavaScript

**It refers to the order in which the code in your program is executed.**

- By default, JavaScript executes code line by line, from top to bottom.
  - However, you can use control flow statements to alter this default behavior.

These statements allow your program to **make decisions** and **repeat actions**, making your code more dynamic and flexible.

## Types of Control Flow in JavaScript

1. **Conditional Statements:**

   - **if statement:**
     ```javascript
     if (condition) {
       // code to execute if condition is true
     }
     ```
   - **if...else statement:**
     ```javascript
     if (condition) {
       // code to execute if condition is true
     } else {
       // code to execute if condition is false
     }
     ```
   - **else if statement:**
     ```javascript
     if (condition1) {
       // code to execute if condition1 is true
     } else if (condition2) {
       // code to execute if condition2 is true
     } else {
       // code to execute if neither condition1 nor condition2 is true
     }
     ```
   - **switch statement:**
     ```javascript
     switch (expression) {
       case value1:
         // code to execute if expression === value1
         break;
       case value2:
         // code to execute if expression === value2
         break;
       default:
       // code to execute if none of the cases match
     }
     ```

2. **Loops:**

   - **for loop:**
     ```javascript
     for (initialization; condition; update) {
       // code to be executed repeatedly as long as condition is true
     }
     ```
   - **while loop:**
     ```javascript
     while (condition) {
       // code to be executed repeatedly as long as condition is true
     }
     ```
   - **do...while loop:**
     ```javascript
     do {
       // code to be executed at least once and then repeatedly as long as condition is true
     } while (condition);
     ```
   - **for...in loop:**
     ```javascript
     for (var key in object) {
       // code to be executed for each property in the object
     }
     ```
   - **for...of loop:**
     ```javascript
     for (var element of iterable) {
       // code to be executed for each element in the iterable (like arrays, strings, etc.)
     }
     ```

3. **Exception Handling:**

   - **try...catch statement:**
     ```javascript
     try {
       // code to try
     } catch (error) {
       // code to handle errors
     }
     ```
   - **try...catch...finally statement:**
     ```javascript
     try {
       // code to try
     } catch (error) {
       // code to handle errors
     } finally {
       // code to execute regardless of the try / catch result
     }
     ```

4. **Branching Statements:**
   - **break statement:**
     ```javascript
     for (var i = 0; i < 10; i++) {
       if (i === 5) {
         break; // exits the loop when i equals 5
       }
     }
     ```
   - **continue statement:**
     ```javascript
     for (var i = 0; i < 10; i++) {
       if (i === 5) {
         continue; // skips the rest of the loop iteration when i equals 5
       }
     }
     ```
   - **return statement:**
     ```javascript
     function sum(a, b) {
       return a + b; // exits the function and returns a value
     }
     ```

Understanding and using these control flow statements allows you to write complex and powerful JavaScript programs that can handle various conditions and iterations effectively.
