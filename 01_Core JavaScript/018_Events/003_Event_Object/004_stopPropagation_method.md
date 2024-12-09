# stopPropagation()

The stopPropagation() method immediately stops the flow of an event through the DOM tree.

- However, it does not stop the browser’s default behavior.

> `stopPropagation()` is a method in JavaScript that is used in event handling to stop the event from propagating (bubbling up) to the parent elements.
>
> - This method is called on an event object, which is passed as an argument to the event handler.

## What is `stopPropagation()`?

In the context of the DOM, event propagation refers to the way events travel through the DOM tree.

There are two main phases of event propagation:

1. **Capturing phase**: The event starts from the root and travels down to the target element.
2. **Bubbling phase**: The event starts from the target element and bubbles up to the root.

By default, most events bubble up, meaning they propagate from the target element to the parent elements.

- The `stopPropagation()` method prevents this bubbling, meaning the event won't propagate to ancestor elements.

```js
let btn = document.querySelector("#btn");

btn.addEventListener("click", function (event) {
  console.log("The button was clicked!");
  event.stopPropagation();
});

document.body.addEventListener("click", function (event) {
  console.log("The body was clicked!");
});
```

Without the stopPropagation() method, you would see two messages on the Console window.

However, the click event never reaches the body because the `stopPropagation()` was called on the click event handler of the button.

### What does `stopPropagation()` do?

When you call `event.stopPropagation()`, it prevents the event from moving up the DOM tree.

- This can be useful when you want to handle the event only at the specific element where it was triggered and prevent any parent elements from also responding to the event.

## When to use `stopPropagation()`?

- **Prevent Parent Handlers from Executing**: When you have multiple event handlers attached to parent and child elements, and you want to ensure that only the child element's handler executes.
- **Avoid Unintended Side Effects**: When an event handler on a parent element should not be triggered by events occurring on its children.
- **Control Event Flow**: When you need precise control over which elements respond to an event and which do not.

## Example

Here's an example to illustrate the use of `stopPropagation()`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>stopPropagation Example</title>
  </head>
  <body>
    <div id="parent" style="border: 2px solid black; padding: 20px;">
      Parent
      <div id="child" style="border: 2px solid red; padding: 20px;">Child</div>
    </div>

    <script>
      document
        .getElementById("parent")
        .addEventListener("click", function (event) {
          alert("Parent clicked");
        });

      document
        .getElementById("child")
        .addEventListener("click", function (event) {
          alert("Child clicked");
          event.stopPropagation(); // Prevents the parent click handler from executing
        });
    </script>
  </body>
</html>
```

In this example:

- Clicking on the "Child" div will show an alert saying "Child clicked" and will not trigger the parent's click handler because `event.stopPropagation()` is called.
- Clicking on the "Parent" div outside the "Child" div will show an alert saying "Parent clicked".
