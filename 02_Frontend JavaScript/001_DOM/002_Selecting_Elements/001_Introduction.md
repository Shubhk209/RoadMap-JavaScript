# Introduction

**The DOM API provides several methods for accessing elements within an HTML document.**

## **By ID**

**Method**: **`document.getElementById(id)`**

**Use case**: When you have a unique identifier (ID) assigned to an element.

- This is the most specific and efficient way to **_access a single element_**.

```javascript
const button = document.getElementById("submitButton");
```

## **By Tag Name:**

**Method**: **`document.getElementsByTagName(tagName)`**

**Use case**: _When you want to access all elements with a specific tag name_ (e.g., all p elements for paragraphs).

- This **returns** an **`array-like object`**, so you need to access elements by index.

```javascript
const paragraphs = `document.getElementsByTagName("p")`;
```

## `By Class Name`

**Method**: document.getElementsByClassName(className)

**Use case**: When you want to **_access all elements with a specific class name_**.

- Similar to getElementsByTagName, it **_returns an array-like object_**.

```javascript
const highlightedText = document.getElementsByClassName("highlight");
```

## `CSS Selectors`

**Methods**: `document.querySelector(selector)` and `document.querySelectorAll(selector)`
**Use case**: When you want to target elements based on more complex criteria, like combining tag names, IDs, classes, and attributes. querySelector returns the first matching element, while querySelectorAll returns an array-like object.

```javascript
const firstImage = document.querySelector("img.product-image");
```
