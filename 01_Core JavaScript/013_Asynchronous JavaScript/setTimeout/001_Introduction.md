# Timing events

In JavaScript, a block of code can be executed in specified time intervals.

- These time intervals are called `timing events`.

There are two methods for executing code at specific intervals. They are:

1. setInterval()
2. setTimeout()

# The setTimeout() method

It executes a block of code after the specified time.

- The method executes the code only once.

The commonly used syntax of JavaScript setTimeout is:

```js
setTimeout(function, milliseconds,arg1, arg2);
```

**Parameters**

1. `function`: After the specified time period, this is the function that is executed.
2. `milliseconds`: The delay time is expressed in milliseconds.
3. `arg1, arg2`: If needed, these are the optional parameters.

# How does it works?

1.  **Scheduling**

    - JavaScript doesn't run the function right away when you use setTimeout(function, milliseconds).
    - It takes these steps instead:

      - Makes a timer object with the delay you set (in milliseconds).

      - Puts this timer object in a line managed by the browser's JavaScript engine.

2.  **JavaScript Event Loop**

    - JavaScript uses one thread for its event loop. This means it can do one thing at a time.
    - The event loop keeps working on tasks from different lines:
      - The main line holds code that needs to run now, like function calls and setting variables.
      - The timer line holds the timer objects made by setTimeout() calls.

3.  Time's Up! When a timer object in the line hits its set delay:
    - The timer queue drops the item.
    - The event loop's main queue receives the timer object's linked function.
4.  **Execution**
    The function runs when it hits the front of the main queue (after any ongoing code wraps up).
