# **Loading States of an HTML Document**:

1.  **"loading"**: The document is still loading.
2.  **"interactive"**: The document has been fully read but resources like images may still be loading.
3.  **"complete"**: The document and all its resources (like images) are fully loaded.

## **`document.readyState` Property**:

- Stores the current loading state of the document.

## **DOMContentLoaded Event**:

- If the document is already loaded when a DOMContentLoaded event handler is registered, the event handler will not execute.

## **Setting Up a Handler Using `readyState`**:

- To ensure the event handler runs, check the `readyState` property.
- If the document is still loading, add an event listener for DOMContentLoaded.
- If the document is already loaded, execute the handler immediately.

## Fallback Mechanism:

By checking the document.readyState, you can handle cases where the DOMContentLoaded event does not fire or is not supported.

- If readyState is `loading`, it means the document is still loading, so you set up a DOMContentLoaded event listener.
- If readyState is not `loading` (i.e., "interactive" or "complete"), it means the DOM has already been parsed, so you can execute your handler immediately.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JS DOMContentLoaded Event</title>
    <script>
      function handleReady() {
        console.log("DOM ready");
      }
      if (document.readyState === "loading") {
        console.log("The document is loading...");
        document.addEventListener("DOMContentLoaded", handleReady);
      } else {
        console.log("The document has been loaded.");
        handleReady();
      }
    </script>
  </head>
  <body></body>
</html>
```

**Explanation**

- `handleReady` function logs 'DOM ready'.
- If `document.readyState` is "loading", logs 'The document is loading...' and sets up a DOMContentLoaded event listener.
- If `document.readyState` is not "loading" (i.e., "interactive" or "complete"), logs 'The document has been loaded.' and immediately calls `handleReady`.
