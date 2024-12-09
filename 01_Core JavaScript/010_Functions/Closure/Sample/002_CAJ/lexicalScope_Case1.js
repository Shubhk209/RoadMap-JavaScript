/* 
    Case 1: Each function in JavaScript has its own scope. If we attempt to access a variable or property inside a function from outside that function, it will result in an error.

*/

function outer() {
  var username = "hitesh";
}

console.log(username); // Uncaught ReferenceError: username is not defined

function outer2() {
  var username2 = "hitesh";

  function inner2() {
    console.log(username2); // hitest
  }
}

outer2();
console.log("Outside the function", username2); // Uncaught ReferenceError: username is not defined
