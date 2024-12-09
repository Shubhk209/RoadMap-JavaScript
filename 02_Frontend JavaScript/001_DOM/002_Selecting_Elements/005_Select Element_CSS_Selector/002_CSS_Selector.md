# Basic CSS Selector.

**Example HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Selectors Example</title>
    <style>
      .example::before {
        content: "Prefix ";
      }
    </style>
  </head>
  <body>
    <div id="unique" class="example" data-role="admin">Unique Element</div>
    <div class="content">
      <p>Content paragraph 1</p>
      <p>Content paragraph 2</p>
      <ul class="menu">
        <li>Menu item 1</li>
        <li>Menu item 2</li>
      </ul>
      <h2>Subtitle</h2>
      <p>First paragraph after subtitle</p>
      <p>Second paragraph after subtitle</p>
    </div>
    <a href="#">Hover me</a>

    <script>
      // JavaScript snippets for different selectors will be added here
    </script>
  </body>
</html>
```

## JavaScript Snippets for Different Selectors

### 1. Universal Selector (`*`)

```javascript
// Select the first element in the document
let firstElement = document.querySelector("*");
console.log(firstElement); // Outputs the <html> element

// Select all elements in the document
let allElements = document.querySelectorAll("*");
console.log(allElements); // Outputs a NodeList of all elements
```

### 2. Type Selector (`element`)

```javascript
// Select the first <p> element
let firstParagraph = document.querySelector("p");
console.log(firstParagraph); // Outputs the first <p> element

// Select all <p> elements
let allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs); // Outputs a NodeList of all <p> elements
```

### 3. Class Selector (`.class`)

```javascript
// Select the first element with the class 'example'
let firstExample = document.querySelector(".example");
console.log(firstExample); // Outputs the element with class 'example'

// Select all elements with the class 'example'
let allExamples = document.querySelectorAll(".example");
console.log(allExamples); // Outputs a NodeList of elements with class 'example'
```

### 4. ID Selector (`#id`)

```javascript
// Select the element with the ID 'unique'
let uniqueElement = document.querySelector("#unique");
console.log(uniqueElement); // Outputs the element with ID 'unique'

// Using querySelectorAll with ID selector is not typical since IDs are unique
let allUniqueElements = document.querySelectorAll("#unique");
console.log(allUniqueElements); // Outputs a NodeList with the element with ID 'unique'
```

### 5. Attribute Selector (`[attribute]` or `[attribute=value]`)

```javascript
// Select the first element with a 'data-role' attribute
let firstDataRole = document.querySelector("[data-role]");
console.log(firstDataRole); // Outputs the element with 'data-role'

// Select all elements with a 'data-role' attribute
let allDataRoles = document.querySelectorAll("[data-role]");
console.log(allDataRoles); // Outputs a NodeList of elements with 'data-role'

// Select all elements with a 'data-role' attribute equal to 'admin'
let adminElements = document.querySelectorAll('[data-role="admin"]');
console.log(adminElements); // Outputs a NodeList of elements with 'data-role="admin"'
```

### 6. Grouping Selector (`,`)

```javascript
// Select the first <div> element or element with the class 'highlight'
let firstDivOrHighlight = document.querySelector("div, .highlight");
console.log(firstDivOrHighlight); // Outputs the first <div> element

// Select all <div> elements and elements with the class 'highlight'
let allDivsAndHighlights = document.querySelectorAll("div, .highlight");
console.log(allDivsAndHighlights); // Outputs a NodeList of <div> elements and elements with class 'highlight'
```

### 7. Combinator Selectors

#### a. Descendant Combinator (` `)

```javascript
// Select the first <p> element inside an element with class 'content'
let firstParagraphInContent = document.querySelector(".content p");
console.log(firstParagraphInContent); // Outputs the first <p> inside '.content'

// Select all <p> elements inside elements with class 'content'
let allParagraphsInContent = document.querySelectorAll(".content p");
console.log(allParagraphsInContent); // Outputs a NodeList of <p> elements inside '.content'
```

#### b. Child Combinator (`>`)

```javascript
// Select the first <li> element that is a direct child of a <ul> with class 'menu'
let firstMenuItem = document.querySelector("ul.menu > li");
console.log(firstMenuItem); // Outputs the first <li> child of 'ul.menu'

// Select all <li> elements that are direct children of <ul> with class 'menu'
let allMenuItems = document.querySelectorAll("ul.menu > li");
console.log(allMenuItems); // Outputs a NodeList of <li> elements that are direct children of 'ul.menu'
```

#### c. General Sibling Combinator (`~`)

```javascript
// Select the first <p> element that follows an <h2>
let firstParagraphAfterSubtitle = document.querySelector("h2 ~ p");
console.log(firstParagraphAfterSubtitle); // Outputs the first <p> after <h2>

// Select all <p> elements that follow an <h2>
let allParagraphsAfterSubtitle = document.querySelectorAll("h2 ~ p");
console.log(allParagraphsAfterSubtitle); // Outputs a NodeList of <p> elements after <h2>
```

#### d. Adjacent Sibling Combinator (`+`)

```javascript
// Select the first <p> element immediately following an <h2>
let firstParagraphAfterH2 = document.querySelector("h2 + p");
console.log(firstParagraphAfterH2); // Outputs the first <p> immediately after <h2>

// Using querySelectorAll with adjacent sibling is not typical since it only targets one element
let allParagraphsAfterH2 = document.querySelectorAll("h2 + p");
console.log(allParagraphsAfterH2); // Outputs a NodeList of the first <p> immediately after <h2>
```

### 8. Pseudo Selectors

#### a. Pseudo-classes

```javascript
// Select the first <a> element that is currently hovered
// This can only be tested interactively; here we select all hovered <a> elements
let allHoveredLinks = document.querySelectorAll("a:hover");
console.log(allHoveredLinks); // Outputs a NodeList of all hovered <a> elements
```

#### b. Pseudo-elements

Pseudo-elements cannot be directly selected with `querySelector` or `querySelectorAll`, but you can style them in CSS:

```css
/* CSS */
.example::before {
  content: "Prefix ";
}
```
