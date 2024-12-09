# Event Cancellation.

Handling event cancellation in JavaScript involves **_preventing the default action associated with an event_** and **_stopping the event from propagating_** further.

## Prevent Default Action

To prevent the default action associated with an event (e.g., submitting a form or following a link), you can use the `preventDefault()` method:

```javascript
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  // Handle the form submission via JavaScript
  console.log("Form submission canceled");
});
```

## Stop Event Propagation

To stop an event from propagating (bubbling up or capturing down) through the DOM, you can use the `stopPropagation()` method:

```javascript
document.querySelector("button").addEventListener("click", function (event) {
  event.stopPropagation();
  // Handle the button click without allowing it to bubble up
  console.log("Button click propagation stopped");
});
```

## Combining Both Methods

In many cases, you might want to both prevent the default action and stop the event from propagating.

Here's an example with a button inside a form:

```javascript
document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault(); // Prevents the form from submitting
  event.stopPropagation(); // Stops the click event from bubbling up
  // Handle the button click
  console.log(
    "Button clicked, form submission prevented, event propagation stopped"
  );
});
```

## Example: Canceling an Anchor Tag Click

Here's an example where clicking on a link does not navigate to the URL:

```javascript
document.querySelector("a").addEventListener("click", function (event) {
  event.preventDefault(); // Prevents the default action of navigating to the link
  console.log("Link click canceled");
});
```

## Full Example

Consider a form with a button that cancels form submission and logs a message:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Event Cancellation Example</title>
  </head>
  <body>
    <form id="myForm">
      <input type="text" name="name" placeholder="Name" />
      <button type="submit">Submit</button>
    </form>

    <script>
      document
        .getElementById("myForm")
        .addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent the form from submitting
          console.log("Form submission canceled");
        });

      document
        .querySelector("button")
        .addEventListener("click", function (event) {
          event.stopPropagation(); // Stop the click event from bubbling up
          console.log("Button click propagation stopped");
        });
    </script>
  </body>
</html>
```

## Removing Event Listeners

To remove an event listener, you can use the `removeEventListener` method.

- This requires you to reference the exact same function that was used to add the event listener.

Here’s an example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Remove Event Listener Example</title>
  </head>
  <body>
    <button id="myButton">Click me</button>

    <script>
      function handleClick() {
        console.log("Button clicked");
      }

      // Adding the event listener
      const button = document.getElementById("myButton");
      button.addEventListener("click", handleClick);

      // Removing the event listener
      setTimeout(() => {
        button.removeEventListener("click", handleClick);
        console.log("Event listener removed");
      }, 5000); // Remove after 5 seconds
    </script>
  </body>
</html>
```

In this example, the event listener for the button click is removed after 5 seconds.

## Event Listeners with `once` Option

The `once` option is a more straightforward way to remove an event listener after it has been triggered once. You can pass an options object as the third parameter to `addEventListener`, with `once` set to `true`.

Here’s an example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Once Event Listener Example</title>
  </head>
  <body>
    <button id="myButtonOnce">Click me once</button>

    <script>
      const buttonOnce = document.getElementById("myButtonOnce");

      buttonOnce.addEventListener(
        "click",
        function () {
          console.log("Button clicked and listener removed");
        },
        { once: true }
      );
    </script>
  </body>
</html>
```

In this example, the event listener is automatically removed after the first click on the button.

### Full Example

Combining both concepts, here’s a comprehensive example with both manual removal and the `once` option:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Event Listener Example</title>
  </head>
  <body>
    <button id="manualRemoveButton">Click me (manual remove)</button>
    <button id="onceButton">Click me (once)</button>

    <script>
      // Manual removal example
      function handleManualClick() {
        console.log("Manual button clicked");
      }

      const manualButton = document.getElementById("manualRemoveButton");
      manualButton.addEventListener("click", handleManualClick);

      // Remove the event listener manually after 5 seconds
      setTimeout(() => {
        manualButton.removeEventListener("click", handleManualClick);
        console.log("Manual event listener removed");
      }, 5000);

      // Once option example
      const onceButton = document.getElementById("onceButton");
      onceButton.addEventListener(
        "click",
        function () {
          console.log("Once button clicked and listener removed");
        },
        { once: true }
      );
    </script>
  </body>
</html>
```
