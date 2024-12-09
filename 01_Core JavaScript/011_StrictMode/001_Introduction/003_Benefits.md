# Why Strict Mode

**There are some benefits included in Strict Mode.**

## 1. Error Prevention

**Strict Mode helps catch common coding errors by turning them into explicit exceptions.**

- For example, in non-strict mode, assigning a value to an undeclared variable would create a global variable.
- In Strict Mode, this would throw a ReferenceError, preventing accidental global variable leakage.

```js
// Non-strict mode
undeclaredVariable = 42; // No error, creates a global variable

// Strict mode
("use strict");
undeclaredVariable = 42; // Throws a ReferenceError
```
