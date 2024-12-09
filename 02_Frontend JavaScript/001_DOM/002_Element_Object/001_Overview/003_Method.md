## Methods:

1. **`appendChild`**: Adds a node to the end of the element's child nodes.

   ```javascript
   element.appendChild(newChild);
   ```

2. **`append`**: Adds a node to the end of the element's child nodes.

   ```javascript
   element.append(newChild);
   ```

3. **`removeChild`**: Removes a child node from the element.

   ```javascript
   element.removeChild(childNode);
   ```

4. **`insertBefore`**: Inserts a node before a specified child node.

   ```javascript
   element.insertBefore(newChild, referenceChild);
   ```

5. **`replaceChild`**: Replaces a child node with another node.

   ```javascript
   element.replaceChild(newChild, oldChild);
   ```

6. **`getAttribute`**: Gets the value of an attribute.

   ```javascript
   var attrValue = element.getAttribute("src");
   ```

7. **`setAttribute`**: Sets the value of an attribute.

   ```javascript
   element.setAttribute("src", "newImage.png");
   ```

8. **`removeAttribute`**: Removes an attribute.

   ```javascript
   element.removeAttribute("src");
   ```

9. **`addEventListener`**: Attaches an event listener to the element.

   ```javascript
   element.addEventListener("click", function () {
     alert("Element clicked!");
   });
   ```

10. **`removeEventListener`**: Removes an event listener from the element.

    ```javascript
    element.removeEventListener("click", eventHandlerFunction);
    ```

11. **`classList`**: Manages the element's class names.
    ```javascript
    element.classList.add("newClass");
    element.classList.remove("oldClass");
    element.classList.toggle("activeClass");
    ```
