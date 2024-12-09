# `append()` method

It is used to insert nodes or text at the end of an element.

- It can append multiple nodes or strings, and if strings are passed, they are automatically converted to text nodes.

-It is part of the `ParentNode` interface, which is implemented by the `Element interface`.

### Syntax:

```javascript
element.append(...nodesOrDOMStrings);
```

**Parameters**

- **nodesOrDOMStrings**: One or more Node objects (e.g., elements) or strings to be appended to the element.

## Features:

1. **Supports Multiple Arguments**: You can append multiple nodes or text strings at once.
2. **Text Nodes**: Strings are automatically converted to text nodes.
3. **Does Not Return a Value**: The method does not return anything (i.e., it returns `undefined`).

## Example: To-Do List

**HTML**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>To-Do List</title>
  </head>
  <body>
    <ul id="todo-list"></ul>
    <script src="script.js"></script>
  </body>
</html>
```

**JavaScript**

```javascript
const todoList = document.getElementById("todo-list");

function addTodo(task) {
  const li = document.createElement("li");
  li.textContent = task;
  todoList.append(li);
}

// Example usage:
addTodo("Learn JavaScript");
addTodo("Build a web application");
```

### Explanation

1. **HTML Structure:**

   - We create a basic HTML structure with a `<ul>` element having the id `todo-list`.
   - A script tag is included to link the JavaScript file (script.js).

2. **JavaScript:**
   - The `todoList` variable gets a reference to the `<ul>` element with the id `todo-list`.
   - The `addTodo` function creates a new list item (`<li>`) for the given task, sets its text content, and appends it to the `todoList`.
   - The function is called twice with sample tasks.

### How it works:

- When the HTML page loads, the JavaScript code executes.
- The `addTodo` function is called twice, creating two list items with the specified tasks.
- These list items are appended to the `<ul>` element with the id `todo-list`.
- The resulting HTML will look like this:

```html
<ul id="todo-list">
  <li>Learn JavaScript</li>
  <li>Build a web application</li>
</ul>
```

## When to Use it

1. Preferred method in modern JavaScript for adding elements to the DOM.
2. **Versatile**: Can accept multiple arguments, including Node objects and DOM strings.

   ```javascript
   const parentDiv = document.getElementById("parent");
   const childDiv = document.createElement("div");
   const paragraph = document.createElement("p");
   paragraph.textContent = "This is a paragraph";

   parentDiv.append(childDiv, paragraph, "Some text");
   ```

3. **Concise**: Allows for chaining method calls.

   ```js
   const parentDiv = document.getElementById("parent");

   parentDiv
     .append(document.createElement("div"))
     .append(document.createElement("span"))
     .append("Some more text");
   ```

4. **Efficient**: Often provides better performance than appendChild() when adding multiple elements.

   ```js
   const parentDiv = document.getElementById("parent");
   const elements = [];
   for (let i = 0; i < 1000; i++) {
     const div = document.createElement("div");
     elements.push(div);
   }

   // Using appendChild()
   for (const element of elements) {
     parentDiv.appendChild(element);
   }

   // Using append()
   parentDiv.append(...elements);
   ```
