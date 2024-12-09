# `parentNode` property.

- Part of the **Node interface**.
- Returns the parent node of the specified node as a `read-only` property.
- Can be any type of node, including element nodes, document nodes, and document fragment nodes.
- **Read-Only**: The parentNode is `read-only`.

> The Document and DocumentFragment nodes do not have a parent, so `parentNode` will always be `null`.

This parent node can be any node type, including `elements`, `text nodes`, `comment nodes`, and more.

## How it Works

- **Accesses the Parent Node**: `parentNode` traverses one level up from the specified node in the DOM tree.
- **Returns Any Node Type**: This method can return an element node, document node, document fragment node, etc.
- **Returns `null` if No Parent**: If the specified node does not have a parent (e.g., it's the root node), it returns `null`.

> The Document and DocumentFragment nodes do not have a parent, so `parentNode` will always be `null`.

### Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>parentNode Example</title>
  </head>
  <body>
    <div id="main">
      <p class="note">This is a note!</p>
    </div>

    <script>
      let note = document.querySelector(".note");
      console.log(note.parentNode); // <div id="main">...</div>
    </script>
  </body>
</html>
```

- The `querySelector('.note')` selects the `<p>` element.
- The `parentNode` of the `<p>` element is the `<div id="main">`.

## Differences with Other Alternatives

### parentElement

- Specifically returns the parent element of a node.
- More restrictive than parentNode.
- If the parent is not an element, parentElement will return null.

### closest()

Returns the closest ancestor element (including itself) that matches a selector.
Focuses on finding an ancestor element based on a specific criteria.
Not a direct parent relationship.

### matches()

- Checks if an element matches a selector.
- Not for direct parent retrieval but can be used in conjunction with a loop to find a parent based on a condition.

## When to Use parentNode

- When you need to access the parent of any node type, not just elements.
- When you're unsure of the parent's type and want a general approach.
- When you need to traverse the DOM tree up to any level, not just the immediate parent.
