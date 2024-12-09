function greet() {
  console.log("Hello world");
}

let intervalId = setTimeout(greet, 3000); // The setTimeout() method returns the interval id.
console.log("This message is shown first", "Id: " + intervalId);

/*
In the above program, the setTimeout() method calls the greet() function after 3000 milliseconds (3 second).

+ Hence, the program displays the text Hello world only once after 3 seconds.

Note: The setTimeout() method is useful when you want to execute a block of once after some time. 
+ For example, showing a message to a user after the specified time.

*/
