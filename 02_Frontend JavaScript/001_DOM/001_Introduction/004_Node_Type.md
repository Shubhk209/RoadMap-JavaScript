# Node Types

Each node in the DOM tree is identified by a node type.

- JavaScript uses integer numbers to determine the node types.

| Node Type                       | Node Type Constant                | Description                                         | Example                                               |
| ------------------------------- | --------------------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| **Element Node**                | `ELEMENT_NODE` (1)                | Represents an element in the document               | `<div></div>`                                         |
| **Attribute Node**              | `ATTRIBUTE_NODE` (2)              | Represents an attribute of an element               | `<div class="example"></div>`                         |
| **Text Node**                   | `TEXT_NODE` (3)                   | Represents the textual content of an element        | `<div>Hello, World!</div>`                            |
| **CDATA Section Node**          | `CDATA_SECTION_NODE` (4)          | Represents a CDATA section in the document          | `<![CDATA[Some data]]>`                               |
| **Entity Reference Node**       | `ENTITY_REFERENCE_NODE` (5)       | Represents an entity reference (rarely used)        | `&entity;`                                            |
| **Entity Node**                 | `ENTITY_NODE` (6)                 | Represents an entity (rarely used)                  | `<!ENTITY entity "some value">`                       |
| **Processing Instruction Node** | `PROCESSING_INSTRUCTION_NODE` (7) | Represents a processing instruction in the document | `<?xml-stylesheet type="text/xsl" href="style.xsl"?>` |
| **Comment Node**                | `COMMENT_NODE` (8)                | Represents a comment in the document                | `<!-- This is a comment -->`                          |
| **Document Node**               | `DOCUMENT_NODE` (9)               | Represents the entire document (the root node)      | The whole HTML or XML document                        |
| **Document Type Node**          | `DOCUMENT_TYPE_NODE` (10)         | Represents the document type declaration            | `<!DOCTYPE html>`                                     |
| **Document Fragment Node**      | `DOCUMENT_FRAGMENT_NODE` (11)     | Represents a minimal document object                |                                                       |
| **Notation Node**               | `NOTATION_NODE` (12)              | Represents a notation declared in the DTD           | `<!NOTATION notationName PUBLIC "publicId">`          |

## DOM Node Types: Usage, Capabilities, and Use Cases

| Node Type                       | Node Type Constant                | Used For                                   | What We Can Do With It                                 | Common Use Case                                                   |
| ------------------------------- | --------------------------------- | ------------------------------------------ | ------------------------------------------------------ | ----------------------------------------------------------------- |
| **Element Node**                | `ELEMENT_NODE` (1)                | Representing elements                      | Access and manipulate HTML elements                    | Adding, removing, or modifying elements like `<div>`, `<p>`, etc. |
| **Attribute Node**              | `ATTRIBUTE_NODE` (2)              | Representing attributes                    | Access and manipulate attributes of elements           | Changing the class, id, or other attributes of an element         |
| **Text Node**                   | `TEXT_NODE` (3)                   | Representing text content                  | Read and modify the text content of elements           | Changing the text inside a `<div>`, `<p>`, etc.                   |
| **CDATA Section Node**          | `CDATA_SECTION_NODE` (4)          | Representing CDATA sections                | Store text that should not be parsed by the XML parser | Including code snippets in XML that should not be parsed          |
| **Entity Reference Node**       | `ENTITY_REFERENCE_NODE` (5)       | Representing entity references             | Reference entities defined in the DTD                  | Using entities for special characters in XML documents            |
| **Entity Node**                 | `ENTITY_NODE` (6)                 | Representing entities                      | Define reusable content in DTD                         | Declaring an entity for reuse in XML                              |
| **Processing Instruction Node** | `PROCESSING_INSTRUCTION_NODE` (7) | Representing processing instructions       | Include instructions for XML processing                | Linking an XML document to a stylesheet                           |
| **Comment Node**                | `COMMENT_NODE` (8)                | Representing comments                      | Add, read, and modify comments                         | Including notes or explanations within the HTML or XML document   |
| **Document Node**               | `DOCUMENT_NODE` (9)               | Representing the entire document           | Access and manipulate the whole document               | Getting the root of the DOM tree                                  |
| **Document Type Node**          | `DOCUMENT_TYPE_NODE` (10)         | Representing document type declarations    | Identify the document type and DTD used                | Specifying the type of document, like `<!DOCTYPE html>`           |
| **Document Fragment Node**      | `DOCUMENT_FRAGMENT_NODE` (11)     | Representing a minimal document object     | Create a lightweight document structure                | Building a temporary DOM tree to insert into the main document    |
| **Notation Node**               | `NOTATION_NODE` (12)              | Representing notations declared in the DTD | Refer to external entities and processing instructions | Defining a notation in DTD for use in XML                         |

