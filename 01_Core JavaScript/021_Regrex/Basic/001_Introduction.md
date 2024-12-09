# RegEx in Javascript

Regular expressions, often abbreviated as regex, are a powerful tool in JavaScript for matching text patterns.

- They allow you to search for specific characters, combinations of characters, or even complex patterns within strings.

**This is a sequence of character that define a search pattern in a form or text.**

- They use a special syntax with literal characters and metacharacters to represent patterns.
- Metacharacters have special meanings within the regex, such as `.` (matches any character) or `*` (matches the preceding character zero or more times).

> **The RegExp Object is a regular expression with added Properties and Methods.**

# Applications

1. Grabbing HTML tags
2. Trimming white spaces
3. Removing duplicate text
4. Finding or verifying card numbers
5. Form Validation
6. Matching Ip addresses
7. Matching a specific word in a large block of text.

# **Creating Regular Expressions in JavaScript**

**There are two ways to create a regular expression object in JavaScript:**

1. **Literal Notation:** This is the most common way and involves enclosing the pattern between forward slashes (**`/`**).
   - Optionally, you can add flags after the second slash to specify how the matching should be done (e.g., **`/pattern/i`** for case-insensitive matching).

```javascript
const regex = /ab+c/; // Matches "abc", "abbbc", etc.
```

1. **RegExp Constructor:** This method offers more flexibility as it allows you to create the regex dynamically at runtime. It takes the pattern as the first argument and an optional string for flags as the second argument.

```javascript
const regex = new RegExp("d(og)", "i"); // Matches "dog" and "Dog" (case-insensitive)
```

# **Using Regular Expressions**

Once you have a regex object, you can use various methods on strings or the `RegExp` object itself to perform operations based on the pattern:

- **`test(string)`:** Checks if the regex matches somewhere in the string and returns `true` or `false`.
- **`match(string)`:** Returns an array of all matches of the regex in the string, or `null` if no match is found.
- **`search(string)`:** Returns the index of the first occurrence of the regex in the string, or -1 if not found.
- **`replace(string, replacement)`:** Replaces all matches of the regex in the string with the replacement string.
