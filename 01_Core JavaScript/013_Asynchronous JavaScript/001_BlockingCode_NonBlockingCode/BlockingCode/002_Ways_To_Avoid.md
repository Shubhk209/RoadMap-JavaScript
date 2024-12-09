# How to Avoid Blocking Code in JavaScript

Blocking code can make your JavaScript applications unresponsive and sluggish.

## 1. **Go Asynchronous**

### 1. **Promises:**

A way to handle asynchronous tasks by representing a future value or result.

- A promise is like a promise in real life. When you order a pizza online, the restaurant promises to deliver it.
- The promise can either be fulfilled (pizza delivered) or rejected (pizza not delivered due to some issue).
  Handle asynchronous tasks with ease using Promises, which represent future outcomes—success or failure.

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### 2. **Async/Await**

A more readable way to write code that handles asynchronous tasks, built on top of Promises.

- Instead of waiting for a promise to be fulfilled using `.then()`, you use await to pause the execution of the code until the promise is fulfilled, making it look like synchronous (step-by-step) code.

A more readable way to work with Promises, making asynchronous code appear synchronous.

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

### 3. **Callbacks**

A function passed into another function to be executed later.

- Imagine you order a pizza, and the restaurant asks for your number to call you when it’s ready.
- The restaurant calling you back is like a callback function—it’s executed after the main task (making the pizza) is done.

Although older, callbacks are still in use, particularly in some legacy libraries.

```javascript
fetch("https://api.example.com/data", (response) => {
  response.json().then((data) => console.log(data));
});
```

---

- **(response) => {...}**: This defines an anonymous function (a function without a name) that will be executed when the fetch operation completes. (Callback function)

## 2. **Offload Heavy Tasks with Web Workers**

- For CPU-intensive tasks, use Web Workers to handle processing in a separate thread, keeping the main thread free.

  ```javascript
  // Worker script (worker.js)
  self.onmessage = (event) => {
    const result = /* Perform heavy computation */ self.postMessage(result);
  };

  // Main script
  const worker = new Worker("worker.js");
  worker.postMessage(data);
  worker.onmessage = (event) => {
    console.log(event.data); // Result from the worker
  };
  ```

---

## 3. **Optimize Your Code**

### 1. **Simplify Calculations**

- **Before:** Suppose you have a function that calculates the sum of all numbers from 1 to `n` by looping through each number.
  ```javascript
  function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  ```
- **After:** You can simplify this by using a mathematical formula to calculate the sum directly, which is much faster, especially for large numbers.
  ```javascript
  function sumUpTo(n) {
    return (n * (n + 1)) / 2;
  }
  ```

### 2. **Break Down Tasks**

- **Before:** Imagine you have a function that processes a large array of data all at once, which could block the main thread for a while.
  ```javascript
  function processLargeArray(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(data[i] * 2);
    }
    return result;
  }
  ```
- **After:** Break the task into smaller chunks that can be processed asynchronously, preventing the main thread from being blocked.

  ```javascript
  function processLargeArrayInChunks(data) {
    let result = [];
    let chunkSize = 1000;

    function processChunk(startIndex) {
      for (
        let i = startIndex;
        i < Math.min(startIndex + chunkSize, data.length);
        i++
      ) {
        result.push(data[i] * 2);
      }
      if (startIndex + chunkSize < data.length) {
        setTimeout(() => processChunk(startIndex + chunkSize), 0);
      }
    }

    processChunk(0);
    return result;
  }
  ```

### 3. **Choose the Right Data Structures**

- **Before:** Let’s say you need to frequently look up items in a list. Using an array to store data and checking if an item exists can be slow.
  ```javascript
  let items = [1, 2, 3, 4, 5];
  function itemExists(item) {
    return items.includes(item);
  }
  ```
- **After:** Use a `Set`, which is optimized for fast lookups, making it a better choice when you need to check for the presence of items frequently.
  ```javascript
  let items = new Set([1, 2, 3, 4, 5]);
  function itemExists(item) {
    return items.has(item);
  }
  ```

## 4. **Synchronize Animations with `requestAnimationFrame`**

- For smooth animations, use `requestAnimationFrame` to align with the browser's refresh rate, minimizing unnecessary work.
  ```javascript
  function animate() {
    // Update animation state
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  ```

---

## 5. **Use Timers Wisely**

- `setTimeout` and `setInterval` are helpful, but avoid setting intervals that are too short, as they can degrade performance.
