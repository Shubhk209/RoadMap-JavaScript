## Spread Operator With Object

We can also use the spread operator with object literals.

```js
let obj1 = { x: 1, y: 2 };
let obj2 = { z: 3 };

// add obj1 and obj2 without spread operator
let obj3 = { obj1, obj2 };

// use the spread operator to add
// members of obj1 and obj2 to obj3
let obj4 = { ...obj1, ...obj2 };

console.log("obj3 =", obj3);
console.log("obj4 =", obj4);
```

**Output**

```js
obj3 = { obj1: { x: 1, y: 2 }, obj2: { z: 3 } };
obj4 = { x: 1, y: 2, z: 3 };
```

Here, the properties of obj1 and obj2 are added to obj3 using the spread operator.

However, when we add those two objects to obj4 without using the spread operator, we get obj1 and obj2 as keys for obj4.
