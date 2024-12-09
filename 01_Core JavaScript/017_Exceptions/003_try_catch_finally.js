const numerator = 100,
  denominator = "a";

try {
  console.log(numerator / denominator);
  console.log(a);
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
} finally {
  console.log("Finally will execute every time");
}

/* 
Output: 

NaN
An error caught
Error message: ReferenceError: a is not defined
Finally will execute every time
*/
