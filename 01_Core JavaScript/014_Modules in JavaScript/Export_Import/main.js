// main.js
import multiply, { PI, add } from "./mathUtils.js";

const radius = 5;
const area = multiply(radius, radius); // Using default export (multiply)
const sum = add(10, 20); // Using named export (add)

console.log(`The value of PI is: ${PI}`); // Output: The value of PI is: 3.14159
console.log(`The area of a circle with radius ${radius} is: ${area}`); // Output: The area of a circle with radius 5 is: 25
console.log(`The sum of 10 and 20 is: ${sum}`); // Output: The sum of 10 and 20 is: 30

// Get elements from the DOM
const piElement = document.getElementById("pi");
const areaElement = document.getElementById("area");
const sumElement = document.getElementById("sum");

// Display results on the page
piElement.textContent = `The value of PI is: ${PI}`;
areaElement.textContent = `The area of a circle with radius ${radius} is: ${area}`;
sumElement.textContent = `The sum of 10 and 20 is: ${sum}`;
