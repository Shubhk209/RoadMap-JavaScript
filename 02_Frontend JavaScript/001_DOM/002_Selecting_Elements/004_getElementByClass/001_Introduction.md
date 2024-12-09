# getElementsByClassName(className):

> It returns an array-like of objects of the child elements with a specified class name.

```js
let elements = document.getElementsByClassName(names);
```

- `names` parameter represents one or more class names to match. Multiple class names are separated by space.
- It returns `undefined` if no element with the class names is found.

**Takes a single argument, className, which is a string representing the class name you want to select elements for (e.g., "`error`", "`highlight`", "`button`").**

- Searches the entire document, including the root node, for elements that have the specified class name as part of their class attribute.
  - An element can have multiple classes separated by spaces.
- Returns an `HTMLCollection`, which is a **live collection of elements** that match the class name criteria.

# Key Points:

1. **Case Sensitivity**: The class name search is case-sensitive.
   - So, getElementsByClassName("error") will not find elements with the class name "Error".
2. **Partial Matches**: An element will be included in the collection only if the provided class name is present exactly within its class attribute (not just as a prefix or suffix).
3. **Multiple Classes**: If an element has multiple classes separated by spaces, getElementsByClassName will find it as long as the specified class name is one of them.

## Example

```js
const errorElements = document.getElementsByClassName("error"); // Get all elements with class "error"

// Access and manipulate the elements
for (let i = 0; i < errorElements.length; i++) {
  const element = errorElements[i];
  element.style.backgroundColor = "red"; // Highlight error elements
}
```

## Use Cases:

- Change the style or behavior of elements belonging to a specific class.
- Add event listeners to all elements with a particular class.
- Toggle visibility or classes based on user interactions.
- Perform bulk operations on elements that share a common class.
