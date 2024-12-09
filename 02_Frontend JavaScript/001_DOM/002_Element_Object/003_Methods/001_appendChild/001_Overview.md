# `appendChild` method in the DOM

It is used to add a node as the last child of a specified parent node.

- This is a common method used to dynamically manipulate the structure of a webpage by adding new elements to it.

- The `appendChild()` is a method of the `Node interface`.
- It is part of Element Object.

## Syntax

```javascript
parentNode.appendChild(childNode);
```

- **parentNode**: The node to which you want to add a child.
- **childNode**: The node you want to append as a child.

## Example Usage

Here’s an example of how to use `appendChild`:

### HTML

**Html**

```html
<div id="parent"></div>
```

**JavaScript**

```javascript
// Create a new element
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph";

// Get the parent element
const parentDiv = document.getElementById("parent");

// Append the new element to the parent
parentDiv.appendChild(newElement);
```

### What Happens Here?

- A new paragraph (`<p>`) element is created with some text content.
- The paragraph element is then appended to the `div` with the ID `parent`, making it the last child of that `div`.

## **When to Use**

1. Older method with broader browser compatibility.
2. Specific: Can only accept a single Node object as an argument.

```js
const parentDiv = document.getElementById("parent");
const childDiv = document.createElement("div");

parentDiv.appendChild(childDiv);
```

3. Returns the appended child, which can be useful in some cases.

```js
const parentDiv = document.getElementById("parent");
const childDiv = document.createElement("div");

const appendedChild = parentDiv.appendChild(childDiv);
console.log(appendedChild === childDiv); // Output: true
```

## Key Points to Remember

- **Node Relationship**: The `childNode` becomes the last child of the `parentNode`.
- **Reparenting**: If `childNode` already exists in the document, it will be moved from its current position to the new position under the specified `parentNode`.
- **Return Value**: `appendChild` returns the appended child node.
- **Add Text**: We must first create a text node using `document.createTextNode()` and then append it to the parent element.

```js
// Create a text node
const textNode = document.createTextNode("This text will be appended.");

// Get the parent element
const parentDiv = document.getElementById("myDiv");
```
