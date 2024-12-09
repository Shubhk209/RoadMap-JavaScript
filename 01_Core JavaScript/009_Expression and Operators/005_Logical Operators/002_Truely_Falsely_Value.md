# Truthy and Falsy Values

JavaScript converts values to booleans in boolean contexts like `if` statements or `logical operators`.

- This process is called `type coercion`.

  - This means JavaScript attempts to convert the value to a boolean (either `true` or `false`).

## **Truthy Values**

**JavaScript sees these as `true` when forced into a boolean.**

They include:

- **Numbers that aren't zero (plus, minus, or with decimals**): `1, -2.5, 1000`
- **Strings with stuff in them**: `"hello", "0", "false"` (empty strings don't count)
- **Objects**: `{}` (even the empty ones)
- **Arrays**: `[]` (yep even empty arrays)
- **Functions**: `function() {}`
- **`true`** (the actual boolean)
- **`NaN`** (Not a Number)

## **Falsy Values**

**These items turn to `false` when forced into a boolean.**

They include:

- `false` (the actual boolean false)
- `0` (zero and its negative twin)
- `""` (a string with nothing in it)
- `null` (shows a value's deliberate absence)
- `undefined` (points to a variable that exists but lacks a value)

# **Understanding the Importance**

Truthy and falsy values are crucial for writing concise and effective JavaScript code, especially in conditional statements and logical operations.

**Example**

```javascript
if (user) {
  // user is truthy (not null or undefined)
  console.log("Welcome, " + user.name);
} else {
  console.log("Please log in.");
}

const message = score ? "Congratulations!" : "Keep practicing.";

if (age >= 18 && hasID) {
  // Both conditions must be truthy
  console.log("You can vote.");
}
```

# Practical Use Cases

Truthy and falsy values offer a variety of practical benefits in JavaScript development.

## **1. Setting Default Values**

You can provide a fallback value if a variable is `null` or `undefined`.

- This is especially helpful when working with user input or API responses.

```javascript
function greetUser(name) {
  const greeting = name || "Guest"; // If name is truthy, use it; otherwise, use "Guest"
  console.log(`Hello, ${greeting}!`);
}

greetUser(); // Output: Hello, Guest! (name is undefined)
greetUser("Alice"); // Output: Hello, Alice!
```

## **2. Short-Circuiting with Logical Operators**

Use the logical AND (`&&`) operator to chain conditions where you only want to proceed if all conditions are truthy.

- Use the logical OR (`||`) operator to provide an alternative value if the first operand is falsy.

```javascript
const isLoggedIn = true;
const hasPermission = "admin";

if (isLoggedIn && hasPermission === "admin") {
  console.log("You can access the admin panel.");
}

const message = score || "No score available."; // Assign score if truthy, otherwise "No score available."
```

## **3. Toggling UI Elements**

Based on truthy/falsy values, you can control the visibility or behavior of UI elements.

```javascript
const errorMessage = ""; // Assume initially no error

if (errorMessage) {
  document.getElementById("error-message").textContent = errorMessage;
  document.getElementById("error-message").style.display = "block";
} else {
  document.getElementById("error-message").style.display = "none";
}
```

## **4. Form Validation**

- You can check if required fields have been filled in before submitting a form.

```javascript
function validateForm() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  if (!username || !email) {
    alert("Please fill in both username and email.");
    return false; // Prevent form submission
  }

  // Form is valid, proceed with submission
  return true;
}
```

# **5. Ternary Operator**

- You can write concise conditional expressions using the ternary operator (`condition ? expression_if_true : expression_if_false`).

```javascript
const age = 16;
const canVote = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(canVote); // Output: Not eligible to vote
```
