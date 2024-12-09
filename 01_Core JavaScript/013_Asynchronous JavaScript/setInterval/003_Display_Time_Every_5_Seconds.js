// program to display time every 5 seconds
function showTime() {
  // return new date and time
  let dateTime = new Date();

  // return the time
  let time = dateTime.toLocaleTimeString();

  console.log(time);
}

let display = setInterval(showTime, 5000);

/*
The above program displays the current time once every 5 seconds.

+ new Date() gives the current date and time. And toLocaleTimeString() returns the current time.
*/
