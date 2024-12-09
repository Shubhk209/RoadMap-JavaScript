# preventDefault()

**To prevent the default behavior of an event, you use the `preventDefault()` method.**

For example, when you click a link, the browser navigates you to the URL specified in the href attribute:

```html
<a href="https://www.javascripttutorial.net/">JS Tutorial</a>
```

**However, you can prevent this behavior by using the `preventDefault()` method of the event object**:

```js
let link = document.querySelector("a");

link.addEventListener("click", function (event) {
  console.log("clicked");
  event.preventDefault();
});
```

> Note that the `preventDefault()` method does not stop the event from bubbling up the DOM.
>
> - An event can be canceled when its cancelable property is true.

**The `preventDefault()` method in JavaScript is used to avoid executing the default event action.**

- For instance, the default action for the click event on a link in a Web page would be to open the linked page.
- Using `preventDefault()` on the click event prevents that.

Note, though, that preventDefault() doesn't stop the event from propagating up (bubbling) or down (capturing) the DOM tree.

- Control of the event propagation is handled by different techniques and methods, like `stopPropagation()` or `stopImmediatePropagation()`.
