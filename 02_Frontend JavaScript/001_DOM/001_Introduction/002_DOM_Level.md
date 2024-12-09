# Introduction

The DOM (Document Object Model) is divided into different levels, each representing a specific version and set of features.

- These DOM levels are akin to versioned specifications such as HTML4, HTML5, and CSS2.1.
- They outline how the Document Object Model should function and evolve over time.

# DOM Level 0

**Early stage of web development with disparate browser scripting methods.**

**No standardization, leading to browser-specific approaches.**

**Basic capabilities:**

- Accessing elements by ID, name, or tag name.
- Modifying element content.
- Handling user events.
- Basic document structure navigation.

# DOM Level 1

**Standardized DOM specification by W3C in 1998.**

**Core features:**

1. **Element access and manipulation**: Methods to access and manipulate elements within a document.
2. **Attribute handling**: Work with element attributes, retrieve, set, add, or remove attributes dynamically.
3. **Document traversal**: Navigate the document structure, access parent, child, and sibling elements of a node.
4. **Event handling**: Attach event handlers to elements, respond to events like clicks, mouse movements, etc.
5. **Node creation and deletion**: Dynamically create new elements and nodes, add them to the document, or remove existing nodes.

# DOM Level 2

**Released in 2000, building upon Level 1.**

**Added features:**

1. **Enhanced element access**: New methods and properties for accessing and manipulating elements.
2. **CSS styling**: Access and modify the inline styles of elements.
3. **Event capturing and propagation**: Fine control over the order of event handlers invocation as events propagate.
4. **XML support**: Extended API to support XML documents, namespaces, XPath queries.
5. **DOM traversal and manipulation**: New methods for easier traversal and manipulation of the document structure.
6. **Improved error handling**: More robust error handling mechanism.

# DOM Level 3

**Released in 2004, expanded capabilities.**

**Core features:**

1. **Load and save XML**: Methods to load and save XML documents, parse XML from string or URL, serialize DOM trees.
2. **XPath support**: Native support for XPath, navigate XML documents based on path or criteria.
3. **Validation and schema support**: Validate a DOM document against a schema, access schema-related information.
4. **DOM events**: New event types, mechanisms for event registration, greater control over event handling.
5. **Keyboard events**: Handle keyboard-related interactions more effectively.
6. **Mutation events**: Notify about changes made to the DOM tree, react to modifications.
7. **Document range**: Select and manipulate a portion of the document.

# DOM Level 4

**Published as a W3C recommendation in November 2015.**

**Key features:**

1. **DOM Parsing and Serialization**: Fine-grained control over parsing and serializing XML and HTML documents.
2. **Mutation Observers**: Track changes to the DOM, receive notifications when specific mutations occur.
3. **Custom Elements**: Define custom HTML elements with specific behavior and functionality.
4. **Improved Events**: Enhancements to event handling mechanism, new event types, improved interfaces.
5. **Shadow DOM**: Create encapsulated and isolated DOM subtrees, useful for component-based web applications.
