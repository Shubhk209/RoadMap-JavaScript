# JavaScript Logical Operators

It returns a `boolean value` by evaluating boolean expressions.

```js
const x = 5,
  y = 3;

console.log(x < 6 && y < 5);

// Output: true
```

Here, `&&` is the logical operator `AND`. Since both the boolean expressions `x < 6` and `y < 5` are true, evaluating them with the `&&` operator also results in true.

## Logical Operators

| z                   | Operator                       | Syntax                                                 | Description |
| ------------------- | ------------------------------ | ------------------------------------------------------ | ----------- |
| `&&` (Logical AND)  | `expression1 && expression2`   | true only if both expression1 and expression2 are true |
| `\|\|` (Logical OR) | `expression1 \|\| expression2` | true if either expression1 or expression2 is true      |
| `!` (Logical NOT)   | `!expression`                  | false if expression is true and vice versa             |
