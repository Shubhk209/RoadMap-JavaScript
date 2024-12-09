# Event Capturing

**The capture phase is the part of the DOM event flow in which the event flows from the root of the document hierarchy down to the target element.**

- It is then followed by an event bubbling phase, which travels from the target element back up to the root.
- Event capturing helps you catch all the events while they crawl through the hierarchy of the DOM from the outermost ancestor to the target element.

## Use of Event Capturing

1. **Fine grained control**: It allows getting a chance to intercept events at any ancestor element before it reaches the target. This could be helpful in validation or preprocessing tasks.
2. **Order of execution**: It ensures that event handlers registered under the capturing phase run before those set for the bubbling phase. It thus gives control over the order of handling of an event.
3. **Consistency**: It brings consistency in event handling behavior across different elements and their parents.
   - It handles events in the same way as event bubbling.

## Without event capturing:

We would only have one phase of event propagation, `the bubbling phase.`

- We would hence be in a position to handle events only once they have reached the target element and started to bubble up.
- It would then prove very difficult to intercept events prior to their reaching the target element for validation or preprocessing.
- Not much control over the order by which handlers may be invoked, which leads to possible inconsistencies of event handling logic.

## Real-Life Analogy: Concert Security Check

Imagine you're attending a concert at a large venue.

- There are multiple security checkpoints you must pass through before entering the main concert hall.

### 1. **Outer Security Check**

Before entering the venue premises, security guards at the outer perimeter check your ticket and ID to ensure you're at the right place.

### 2. **Middle Security Check**

As you move closer to the entrance, another set of security personnel checks your belongings for prohibited items like large bags or dangerous objects.

### 3. **Inner Security Check**

Just before you enter the concert hall, a final security check ensures that everyone is properly screened and ready to enjoy the event.

**Code Example: Event Capturing in Action**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Concert Security Check Example</title>
    <style>
      .outer {
        padding: 20px;
        background-color: #f0f0f0;
      }
      .middle {
        padding: 20px;
        background-color: #e0e0e0;
      }
      .inner {
        padding: 20px;
        background-color: #d0d0d0;
      }
    </style>
  </head>
  <body>
    <div class="outer">
      <div class="middle">
        <div class="inner">
          <button id="checkButton">Enter Concert Hall</button>
        </div>
      </div>
    </div>

    <script>
      // Event listener with capturing phase enabled
      document.querySelector(".outer").addEventListener(
        "click",
        function () {
          console.log("Outer security check passed (capturing phase)");
        },
        true
      );

      document.querySelector(".middle").addEventListener(
        "click",
        function () {
          console.log("Middle security check passed (capturing phase)");
        },
        true
      );

      document.querySelector(".inner").addEventListener(
        "click",
        function () {
          console.log("Inner security check passed (capturing phase)");
        },
        true
      );

      document
        .getElementById("checkButton")
        .addEventListener("click", function () {
          console.log("Entered concert hall!");
          // Perform actions after passing all security checks
        });
    </script>
  </body>
</html>
```

**Explanation**

- **HTML Structure**: We have three nested `div` elements (`outer`, `middle`, and `inner`), each representing a security checkpoint.
- **Event Listeners**: Each `div` element has a click event listener attached with event capturing enabled (`true` as the third parameter of `addEventListener`).
- **Button Click**: When you click the "Enter Concert Hall" button, it triggers an event that bubbles up through the DOM hierarchy.

**Event Flow**

1. **Capturing Phase**:

   - When you click the button, the click event starts from the `document` root and travels down through each `div` element (`outer`, `middle`, `inner`) due to event capturing.
   - Event handlers attached with capturing (`true`) are executed in the order of the DOM hierarchy: outer → middle → inner.

2. **Bubbling Phase**:
   - After the capturing phase (not explicitly shown in this example), the event starts bubbling up from the target (`inner` div) back to the `document`.
   - Event handlers attached without capturing (or with capturing set to `false` or omitted) execute during this phase.

**Console Output Example**

If you click the "Enter Concert Hall" button, the console will log:

```
Outer security check passed (capturing phase)
Middle security check passed (capturing phase)
Inner security check passed (capturing phase)
Entered concert hall!
```
