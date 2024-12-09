# JavaScript try...catch...finally Statement

**The `try`, `catch` and `finally` blocks are used to handle exceptions (a type of an error). Before you learn about them, you need to know about the types of errors in programming.**

## Types of Errors

In programming, there can be two types of errors in the code:

1. Syntax Error: Error in the syntax.

   - For example, if you write `consol.log('your result');`, the above program throws a syntax error. The spelling of console is a mistake in the above code.

2. Runtime Error: This type of error occurs during the execution of the program.
   - For example, calling an invalid function or a variable.
   - These errors that occur during runtime are called exceptions.

## Way to handle exceptions

1. try...catch Statement
2. try...catch...finally Statement

### Syntax

```js
try {
  // body of try
} catch (error) {
  // body of catch
}
finally() {
    // codes that gets executed anyway
}
```

The try...catch statement is used to handle the exceptions.

**The main code is inside the `try` block.**

- While executing the try block, if any error occurs, it goes to the `catch` block.

**The `catch` block handles the errors as per the catch statements.**

- If no error occurs, the code inside the try block is executed and the catch block is skipped.

**The `finally` block executes both when the code runs successfully or if an error occurs.**
