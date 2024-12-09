# **What is the `call` method?**

In JavaScript, functions are first-class citizens, meaning they can be treated like values.

- We can assign them to variables, pass them as arguments to other functions, and even create functions within functions.

The `call` method is a built-in function attached to all functions.

- It allows you to explicitly control the context (the value of the `this` keyword) within which a function is executed.

## **When to Use `call`**

There are several scenarios where `call` comes in handy:

1. **Changing the `this` Context:**

   - By default, the `this` keyword inside a function refers to the object that the function is attached to when called.
   - `call` lets you specify a different object to be the `this` value when the function is invoked.
     - This is useful when you want to use a function defined in one object with another object's data.

   ```javascript
   const person = {
     name: "Alice",
     greet: function () {
       console.log("Hello, my name is " + this.name);
     },
   };

   const anotherPerson = { name: "Bob" };

   person.greet(); // Output: "Hello, my name is Alice"
   person.greet.call(anotherPerson); // Output: "Hello, my name is Bob" (using 'call' to change this)
   ```

2. **Borrowing Utility Functions:**

   - Sometimes you might have helper functions defined within an object that you want to use outside of that object's scope.
   - `call` allows you to "borrow" these functions and use them with other objects.

   ```javascript
   const math = {
     add: function (x, y) {
       return x + y;
     },
   };

   const numbers = { a: 5, b: 3 };

   const sum = math.add.call(numbers, numbers.a, numbers.b); // sum will be 8
   ```

3. **Simulating Inheritance (Limited Use):**

   - In older JavaScript practices, `call` was sometimes used to emulate inheritance. However, with the introduction of classes, this approach is less common.
   - It's generally recommended to use classes or object creation patterns for proper inheritance.

**Alternatives to `call`:**

- **`apply` method:** Similar to `call` but takes arguments as an array instead of individual parameters.
- **Arrow functions:** Arrow functions have a lexical `this` binding, meaning they inherit the `this` context from their surrounding scope.

**Remember:**

- Use `call` judiciously when you need to control the `this` context or borrow functions strategically.
- In modern JavaScript, classes are preferred for object-oriented programming.
