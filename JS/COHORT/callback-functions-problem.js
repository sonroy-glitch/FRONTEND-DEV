function square(n) {
  var a = Math.pow(n, 2);
  return a;
}
var sum = 0;
function sumCalculate(a, b, fn) {
  var a = fn(a);
  var b = fn(b);
  console.log(a + b);
}

sumCalculate(2, 3, square);
