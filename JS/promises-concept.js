function value() {
  return new Promise(function (resolve) {
    var a = 5;
    resolve(a);
  });
}
function square(a) {
  console.log(a * a);
}
value().then(square);
