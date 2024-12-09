# Using `closest`

The `closest` method is part of the Element interface.

It is used to find the closest ancestor (GrandParent) element (including the element itself) that matches a specified selector.

- It traverses the element and its ancestors (parent, grandparent, etc.) up to the root of the document until it finds a node that matches the specified CSS selector.

**Syntax:**

```javascript
element.closest(selector);
```

- `element`: The starting element from which to search.
- `selector`: A CSS selector specifying the element to find.

**Returns:**

- The first ancestor element (including the element itself) that matches the selector.
- `null` if no matching element is found.

## How it Works:

It starts at the specified element and traverses up the DOM tree, checking each ancestor(Grandparent) element against the provided selector.

- It stops and returns the first element that matches.
- If no matching ancestor is found, it returns `null`.

#### Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>closest Example</title>
  </head>
  <body>
    <div class="grandparent">
      <div class="parent">
        <p class="child">This is a child!</p>
      </div>
    </div>

    <script>
      let child = document.querySelector(".child");
      console.log(child.closest(".grandparent")); // <div class="grandparent">...</div>
    </script>
  </body>
</html>
```

- The `querySelector('.child')` selects the `<p>` element.
- The `closest('.grandparent')` method finds the closest ancestor matching the `.grandparent` selector, which is the `<div class="grandparent">`.

### Differences with Other Alternatives

#### parentElement

- Returns the immediate parent element.
- Limited to the direct parent.
- Less flexible for finding ancestor elements.

#### parentNode

- Returns the parent node of any type (element, text, comment, etc.).
- Doesn't provide a way to search for specific elements based on selectors.

#### matches()

- Checks if an element matches a selector.
- Doesn't directly find ancestors, but can be used in combination with a loop to achieve similar results.

### When to Use closest()

- When you need to find an ancestor element based on a specific selector.
- When you want to efficiently traverse up the DOM tree to find a matching element.

### Additional Notes

- `closest()` is relatively new, so older browsers might not support it.
- For better compatibility, you can use a polyfill if necessary.

### Summary

- **`parentNode`**: Returns the immediate parent node, which can be any node type.
- **`parentElement`**: Returns the immediate parent element node or `null` if the parent is not an element.
- **`closest`**: Finds the closest ancestor matching a specified selector, traversing up the DOM tree.

Each method serves different purposes and provides different levels of flexibility based on the type of parent node you need to access.
