# Introduction to the JavaScript history object.

When you launch the web browser and open a new webpage, the web browser creates a new entry in its history stack.

- If you navigate to another webpage, the web browser also creates a new entry in the history stack.

- The history stack stores the current page and previous pages that you visited.

To manipulate the history stack, you use the history object which is a property of the window object:

```js
window.history;
```

> For the security reason, it’s not possible to query the pages that a user have visited.
>
> - However, you can use the history object to navigate back and forth without knowing the exact URL.

The History object is a part of the Browser Object Model (BOM) in JavaScript. It allows you to interact with the browser's session history, which includes the pages visited in the current tab or frame. Here are some of the main properties and methods of the History object:

## Properties

- **length**: Returns the number of entries in the history stack for the current tab or frame.

## Methods

### 1. **back()**

**Loads the previous URL in the history list, equivalent to clicking the browser's back button.**

```javascript
history.back();
```

### 2. **forward()**

Loads the next URL in the history list, equivalent to clicking the browser's forward button.

```javascript
history.forward();
```

### 3. **go(delta)**:

Loads a specific page from the session history, identified by its relative position to the current page.

- A positive value moves forward, a negative value moves backward.

```javascript
history.go(-1); // Go back one page
history.go(2); // Go forward two pages
```

### 4. **pushState(state, title, [url])**

Adds an entry to the browser's session history stack without causing a page reload.

- This is useful for single-page applications (SPAs).

  ```javascript
  const state = { page_id: 1 };
  const title = "New Page Title";
  const url = "/new-url";
  history.pushState(state, title, url);
  ```

### 5. **replaceState(state, title, [url])**

Modifies the current history entry without creating a new entry.

```javascript
const state = { page_id: 2 };
const title = "Updated Page Title";
const url = "/updated-url";
history.replaceState(state, title, url);
```

## Event

### 1. **popstate**: Fired when the active history entry changes, e.g., when the user navigates to a different state using the browser's back or forward buttons.

```javascript
window.addEventListener("popstate", (event) => {
  console.log(
    "Location: " + document.location + ", State: " + JSON.stringify(event.state)
  );
});
```

## Use Cases

1. **Navigating Pages**: Using `back()`, `forward()`, and `go()` to navigate through the user's browsing history.
2. **Managing State in SPAs**: Using `pushState()` and `replaceState()` to manage navigation and state without reloading the page.
3. **Responding to History Changes**: Listening to the `popstate` event to respond to navigation changes, such as updating the UI based on the current state.
