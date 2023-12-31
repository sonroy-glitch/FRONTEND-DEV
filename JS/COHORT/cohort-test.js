var date = new Date();
function halt(s) {}

var before = date.getTime();
console.log(before);
expensive(4);
var after = date.getTime();
console.log(after);
console.log(after - before);
