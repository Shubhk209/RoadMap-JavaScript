# What is Closure?

**A function together(bundled together) with its lexical scope forms a closure.**

- A function along with its lexical scope.

**Closures are functions that refer to independent (free) variables.**

- In other words, the function defined in the closure ‘remembers’ the environment in which it was created.

> Note: **Free variables are variables that are _neither locally declared_ nor _passed as parameter_.**

## **Example**

```javascript
function numberGenerator() {
  // Local “free” variable that ends up within the closure
  var num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number(); // 2
```

**Explaination**
In the example above, the function **`numberGenerator`** creates a local `free` variable `num` (a number) and `checkNumber` (a function which prints num to the console).

- The function checkNumber doesn’t have any local variables of its own — however, it does have access to the variables within the outer function, numberGenerator, because of a closure.
- Therefore, it can use the variable num declared in numberGenerator to successfully log it to the console even after numberGenerator has returned.

## **Example 2**

```js
function sayHello() {
  var say = function () {
    console.log(hello);
  };
  // Local variable that ends up within the closure
  var hello = "Hello, world!";
  return say;
}
var sayHelloClosure = sayHello();
sayHelloClosure(); // ‘Hello, world!’
```

Notice how the variable hello is defined after the anonymous function — but can still access the hello variable.

- This is because the hello variable has already been defined in the function `scope` at the time of creation, making it available when the anonymous function is finally executed.

## Behaviour when outer function return the inner function

# Reference

1. [JavaScript Clouse by Dmitri](https://dmitripavlutin.com/javascript-closure/)
2. [JavaScript Clouse by Freecodecamp](hhttps://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/)
