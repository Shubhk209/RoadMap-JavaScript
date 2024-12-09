// program to stop the setInterval() method after five times

let count = 0;

// function creation
let interval = setInterval(function () {
  // increasing the count by 1
  count += 1;

  // when count equals to 5, stop the function
  if (count === 5) {
    clearInterval(interval);
  }

  // display the current time
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
}, 2000);
/*
In the above program, the setInterval() method is used to display the current time every 2 seconds. The clearInterval() method stops the function call after 5 times.
*/
