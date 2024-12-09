# Using `parentElement`

It is used to access the parent element of a given element.

- It's a read-only property that returns the parent element as an Element object, or null if the element doesn't have a parent element or if the parent is not an element itself.

## Key Points

1. **Returns an Element object**: Unlike parentNode, parentElement specifically returns an element.
2. **Null if parent is not an element**: If the parent node is a text node, comment node, or other non-element node, parentElement will be null.
3. **Read-only property**: You cannot assign a new value to parentElement.
4. **Efficient for accessing parent elements**: It's a direct and efficient way to get the parent element.

## How it Works:

- **Accesses the Parent Element**: `parentElement` specifically targets the parent that is an element node.
- **Ignores Non-Element Nodes**: This method will return `null` if the parent node is not an element (e.g., document, document fragment).
- **Read-Only**: Like `parentNode`, `parentElement` is also read-only.

## Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>parentElement Example</title>
  </head>
  <body>
    <div id="main">
      <p class="note">This is a note!</p>
    </div>

    <script>
      let note = document.querySelector(".note");
      console.log(note.parentElement); // <div id="main">...</div>
    </script>
  </body>
</html>
```

- The `querySelector('.note')` selects the `<p>` element.
- The `parentElement` of the `<p>` element is the `<div id="main">`.

## When to Use parentElement

- When you need to access the immediate parent element of an element.
- When you are certain that the parent is an element.

## Comparison with parentNode

While parentElement is more specific to elements, parentNode is more general and can return any type of node as the parent.

> **Remember**: If you're unsure about the parent node's type, using parentNode is safer to avoid potential null values.
