# Event bubbling

An event starts at the most specific element and then flows upward toward the least specific element (the document or even window).

Assuming that you have the following HTML document:
**HTML**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JS Event Demo</title>
  </head>
  <body>
    <div id="container">
      <button id="btn">Click Me!</button>
    </div>
  </body>
</html>
```

When you click the button, the click event occurs in the following order:

1. button
2. div with the id container
3. body
4. html
5. document

The `click event` first occurs on the button which is the element that was clicked.

- Then the click event goes up the DOM tree, firing on each node along its way until it reaches the document object.

## Uses of Event Bubbling

1. **Event Delegation**: Allows attaching a single event listener to a parent element to manage events for all its children, even those added later.
2. **Simplified Code**: Reduces the need for multiple event listeners, leading to cleaner and more maintainable code.
3. **Performance**: Can improve performance by reducing the number of event listeners in the DOM, especially for dynamically generated elements.
4. **Centralized Handling**: Provides a centralized place to handle events, making it easier to manage and debug.

## What if We Don’t Have Event Bubbling?

1. **Redundant Listeners**: Would require attaching individual event listeners to each element, increasing the complexity and reducing maintainability.
2. **Performance Hit**: More listeners mean higher memory consumption and potentially slower performance.
3. **Difficult Maintenance**: Managing events for dynamically created elements would be cumbersome and error-prone.

## Event Bubbling Prevention

If you have nested elements and an event occurs on a child element, that event bubbles up to its parent elements.

- `preventDefault()` does not interfere with this process.
- To stop the event from bubbling, you would use `stopPropagation()`.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Stop Propagation Example</title>
  </head>
  <body>
    <div id="parentDiv">
      <button id="myButton">Click me</button>
    </div>

    <script>
      document
        .getElementById("myButton")
        .addEventListener("click", function (event) {
          event.stopPropagation(); // Prevents the event from bubbling up to the parent div
          alert("Button clicked, but event did not bubble up!");
        });

      document
        .getElementById("parentDiv")
        .addEventListener("click", function () {
          alert("Div clicked!");
        });
    </script>
  </body>
</html>
```
