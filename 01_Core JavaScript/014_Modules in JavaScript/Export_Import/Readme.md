# What are `import` and `export`?

**Think of your code as a set of tools.**

- Instead of copying the same code everywhere, JavaScript lets you `export` a tool (**function** or **variable**) from one file and `import` it wherever you need it.
- This keeps things clean and organized.

**Export** = _Sharing data or tools from a file._

- Where we have the data or functionality (like variables, functions, or classes), we `export` it so that other parts of the project can use it.

**Import** = _Using that shared data or tools in another file._

- Where we need to use that data or functionality, we `import` it.

## `export` – Sharing Your Tools

When we write a function, a variable, or even an entire class that you think could be useful somewhere else in your project, we can **export** it.

- This is like saying, "Hey, this is something I want to make available for use outside this file."

```js
// Imagine this file is called helpers.js
export const greet = (name) => `Hello, ${name}!`;
```

Here, `greet` is a function that says hello. By exporting it, you’re allowing other files to use this function.

## `import` – Borrowing Tools

In another file, you can **import** the `greet` function, just like borrowing a tool from your toolbox.

- This makes your project organized and avoids repeating code.

```js
// In another file, say main.js
import { greet } from "./helpers.js";

console.log(greet("Alice")); // Output: Hello, Alice!
```

Now you’ve "borrowed" the `greet` function and can use it without having to rewrite it.

## Two Ways to Share Tools:

### 1. **Named Exports**

If you want to export multiple things from a file.

```js
// Named exports
export const greet = (name) => `Hello, ${name}!`;
export function add(a, b) {
  return a + b;
}
```

**Import**

```js
import { greet, add } from "./file.js";
```

### 2. **Default Export**:

If we just want to export **one** main thing from a file, you can use `default`.

- **_We can only have one `default` `export` per file in JavaScript._**

```js
// Default export
const subtract = (a, b) => a - b;
export default subtract;
```

**Import**

```js
import subtract from "./file.js";
```

## Why Bother?

It helps you **organize** your code.

- If you’ve got a lot of functions or logic in one file, you can break it into smaller, reusable pieces.
- It also makes things **easier to maintain**.
- If you need to change how something works, you can update it in one place, and all the places that import it will automatically get the updated version.

---

## Combining Named and Default Exports in JavaScript

Yes, you can have both **named exports** and a **default export** in the same file. The default export is used for the primary functionality, while named exports can be used for additional utilities or functions.

### **Example**

```js
// file: mathUtils.js

// Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default export
const multiply = (a, b) => a * b;
export default multiply;
```

### **Importing**

We can import both the named exports and the default export in another file:

```js
// file: main.js

import multiply, { add, subtract } from "./mathUtils.js";

console.log(multiply(2, 3)); // Output: 6
console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 3)); // Output: 2
```
