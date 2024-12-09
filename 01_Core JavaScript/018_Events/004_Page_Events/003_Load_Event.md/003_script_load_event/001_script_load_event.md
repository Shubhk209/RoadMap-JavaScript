## Script Load Event

- **When It Fires**: After a JavaScript file has been fully loaded.
- **How to Use**:

  ```javascript
  window.addEventListener("load", checkJSLoaded);

  function checkJSLoaded() {
    let script = document.createElement("script");
    script.addEventListener("load", (event) => {
      console.log("app.js file has been loaded");
    });
    script.src = "app.js";
    document.body.appendChild(script);
  }
  ```