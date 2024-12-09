# **Closures in JavaScript**

In JavaScript, a closure is a function that has access to the variables in its outer (enclosing) function's scope, even after the outer function has finished executing.

- This creates a "closed-over" environment where the inner function remembers the state of the outer function.

## **Example:**

Example of a closure that creates a counter function:

```javascript
function createCounter() {
  let counter = 0;

  return function () {
    counter++;
    return counter;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (independent counter)
console.log(counter2()); // 2
```

In this example:

- The `createCounter` function defines a variable `counter` and initializes it to 0.
- It returns an inner function that increments `counter` and returns its value.
- When we call `createCounter()`, a new closure is created. Each closure remembers its own `counter` variable.
- So, `counter1` and `counter2` keep track of their own counts independently.

**Why Use Closures?**

I'd be glad to explain why closures are essential in JavaScript, along with examples:

**Data Privacy and Encapsulation:**

- Closures allow you to create private variables within a function that cannot be directly accessed from the outside world. The inner function acts as a gatekeeper, ensuring controlled modification and access to the outer function's variables.

**Example:**

```javascript
function createUserInfo(name) {
  let age = 30; // Private variable

  function greet() {
    return `Hi, I'm ${name} and I'm ${age} years old.`;
  }

  return greet;
}

const user1Greeter = createUserInfo("Alice");
console.log(user1Greeter()); // Output: "Hi, I'm Alice and I'm 30 years old."

// Trying to access the private variable 'age' from outside:
console.log(age); // ReferenceError: age is not defined
```

In this example:

- The `createUserInfo` function takes a `name` argument and defines a private variable `age`.
- It returns an inner function `greet` that has access to both `name` and `age`.
- When you call `createUserInfo("Alice")`, a closure is created. The returned `user1Greeter` function remembers the values of `name` and `age` from the closure.
- You can use `user1Greeter` to display the user information, but you cannot directly access `age` from outside, maintaining data privacy.

**Module Pattern:**

- Closures are often used to create modules in JavaScript. Modules encapsulate functionality and data, promoting code organization, reusability, and data privacy.

**Example:**

```javascript
function createShapeModule(type) {
  let area = null; // Private variable

  function calculateArea(width, height) {
    if (type === "square") {
      area = width * width;
    } else if (type === "rectangle") {
      area = width * height;
    } else {
      throw new Error("Invalid shape type");
    }
  }

  function getArea() {
    if (area === null) {
      throw new Error("Area not yet calculated");
    }
    return area;
  }

  return {
    calculateArea,
    getArea,
  };
}

const squareModule = createShapeModule("square");
squareModule.calculateArea(5);
console.log(squareModule.getArea()); // Output: 25

const rectangleModule = createShapeModule("rectangle");
rectangleModule.calculateArea(4, 6);
console.log(rectangleModule.getArea()); // Output: 24
```

In this example:

- The `createShapeModule` function takes a `type` argument and creates a closure.
- It defines private variables and functions within the closure.
- The returned object provides public functions (`calculateArea` and `getArea`) to interact with the module's functionality, hiding implementation details.

**Event Listeners:**

- Closures are essential for preserving state or context within event listeners. When you add an event listener to an element, the function that handles the event (the callback) can access variables from the scope where it was created, even if that function executes later when the event fires.

**Example:**

```javascript
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = button.textContent; // Accessing variable from closure
    console.log(`You clicked the button: ${buttonText}`);
  });
});
```

In this example:

- The `forEach` loop iterates over buttons and adds an event listener to each one.
- The click event handler function is created for each button within the loop.
- The closure ensures that each click handler remembers the specific button's text content (`buttonText`) through the closure, allowing you to identify the clicked button within the handler.

**Callbacks and Partial Application:**

- Closures can be used to create callback functions that remember specific data or configurations. You can create a function that returns another function with pre-set parameters, a technique called partial application.

**Example:**

```javascript
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(4)); // Output: 12
```

In this example:

- The `createMultiplier` function takes a
