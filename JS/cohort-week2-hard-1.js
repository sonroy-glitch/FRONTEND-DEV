function promisedelay(n) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(console.log(`Promise resolved after ${n} seconds`));
    }, n * 1000);
  });
}
var d = promisedelay(5);
console.log(d);
