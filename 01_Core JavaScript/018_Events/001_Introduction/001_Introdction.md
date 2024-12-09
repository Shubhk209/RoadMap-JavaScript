# JavaScript Events

An event is an action that the web browser can detect and respond to, like a mouse click or a page load.

- Web browsers spot and react to actions like mouse clicks or page loads - these are events.
- Picture this: you want an alert to pop up when someone clicks a button.

For example, you might want to display an alert when a user clicks a button.

Events can have handlers - `special functions` that kick into gear when the event happens.

- These handlers also called `listeners`, keep an ear out for the event and spring into action when it occurs.

## **Example**

**HTML**

```html
<button id="btn">Click Me!</button>
```

**Javascript**

```js
// Select the button element with the id 'btn' and store it in the variable 'btn'
let btn = document.querySelector("#btn");

// Define a function named 'handleClick' that shows an alert when called
function handleClick() {
  alert("It was clicked!");
}

// Add an event listener to the button stored in 'btn'
// When the button is clicked, the 'handleClick' function will be executed
btn.addEventListener("click", handleClick);
```

## How it works.

1. First, select the button with the id `btn` by using the `querySelector()` method.
2. Second, define a function called `handleClick()` as an event handler.
3. Third, register an event handler using the `addEventListener()` so that when users click the button, the `display()` function will execute.

### A shorter way to register an event handler.

**Anonymous function**

```js
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  alert("It was clicked!");
});
```

**Arrow Function**

```js
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  alert("It was clicked!");
});
```
