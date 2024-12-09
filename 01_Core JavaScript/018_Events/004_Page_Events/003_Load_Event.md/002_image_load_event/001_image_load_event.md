# Image Load Event

**When It Fires**: After an image has been fully loaded.

**How to Use**

### 1. **addEventListener Method**

```html
<img id="logo" />
<script>
  let logo = document.querySelector("#logo");
  logo.addEventListener("load", (event) => {
    console.log("Logo has been loaded!");
  });
  logo.src = "logo.png";
</script>
```

### 2.**onload Attribute**:

```html
<img id="logo" src="logo.png" onload="console.log('Logo loaded!')" />
```

### 3.**Dynamically Created Image**:

```javascript
window.addEventListener("load", () => {
  let logo = document.createElement("img");
  logo.addEventListener("load", (event) => {
    console.log("The logo has been loaded");
  });
  document.body.appendChild(logo);
  logo.src = "logo.png";
});
```
