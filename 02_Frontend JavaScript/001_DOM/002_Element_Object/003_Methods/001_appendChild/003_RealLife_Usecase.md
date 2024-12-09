# 1. **Dynamically Adding a List Item**

`HTML` is the structure of your webpage, defining elements like headings, paragraphs, lists, etc.

`JavaScript` is the behavior, allowing you to manipulate the HTML elements dynamically.

`appendChild()` is a JavaScript method used to add a new child element to the **end of a parent element**.

**HTML Structure:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>To-Do List</title>
  </head>
  <body>
    <ul id="todo-list"></ul>
    <input type="text" id="task-input" />
    <button onclick="addTask()">Add Task</button>
    <script src="script.js"></script>
  </body>
</html>
```

**Explanation:**

- We have an empty unordered list (`<ul>`) with the id `todo-list` to hold the tasks.
- An input field (`<input>`) to enter new tasks.
- A button to trigger the `addTask()` function.
- A script tag (`<script>`) to include our JavaScript code.

**JavaScript Code (script.js):**

```javascript
function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value;
  taskInput.value = ""; // Clear input field

  const todoList = document.getElementById("todo-list");
  const listItem = document.createElement("li");
  listItem.textContent = taskText;
  todoList.appendChild(listItem);
}
```

**Explanation:**

1. The `addTask()` function is called when the button is clicked.
2. It gets the value from the input field.
3. Creates a new list item (`<li>`) element.
4. Sets the text content of the list item to the task text.
5. Gets the `todo-list` element.
6. Appends the new list item to the `todo-list` using `appendChild()`.

**How it works:**
When you click the "Add Task" button:

1. The JavaScript code creates a new list item element.
2. The new list item is added to the end of the `todo-list` using `appendChild()`.
3. The browser updates the page to display the new list item.

# 2. Creating a Dynamic Product Card

**HTML Structure:**

```html
<div id="product-container"></div>
```

**JavaScript:**

```javascript
function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productName = document.createElement("h3");
  productName.textContent = product.name;

  const productPrice = document.createElement("p");
  productPrice.textContent = "$" + product.price;

  productCard.appendChild(productName);
  productCard.appendChild(productPrice);

  document.getElementById("product-container").appendChild(productCard);
}
```

**Explanation:**

This code creates a function `createProductCard` that takes a product object as input. It creates a product card, adds the product name and price, and then appends the entire card to the product container.


