function x() {
  var a = 7;
  function y() {
    console.log(a);
  }

  return y;
}

var a = x();
console.log(a);
console.log(typeof a);
