# id Property

In the context of the Document Object Model (DOM), `element.id` refers to two things:

### 1. **Property:**

`element.id` is a property of the `Element` interface in JavaScript.
It represents the unique identifier (ID) assigned to an HTML element using the `id` attribute.

### 2. **Accessing the ID:**

You can access the ID value of an element using the dot notation `element.id`. This returns a string containing the ID assigned to the element.

## How it works:

### **HTML**

In HTML, elements can have an `id` attribute. This attribute specifies a unique identifier for that element within the document. The value assigned to the `id` attribute becomes the element's ID.

**Example:**

```html
<div id="main-content">This is the main content.</div>
```

### **JavaScript**

In JavaScript, you can access the DOM, which is a representation of the HTML document. The `element.id` property allows you to retrieve the ID assigned to a specific element within the DOM.

**Example:**

```javascript
const mainContentElement = document.getElementById("main-content");
console.log(mainContentElement.id); // Output: "main-content"
```

## key points

1. **Uniqueness:** IDs should be unique within a document. This allows you to easily target specific elements for manipulation using JavaScript.
2. **getElementById:** The `document.getElementById(id)` method is a common way to access an element by its ID. It takes the ID value as a string argument and returns the corresponding element object if found, otherwise it returns `null`.
3. **Case Sensitivity:** IDs are case-sensitive. So, "myElement" and "MyElement" are considered different IDs.

## **Alternatives**

While `getElementById` is efficient for elements with unique IDs, you can also use other methods like `querySelector` or `querySelectorAll` to target elements based on various selectors, including class names, tag names, or other attributes.

## Accessing and Setting `element.id`

### Accessing the `element.id` Property

To access the value of the `id` attribute of an HTML element, you can use the `getElementById` method and then reference the `id` property of the returned element:

```javascript
// Get the element by its ID
const myElement = document.getElementById("myElement");

// Access the ID value
const elementId = myElement.id;
console.log(elementId); // Output: "myElement"
```

### Setting the `element.id` Property

You can change the `id` attribute of an element by directly assigning a new value to the `id` property:

```javascript
// Get the element by its ID
const myElement = document.getElementById("oldId");

// Change the ID
myElement.id = "newId";
```