### Use Cases in Detail

1. **Element Node (`ELEMENT_NODE`)**:

   - **Used For**: Representing elements like `<div>`, `<p>`, `<a>`, etc.
   - **What We Can Do**: Add, remove, or modify elements.
   - **Common Use Case**: Adding a new paragraph to a document dynamically.

   ```javascript
   let newParagraph = document.createElement("p");
   newParagraph.textContent = "This is a new paragraph.";
   document.body.appendChild(newParagraph);
   ```

2. **Attribute Node (`ATTRIBUTE_NODE`)**:

   - **Used For**: Representing attributes of elements.
   - **What We Can Do**: Change element attributes.
   - **Common Use Case**: Changing the class of an element.

   ```javascript
   let element = document.getElementById("myElement");
   element.setAttribute("class", "newClass");
   ```

3. **Text Node (`TEXT_NODE`)**:

   - **Used For**: Representing text within elements.
   - **What We Can Do**: Read and modify text content.
   - **Common Use Case**: Updating the text inside a `<div>`.

   ```javascript
   let element = document.getElementById("myElement");
   element.textContent = "Updated text content";
   ```

4. **CDATA Section Node (`CDATA_SECTION_NODE`)**:

   - **Used For**: Representing CDATA sections in XML.
   - **What We Can Do**: Store data that should not be parsed.
   - **Common Use Case**: Embedding code snippets in XML.

   ```xml
   <![CDATA[
   function example() {
       return 'This code is not parsed';
   }
   ]]>
   ```

5. **Entity Reference Node (`ENTITY_REFERENCE_NODE`)**:

   - **Used For**: Referencing entities.
   - **What We Can Do**: Use predefined entities.
   - **Common Use Case**: Including special characters in XML.

   ```xml
   &copy; 2024
   ```

6. **Entity Node (`ENTITY_NODE`)**:

   - **Used For**: Defining reusable entities in DTD.
   - **What We Can Do**: Reuse content defined in the DTD.
   - **Common Use Case**: Declaring an entity for reuse.

   ```xml
   <!ENTITY example "Example Entity">
   ```

7. **Processing Instruction Node (`PROCESSING_INSTRUCTION_NODE`)**:

   - **Used For**: Embedding processing instructions.
   - **What We Can Do**: Provide instructions for XML processors.
   - **Common Use Case**: Linking to a stylesheet.

   ```xml
   <?xml-stylesheet type="text/xsl" href="style.xsl"?>
   ```

8. **Comment Node (`COMMENT_NODE`)**:

   - **Used For**: Adding comments to documents.
   - **What We Can Do**: Insert, read, and modify comments.
   - **Common Use Case**: Adding notes within HTML or XML.

   ```html
   <!-- This is a comment -->
   ```

9. **Document Node (`DOCUMENT_NODE`)**:

   - **Used For**: Representing the entire document.
   - **What We Can Do**: Access the root of the DOM tree.
   - **Common Use Case**: Accessing the document's root node.

   ```javascript
   let doc = document.documentElement;
   ```

10. **Document Type Node (`DOCUMENT_TYPE_NODE`)**:

    - **Used For**: Specifying document type declarations.
    - **What We Can Do**: Identify the DTD used.
    - **Common Use Case**: Defining the type of document.

    ```html
    <!DOCTYPE html>
    ```

11. **Document Fragment Node (`DOCUMENT_FRAGMENT_NODE`)**:

    - **Used For**: Creating minimal document structures.
    - **What We Can Do**: Build temporary DOM trees.
    - **Common Use Case**: Efficiently inserting multiple elements.

    ```javascript
    let fragment = document.createDocumentFragment();
    let newElement = document.createElement("div");
    fragment.appendChild(newElement);
    document.body.appendChild(fragment);
    ```

12. **Notation Node (`NOTATION_NODE`)**:
    - **Used For**: Declaring notations in DTD.
    - **What We Can Do**: Reference external entities.
    - **Common Use Case**: Defining a notation in DTD.
    ```xml
    <!NOTATION notationName PUBLIC "publicId">
    ```
