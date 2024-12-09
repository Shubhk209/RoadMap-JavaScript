# Element Object

> It is the object that is part of JavaScript, which represents an HTML element in the Document Object Model.

In JavaScript, element objects represent HTML elements in a document.

- They are crucial for interacting with and manipulating the DOM (Document Object Model).

## Creating Element Objects

While you can't directly create element objects from scratch, you can access existing elements in the DOM or create new ones using the following methods:

### Accessing Existing Elements:

1. **`getElementById`**: Retrieves an element by its ID.

   ```javascript
   var element = document.getElementById("myElement");
   ```

2. **`getElementsByTagName`**: Returns a collection of elements with a specified tag name.

   ```javascript
   var elements = document.getElementsByTagName("div");
   ```

3. **`getElementsByClassName`**: Returns a collection of elements with a specified class name.

   ```javascript
   var elements = document.getElementsByClassName("myClass");
   ```

4. **`querySelector`**: Selects the first element that matches a CSS selector.

   ```javascript
   var element = document.querySelector(".myClass");
   ```

5. **`querySelectorAll`**: Selects all elements that match a CSS selector.
   ```javascript
   var elements = document.querySelectorAll(".myClass");
   ```

### Creating New Elements:

1. **`createElement`**: Creates a new element with the specified tag name.
   ```javascript
   var newElement = document.createElement("div");
   ```

---

