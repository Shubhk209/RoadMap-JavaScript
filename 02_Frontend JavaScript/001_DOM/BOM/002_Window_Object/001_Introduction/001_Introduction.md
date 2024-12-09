# What is the Window Object?

**The `window` object is the `global object` in the browser environment.**

- It represents the **window** or **tab** in which the browser displays the document.
- It is the top-level object for everything related to the browser window and the webpage.
  ss

## What Does it Represent?

The `window` object represents:

- The browser window itself.
- It serves as the global execution context for JavaScript, meaning all global variables and functions are properties of the `window` object.
- It provides methods to control the browser (e.g., open, close, resize, scroll).

## The Window Object is Global

Since the `window` object is the global object, all global variables and functions declared with `var` in the global scope are properties of the `window` object.

For instance:

```javascript
var myVariable = "Hello World";
console.log(window.myVariable); // Output: Hello World
```

## Window vs Document

1. **Window**: Represents the browser window or frame.

   - It includes properties and methods for controlling the browser window.

2. **Document**: Represents the **loaded web page** and provides methods to **manipulate the HTML and content**.
   - The `document` object is a property of the `window` object (`window.document`).

## Key Functionalities of the Window Object

1. **Global Variables and Functions**: All global variables and functions are part of the window object.
2. **Control Browser Window**: Methods to control the browser window (e.g., `window.open()`, `window.close()`, `window.resizeTo()`).
3. **Browser Information**: Properties to get information about the browser and screen (e.g., `window.navigator`, `window.screen`).
4. **Timers**: Methods to execute code at specific intervals or after a delay (e.g., `window.setTimeout()`, `window.setInterval()`).
5. **Events**: Methods to handle events (e.g., `window.addEventListener()`, `window.removeEventListener()`).
