# Selecting Elements in JavaScript

Selecting elements from the DOM is a fundamental part of working with web pages. There are various methods provided by the DOM API to select elements.

## getElementById(id):

> It is a method of the document object that returns an `Element object` representing an HTML element with an id matching a specified string.

- Selects an element by its unique id attribute.
- Returns the `element object` if found, or `null` if not found.
- Use this when you have a single element with a well-defined ID.

**Syntax**

```js
const element = document.getElementById(id);
```

> Please note that the method matches ID case-sensitively.
>
> - For example, the 'root' and 'Root' are different.
