# **Initial Example**:

JavaScript is placed in the `<head>` of the page.

- The script tries to reference an element (`<button>`) in the `<body>` before it has been loaded.
- This causes an error because the button is not available when the script runs.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JS DOMContentLoaded Event</title>
    <script>
      let btn = document.getElementById("btn");
      btn.addEventListener("click", (e) => {
        // handle the click event
        console.log("clicked");
      });
    </script>
  </head>
  <body>
    <button id="btn">Click Me!</button>
  </body>
</html>
```

## **Fix with DOMContentLoaded Event**:

Wrap the script inside a `DOMContentLoaded` event listener to ensure the button is available when the script runs.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JS DOMContentLoaded Event</title>
    <script>
      document.addEventListener("DOMContentLoaded", () => {
        let btn = document.getElementById("btn");
        btn.addEventListener("click", () => {
          // handle the click event
          console.log("clicked");
        });
      });
    </script>
  </head>
  <body>
    <button id="btn">Click Me!</button>
  </body>
</html>
```

## **Best Practice for Script Placement**:

Placing JavaScript in the `<head>` can cause bottlenecks and rendering delays.

- It is better to move the script before the closing `</body>` tag.
- In this case, there is no need for the `DOMContentLoaded` event since the elements are already loaded.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JS DOMContentLoaded Event</title>
  </head>
  <body>
    <button id="btn">Click Me!</button>
    <script>
      let btn = document.getElementById("btn");
      // add an event listener
      btn.addEventListener("click", (e) => {
        console.log("clicked");
      });
    </script>
  </body>
</html>
```
