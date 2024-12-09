# **Event Object**

It is a `special object` that _gets passed as an argument_ to an **event handler function** whenever an event occurs on an HTML element.

- It provides essential information about the event that has taken place, allowing you to react dynamically to user interactions and other events in your web application.

**When the event occurs, the web browser passes an Event object to the event handler:**

```js
let btn = document.querySelector("#btn");

btn.addEventListener("click", function (event) {
  console.log(event.type);
});
```

**Output**

```
'click'
```

## Commonly used properties and methods of the event object

| Property / Method   | Description                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| `bubbles`           | true if the event bubbles                                                                                      |
| `cancelable`        | true if the default behavior of the event can be canceled                                                      |
| `currentTarget`     | the current element on which the event is firing                                                               |
| `defaultPrevented`  | returns true if the `preventDefault()` has been called                                                         |
| `detail`            | more information about the event                                                                               |
| `eventPhase`        | 1 for capturing phase, 2 for target, 3 for bubbling                                                            |
| `preventDefault()`  | cancel the default behavior for the event. This method is only effective if the `cancelable` property is true  |
| `stopPropagation()` | cancel any further event capturing or bubbling. This method only can be used if the `bubbles` property is true |
| `target`            | the target element of the event                                                                                |
| `type`              | the type of event that was fired                                                                               |

> **Note** that the event object is only accessible inside the event handler.
>
> - Once all the event handlers have been executed, the **_event object is automatically destroyed_**.

## What Can We Do with the Event Object?

Here's a detailed explanation with separate code snippets for each of the concepts:

### 1. Determine Event Type

You can check the type of event using the `type` property of the `Event` object.

```html
<button id="eventTypeButton">Click Me</button>
<script>
  document
    .getElementById("eventTypeButton")
    .addEventListener("click", function (event) {
      alert("Event type: " + event.type); // Output: click
    });
</script>
```

### 2. Get Target Element

You can find out which element triggered the event using the `target` property.

```html
<button id="targetButton">Click Me</button>
<script>
  document
    .getElementById("targetButton")
    .addEventListener("click", function (event) {
      alert("Event target: " + event.target.id); // Output: targetButton
    });
</script>
```

### 3. Event Coordinates

You can get the coordinates of the mouse event using the `clientX` and `clientY` properties.

```html
<div id="box" style="width: 100px; height: 100px; background: lightblue;"></div>
<script>
  document.getElementById("box").addEventListener("click", function (event) {
    alert("Coordinates: X=" + event.clientX + ", Y=" + event.clientY);
  });
</script>
```

### 4. Prevent Default Actions

You can prevent the default action associated with an event using the `preventDefault` method.

```html
<a href="https://example.com" id="preventDefaultLink">Go to Example.com</a>
<script>
  document
    .getElementById("preventDefaultLink")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevents the default action of navigating to the link
      alert("Default action prevented");
    });
</script>
```

### 5. Stop Propagation

You can stop the event from bubbling up to other elements using the `stopPropagation` method.

```html
<div id="outer" style="padding: 20px; background: lightcoral;">
  Outer Div
  <div id="inner" style="padding: 20px; background: lightgreen;">Inner Div</div>
</div>
<script>
  document.getElementById("outer").addEventListener("click", function () {
    alert("Outer div clicked");
  });

  document.getElementById("inner").addEventListener("click", function (event) {
    event.stopPropagation(); // Stops the event from bubbling up to the outer div
    alert("Inner div clicked");
  });
</script>
```
