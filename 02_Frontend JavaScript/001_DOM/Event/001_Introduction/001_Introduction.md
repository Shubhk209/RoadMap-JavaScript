# What is events?

**An event is an action that occurs as per the user's instruction as input and gives the output in response.**

In JavaScript, events are occurrences that trigger the execution of specific code.

- These events can be user interactions with the web page, or browser actions.
- They allow web pages to be dynamic and respond to user input, making them more interactive.

# Event Types:

There are many different built-in events that can occur, such as:

1. **User interactions**: clicks, mouseovers, key presses, form submissions, etc.
2. **Page loading and unloading**
3. **Browser window resizing or scrolling**
4. **Media events** (video playing, pausing, etc.)

# **Event Handlers**

These are JavaScript functions that define what code should be executed in response to a specific event.

Event handlers can be attached to HTML elements using two main methods:

## **HTML Event Attributes**

These attributes are directly added to the HTML element itself, like `onclick` or `onload`. The value of the attribute is the name of the JavaScript function to be executed.

```html
<button onclick="handleClick()">Click me</button>

<script>
  function handleClick() {
    alert("Button clicked!");
  }
</script>
```

## **`addEventListener` Method:**

This method provides more flexibility for attaching event handlers in JavaScript.

- It allows you to specify the event type, the function to be executed, and whether the event listener should be executed during the bubbling or capturing phase (event propagation concept).

```html
<button id="myButton">Click me</button>

<script>
  const button = document.getElementById("myButton");
  button.addEventListener("click", handleClick);

  function handleClick() {
    alert("Button clicked!");
  }
</script>
```
