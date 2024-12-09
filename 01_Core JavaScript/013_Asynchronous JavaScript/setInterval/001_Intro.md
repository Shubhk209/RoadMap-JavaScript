# Javascript setInterval()

The setInterval() method repeats a block of code at every given timing event.

The commonly used syntax of JavaScript setInterval is:

```js
setInterval(function, milliseconds);

```

Its parameters are:

1. **function** - a function containing a block of code
2. **milliseconds** - the time interval between the execution of the function

The `setInterval()` method returns an intervalID which is a positive integer.

## JavaScript clearInterval()

The program executes a block of code at every specified time interval.

- If you want to stop this function call, then you can use the `clearInterval()` method.

The syntax of clearInterval() method is:

```js
clearInterval(intervalID);
```

Here, the `intervalID` is the return value of the setInterval() method.
