# Comparison operators

It compare two values and return a boolean value (true or false).

```js
const a = 3,
  b = 2;
console.log(a > b);

// Output: true
```

Here, we have used the `>` comparison operator to check whether a (whose value is `3`) is greater than b (whose value is `2`).

- Since `3` is greater than `2`, we get true as output.
  > Note: In the above example, `a > b` is called a `boolean expression` since evaluating it results in a `boolean value`.

| Operator | Meaning                  | Example   | Result |
| -------- | ------------------------ | --------- | ------ |
| ==       | Equal to                 | 3 == 5    | false  |
| !=       | Not equal to             | 3 != 4    | true   |
| ===      | Strictly equal to        | 3 === "3" | false  |
| !==      | Strictly not equal to    | 3 !== "3" | true   |
| >        | Greater than             | 4 > 4     | false  |
| <        | Less than                | 3 < 3     | false  |
| >=       | Greater than or equal to | 4 >= 4    | true   |
| <=       | Less than or equal to    | 3 <= 3    | true   |
