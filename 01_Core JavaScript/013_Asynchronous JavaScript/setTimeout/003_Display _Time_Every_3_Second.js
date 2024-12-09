// program to display time every 3 seconds
function showTime() {
  // return new date and time
  let dateTime = new Date();

  // returns the current local time
  let time = dateTime.toLocaleTimeString();

  console.log(time);

  // display the time after 3 seconds
  setTimeout(showTime, 3000);
}

// calling the function
showTime();

/*
The setTimeout() method calls the function only once after the time interval (here 3 seconds).

+ However, in the above program, since the function is calling itself, the program displays the time every 3 seconds.

+ This program runs indefinitely (until the memory runs out).
*/

/*
Note: If you need to execute a function multiple times, it's better to use the setInterval() method.
*/
