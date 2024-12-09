# Syntax for the `constructor` Property

The `constructor` property is automatically available on any JavaScript array (or object). 

You can access it directly using dot notation.

## Basic Syntax:

```javascript
arrayName.constructor;
```

## Example:

```javascript
let fruits = ["apple", "banana", "cherry"];

// Accessing the constructor property
console.log(fruits.constructor);
// Output: function Array() { [native code] }
```

## Creating a New Array Using the Constructor:

We can also use the `constructor` property to create a new array that shares the same prototype as the original array.

```javascript
let fruits = ["apple", "banana", "cherry"];

// Creating a new array using the same constructor
let newFruits = new fruits.constructor("mango", "pineapple");

console.log(newFruits);
// Output: ['mango', 'pineapple']
```

In this syntax:

- `arrayName.constructor` gives you the function (in this case, the `Array` function) that was used to create the array.
- `new arrayName.constructor(...)` creates a new instance of an array using that constructor.
