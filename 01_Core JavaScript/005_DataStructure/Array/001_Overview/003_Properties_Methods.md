# Properties and Methods of JavaScript Arrays

| **Property/Method** | **Description**                                                | **Example**                                |
| ------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| `length`            | Returns the number of elements in the array.                   | `arr.length`                               |
| `push()`            | Adds one or more elements to the end of the array.             | `arr.push(4, 5)`                           |
| `pop()`             | Removes the last element from the array and returns it.        | `arr.pop()`                                |
| `shift()`           | Removes the first element from the array and returns it.       | `arr.shift()`                              |
| `unshift()`         | Adds one or more elements to the beginning of the array.       | `arr.unshift(0)`                           |
| `indexOf()`         | Returns the first index at which a given element can be found. | `arr.indexOf(3)`                           |
| `includes()`        | Checks if an array contains a certain element.                 | `arr.includes(2)`                          |
| `slice()`           | Returns a new array from a portion of the original array.      | `arr.slice(1, 3)`                          |
| `splice()`          | Adds/removes elements from the array at a specific index.      | `arr.splice(2, 1, 'new')`                  |
| `concat()`          | Merges two or more arrays into a new array.                    | `arr.concat([4, 5])`                       |
| `join()`            | Joins all elements of an array into a string.                  | `arr.join('-')`                            |
| `forEach()`         | Executes a function for each array element.                    | `arr.forEach(item => console.log(item))`   |
| `map()`             | Creates a new array with the results of calling a function.    | `arr.map(item => item * 2)`                |
| `filter()`          | Creates a new array with elements that pass a test function.   | `arr.filter(item => item > 2)`             |
| `reduce()`          | Reduces the array to a single value by applying a function.    | `arr.reduce((acc, item) => acc + item, 0)` |
| `find()`            | Returns the first element that satisfies a test function.      | `arr.find(item => item > 2)`               |
| `sort()`            | Sorts the elements of an array in place.                       | `arr.sort((a, b) => a - b)`                |
| `reverse()`         | Reverses the order of the elements in an array.                | `arr.reverse()`                            |
| `every()`           | Checks if every element in the array satisfies a test.         | `arr.every(item => item > 0)`              |
| `some()`            | Checks if at least one element in the array satisfies a test.  | `arr.some(item => item > 2)`               |
