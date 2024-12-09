# Select Element By CSS Selectors

In JavaScript, there are two powerful methods for selecting elements based on CSS selectors:

1. `querySelector(selector)`
2. `querySelectorAll(selector)`

## **querySelector(selector):**

- Takes a single argument, `selector`, which is a string representing a valid CSS selector.
- Searches the entire document, including the root node, for the **first** element that matches the selector.
- Returns the first matching element as an **Element** object, or `null` if no element is found.

```js
let element = parentNode.querySelector(selector);
```

**The selector is a CSS selector or a group of CSS selectors to match the descendant elements of the parentNode.**

**If the selector is not valid CSS syntax, the method will raise a `SyntaxError exception`.**

**If no element matches the CSS selectors, the querySelector() method returns `null`.**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <p class="text">Hello World</p>
    </div>
    <script>
      // Selecting an element with a valid CSS selector
      var validSelector = document.querySelector(".container .text");
      console.log(validSelector); // Outputs: <p class="text">Hello World</p>

      // Attempting to select an element with an invalid CSS selector
      try {
        var invalidSelector = document.querySelector(".container..text");
      } catch (e) {
        console.error(e); // Outputs: SyntaxError: The string did not match the expected pattern.
      }

      // Attempting to select an element that does not exist
      var nonExistentSelector = document.querySelector(
        ".container .non-existent"
      );
      console.log(nonExistentSelector); // Outputs: null
    </script>
  </body>
</html>
```

## **querySelectorAll(selector):**

- Takes a single argument, `selector`, similar to `querySelector`.
- Searches the entire document for all elements that match the selector.
- Returns a static `NodeList` of elements that match the CSS selector.
  - If no element matches, it returns an empty NodeList.

> Note that the NodeList is an array-like object, not an array object.
>
> - However, in modern web browsers, you can use the forEach() method or the for...of loop.

**To convert the NodeList to an array, you use the `Array.from()` method like this**:

```js
let nodeList = document.querySelectorAll(selector);
let elements = Array.from(nodeList);
```
