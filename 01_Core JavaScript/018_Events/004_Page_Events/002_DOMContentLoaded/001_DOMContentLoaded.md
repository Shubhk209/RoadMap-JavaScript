# The `DOMContentLoaded` event in JavaScript

The `DOMContentLoaded` event is triggered when the initial HTML document has been completely loaded and parsed.

- It doesn't wait for stylesheets, images, and subframes to finish loading, making it faster than the `load` event.
- All deferred scripts `<script defer src="...">` and modules `<script type="module">` have been downloaded and executed.
- It **_cannot be cancellable_**.
- It is linked to the `document` object.

## **Usage**:

- Commonly used to execute JavaScript code that manipulates the DOM or initializes functionalities as soon as the document structure is ready.
- Ideal for setting up event listeners or manipulating the DOM without waiting for all resources to load.

## **Event Listener**:

To listen for the `DOMContentLoaded` event, we can use the `addEventListener` method.

```javascript
document.addEventListener("DOMContentLoaded", function () {
  // Your code here
});
```

- This ensures that your code runs as soon as the DOM is ready.

## **Comparison with `load` Event**:

1. `load`: Fires when the entire page, including all dependent resources such as stylesheets and images, has finished loading.
2. `DOMContentLoaded`: Fires when the HTML is loaded and parsed, but before resources like images and stylesheets are fully loaded.

## **Performance Benefits**:

Using `DOMContentLoaded` can lead to faster initialization of JavaScript code, improving user experience by making interactive elements available sooner.

## **Browser Support**:

Well-supported across all modern browsers, ensuring consistent behavior in most environments.

## **Example**:

```javascript
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  // Additional initialization code here
});
```

## **Fallback for Older Browsers**:

- In older browsers that may not support `DOMContentLoaded`, a common fallback is to use the `window.onload` event.

```javascript
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  // Your initialization code
}
```
