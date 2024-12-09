# Blocking Code

It is any code that stops the execution of other code until it finishes.

- It's like the broken-down car; it blocks the flow of traffic.

**JavaScript is a single-threaded language**, meaning it can only execute one piece of code at a time.

- This is like having a single lane on a road. Imagine a traffic jam caused by a broken-down car; this is similar to what happens when blocking code occurs in JavaScript.

## Why is Blocking Code Bad?

In JavaScript, particularly in web applications, we want our code to be responsive.

- We don't want the user to be stuck waiting for something to finish before they can interact with the page.
- Blocking code can lead to a frozen or unresponsive interface, which is a terrible user experience.

## Common Culprits of Blocking Code

1. **Complex calculations:** Intensive mathematical operations.
2. **I/O operations:** Reading or writing large files without proper handling.

### Examples of Blocking Code:

1. **Long-Running Calculations**:

   - **Complex mathematical operations** or **large data processing** can cause blocking. When JavaScript handles a heavy computation, it uses up the CPU, preventing other tasks from being processed.

   ```javascript
   function complexCalculation() {
     let result = 0;
     for (let i = 0; i < 1e9; i++) {
       // Large loop causing blocking
       result += Math.sqrt(i);
     }
     return result;
   }

   // Blocking: The browser or Node.js environment will be unresponsive until this finishes
   console.log(complexCalculation());
   console.log("This message is delayed until the calculation is complete.");
   ```

2. **I/O Operations (without proper handling)**:

   - **Reading or writing large files**, or **making network requests** without asynchronous handling can block the execution of other code.

   **Example 1: Reading a Large File Synchronously**

   ```javascript
   const fs = require("fs");

   // Blocking: Synchronously reading a large file
   const data = fs.readFileSync("/path/to/large-file.txt", "utf8");
   console.log("File read complete"); // Only runs after the file is fully read

   console.log("This message is delayed until the file read is complete.");
   ```

   **Example 2: Synchronous Network Request**

   ```javascript
   const https = require("https");

   function fetchDataSync(url) {
     const req = https.request(url, (res) => {
       let data = "";
       res.on("data", (chunk) => {
         data += chunk;
       });
       res.on("end", () => {
         console.log("Data received:", data);
       });
     });
     req.end();
   }

   // Blocking: Making a network request synchronously
   fetchDataSync("https://jsonplaceholder.typicode.com/posts/1");
   console.log("This message is delayed until the data is fetched.");
   ```
