# What Is Object Destructuring in JavaScript?

Object destructuring is a unique technique that allows you to neatly extract an object’s value into new variables.

## Without using the object destructuring

```js
const profile = {
  firstName: "Oluwatobi",
  lastName: "Sofela",
  website: "codesweetly.com",
};

const firstName = profile.firstName;
const lastName = profile.lastName;
const website = profile.website;

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"
```

## With using the object destructuring

```js
const profile = {
  firstName: "Oluwatobi",
  lastName: "Sofela",
  website: "codesweetly.com",
};

const { firstName: firstName, lastName: lastName, website: website } = profile;

const { firstName, lastName, website } = profile;

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"
```

# Object destructuring assignment

**Suppose you have a person object with two properties: `firstName` and `lastName`.**

```js
let person = {
  firstName: "John",
  lastName: "Doe",
};
```

## With using the object destructuring

**Before **ES6**, when you want to assign properties of the `person` object to variables, we typically do it like this:**

```js
let firstName = person.firstName;
let lastName = person.lastName;

console.log(firstName); // John
console.log(lastName); // Doe
```

## Without using the object destructuring

**`ES6` introduces the object destructuring syntax that provides an alternative way to assign properties of an object to variables:**

In this example, the `firstName` and `lastName` properties are assigned to the `fName` and `lName` variables respectively.

In this syntax:

```js
let { property1: variable1, property2: variable2 } = object;
```
