# Introduction

**JavaScript (JS) is a `lightweight`, `interpreted`, or `just-in-time` compiled programming language.**

**JavaScript was invented by `Brendan Eich` in `1995`, and became an ECMA standard in `1997`.**

**`ECMAScript` is the official name of the language.**

**If Html is language of web content and CSS is language of web style.**

- JavaScript is the language of Web Applications that bring all of this together.
- We’re in new era of web development where JavaScript is becoming the primary language of for everything both in the browser, on the server, or even on our computer.

**JavaScript is constantly evolving rapidly because it has become essential part of web platform and all of these different things and names encapsulate a discrete [distinct: recognizably different in nature from something else of a similar type] aspect of the language itself or how it’s implemented or how it’s worked with or a tool or framework built on used with it.**

## **Points to Note :book:**

1. **The Core language**; sometimes referred to as **`VANILLA JavaScript`** or **`VANILLA JS`**.

   - Everything else is built on the top of JavaScript itself.

2. **ECMAScript**; named as **_`European Computer Manufacturing Association`_**, **_`ECMA`_**.

   1. This group in charge of defining the specification for JavaScript.
   2. **It is not a language itself**, but the **`official description`** of how the language should be interpreted by browser.
      1. _This is meant to ensure that when we write JavaScript, it behaves the same way no matter what browser is used._
   3. **_S6, ES2015, ES2017, ES2020 etc._**, refers to the **features defined in the ECMAScript**, but not necessary supported by modern browser.
   4. Using some version of ECMAScript, we typically need to use a tool **_Babel.js_** to convert the code back into JavaScript the current browser can read.

3. **TypeScript**: Abstracted version of JavaScript with additional features added which JavaScript lacks.

   1. It is typically having the `.ts` file extension.
   2. TypeScript and Coffee Script and all variations of JavaScript as dialects of JavaScript.

4. **_JavaScript Framework_** are tools written in JavaScript to render content of the web in the form of application.

   1. It allows us to write JavaScript-based front-end application.
   2. JavaScript Framework like `React` or `React.js`, `Vue`, `Angular` or `Angular.js`.
   3. They all add abstraction layer on the top of the JavaScript to do thing in a more streamlined and efficient way.
   4. For example, react use JSX or JavaScript XML which simplify how we mix JavaScript and HTML.
   5. It comes with Built tools (like `Babel`, `npm`, `Web pack`, `Gulp`), to automate the processes of optimizing human readable JavaScript into code optimized for browser for the best performance.

5. **Node.js**: JavaScript has migrated from the browser to server, so we can write JavaScript to run the backend as well as the frontend of our applications.
   1. It is ubiquitous [very common] JavaScript server runtime used for this purpose.

# JavaScript as Lightweight

**JavaScript is considered lightweight due to several key characteristics:**

1. **File Size:** JavaScript files are typically small and compact, making them efficient for loading and execution in web browsers and other environments.
   1. While newer versions introduce more features, techniques like minification and code splitting can optimize size.
2. **Resource Consumption:** JavaScript is `inherently interpreted`, meaning it's executed line by line without prior compilation.
   1. This reduces the upfront resource burden compared to compiled languages.
   2. However, complex or poorly optimized code can still impact performance.
3. **Runtime Footprint:** Modern browsers implement sophisticated JavaScript engines that dynamically allocate memory and garbage collect unused references.
   1. This minimizes the JavaScript code's direct footprint in memory.
4. **Ease of Integration:** JavaScript can be directly embedded in HTML, enabling seamless interaction within web pages without external dependencies. This contributes to its lightweight approach.

# Javascript as interpreted or Just in Time compiled Language.

JavaScript actually falls somewhere in between being **purely interpreted** and **fully compiled**, due to a technique called **_Just-in-Time (JIT) compilation_**.

## Traditional Interpretation:

**Code is read and executed line by line by an interpreter.**

**No prior conversion to machine code occurs.**

### Advantages:

1. Simple and fast to start execution.
2. Easier debugging.

### Disadvantages:

1. Can be slower than compiled languages, especially for complex tasks.
2. Less efficient resource usage.

## Traditional Compilation:

**Code is translated into machine code before execution.**  
**This machine code is specific to the target platform.**

### Advantages:

1. Faster execution speed, especially for repeated tasks.
2. More efficient resource usage.

### Disadvantages:

1. Slower start-up time due to compilation.
2. Harder to debug due to lack of direct source code mapping.

## JavaScript's JIT Compilation:

**JavaScript engines employ JIT compilers that translate portions of code into machine code on the fly, just before execution.**

### This combines advantages of both approaches:

1. **Fast execution**: JIT-compiled code often runs much faster than interpreted code.
2. **Dynamic adaptation**: The compiler can optimize code based on usage patterns, leading to even further performance improvements.
3. **Faster start-up**: Compared to fully compiled languages, no upfront compilation is needed.

### Disadvantages:

1. May not be as fast as fully compiled languages for all situations.
2. Debugging can be slightly more challenging due to the dynamic compilation process.

## In essence:

- JavaScript is primarily interpreted initially.
- Modern engines use JIT compilation to optimize performance dynamically.
- This hybrid approach offers a good balance between speed, efficiency, and ease of development.

# JavaScript is a prototype-based

**Instead of classes like in many object-oriented languages, JavaScript uses prototypes for inheritance.**

- Each object has a prototype, which acts as a blueprint for its properties and methods.
- New objects inherit properties and methods from their prototypes.

```javascript
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.drive = function () {
  console.log(`Driving ${this.brand} ${this.model}`);
};

const myCar = new Car("Toyota", "Camry");
myCar.drive(); // Output: "Driving Toyota Camry"
```

# Multi-paradigm:

**JavaScript doesn't force you to stick to one programming style.**

- You can use elements of object-oriented programming (OOP), imperative programming (step-by-step instructions), and declarative programming (describing what you want rather than how).

## Example:

1. Object-oriented: Encapsulates data (properties) and related actions (methods) within objects, promoting modularity and code reusability.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("Alice", 30);
person.greet(); // Output: "Hello, my name is Alice and I am 30 years old."
```

2. Imperative: Employs step-by-step instructions, often using loops and variables, to control the program flow and modify data.

```javascript
function sumOfNumbers(numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

const numbers = [1, 2, 3, 4, 5];
const sum = sumOfNumbers(numbers);
console.log(`Sum of numbers: ${sum}`); // Output: "Sum of numbers: 15"
```

3. Declarative: Focuses on **"what"** needs to be achieved rather than **"how"** to achieve it, often using functions and higher-order functions to express logic concisely.

```javascript
// sorting
const fruits = ["apple", "banana", "orange", "cherry"];
const sortedFruits = fruits.sort((a, b) => a.localeCompare(b));
console.log(`Sorted fruits: ${sortedFruits}`); // Output: "Sorted fruits: [apple, banana, cherry, orange]"

// mapping
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => number * number);
console.log(`Squares: ${squares}`); // Output: "Squares: [1, 4, 9, 16, 25]"

// Data Reduction
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(`Sum: ${sum}`); // Output: "Sum: 15"

// set operation
const fruits1 = new Set(["apple", "banana", "orange"]);
const fruits2 = new Set(["banana", "pineapple", "mango"]);
const uniqueFruits = new Set([...fruits1, ...fruits2]);
console.log(`Unique fruits: ${uniqueFruits}`); // Output: "Unique fruits: [apple, banana, mango, orange, pineapple]"
```
