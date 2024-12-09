# **Introduction - document.getElementById(Id)**

- This method retrieves a **specific HTML element** from the document based on its unique identifier, the id attribute.
  - Since element IDs are required to be **unique** if specified, they're a useful way to get access to a specific element quickly.
- Think of it like calling out an element by its name in a classroom.

## Example

```html
<h1 id="main-heading">This is the main heading</h1>

<script>
  const heading = document.getElementById("main-heading");
  const heading = document.getElementById("main");
  console.log(heading);
</script>
```

### Output

```html
<h1>This is the main heading</h1>
null
```

# Key Point

1. **`getElementById`** is **case-sensitive**.
   - So, `main-heading` and `Main-Heading` are different IDs.
2. If no element with the specified ID exists, the method returns **`null`**.
3. It's generally `faster` than other methods like getElementsByTagName because it targets a single element.
4. Use it when you know the element's ID for direct and efficient access.
