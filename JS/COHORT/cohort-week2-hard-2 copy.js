function promisedelay(n) {
  return new Promise(function (resolve) {
    expensive();
    setTimeout(() => {
      resolve(console.log(`Promise resolved after ${n} seconds`));
    }, n * 1000);
  });
}
function expensive() {
  var a = 0;
  for (i = 0; i < Math.pow(10, 9); i++) {
    a += i;
  }
}

var d = promisedelay(5);
console.log(d);
