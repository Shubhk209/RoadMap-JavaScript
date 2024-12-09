# Node

The `Node interface` is the primary datatype for the entire Document Object Model.

- It represents one node in document tree.
- The node may be an element, an attribute, a text node, among others.

Every `object` in the DOM tree is called a node, generically.

- It can be any type of built-in DOM element, like `document` itself.
- Or, with any **HTML tag**, defined in the HTML document, for example, `<div>` or `<p>`.

These are the very basics of the DOM and describe different parts of an HTML document.

- Nodes have a specific `type`, as well as `properties` and `methods`.

## There are different node types

1. **Element nodes**: Represent HTML elements and their content.
   - Html Tags like `<p>`, `<span>`, etc.
2. **Text nodes**: Contain the actual text content within an element.
3. **Attribute nodes**: Define attributes of elements (e.g., id, class).
4. **Comment nodes**: Used to include comments within the HTML that are not displayed on the page.

> **Note**: A `specific type of node `that represent html and its content is known as `Element`.
> The node is the generic type of element.

# Element

> The Element interface is a subclass of Node, and it also represents an Element in the HTML or XML document.
>
> - It provides methods and properties to act on the element itself and its attributes.

**A specific type of node that represents an HTML tag and its content.**

- Examples: `<div>`, `<p>`, `<h1>`, `<img>`, etc.
- It provides access and manipulation of the elements through tag names or IDs.

## The relationship between the Node and Element types.

<div style="text-align: center;">
    <img src="../000_images/node_element.png" alt="centered image" />
</div>

> Note that the `getElementById()` and `querySelector()` returns an object with the `Element type` while `getElementsByTagName()` or `querySelectorAll()` returns **NodeList** which is a **collection of nodes**.

## Node.ELEMENT_NODE

Element is a specific type of node with the node type `Node.ELEMENT_NODE`.
