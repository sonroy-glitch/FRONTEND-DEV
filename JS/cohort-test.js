var date = new Date();
function halt(s) {}
function expensive(s) {
  var a = 0;
  for (i = 0; i < Math.pow(10, 5 + s); i++) {
    a += i;
  }
}
var before = date.getTime();
console.log(before);
expensive(4);
var after = date.getTime();
console.log(after);
console.log(after - before);
