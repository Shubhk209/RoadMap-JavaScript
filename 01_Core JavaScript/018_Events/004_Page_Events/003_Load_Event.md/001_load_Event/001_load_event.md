# Window Load Event

**When It Fires**: After the entire webpage (HTML), including all resources (JavaScript files, CSS files, images), has fully loaded.

**How to Use**

### 1.**addEventListener Method**:

```javascript
window.addEventListener("load", (event) => {
  console.log("The page has fully loaded");
});
```

### 2.**onload Property**:

```javascript
window.onload = (event) => {
  console.log("The page has fully loaded");
};
```

### 3.**In HTML** (Legacy approach):

```html
<body onload="console.log('Loaded!')"></body>
```

