function promisedelay1(n) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(console.log(`Promise resolved after ${n} seconds`));
    }, n * 1000);
  });
}
function promisedelay2(m) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(console.log(`Promise resolved after ${n} seconds`));
    }, m * 1000);
  });
}
function promisedelay3(o) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(console.log(`Promise resolved after ${n} seconds`));
    }, o * 1000);
  });
}

function call(a, b, c) {
  const date1 = new Date();
  const before = date1.getTime();

  promisedelay1(a);
  promisedelay2(b);
  promisedelay3(c);
  const after = date.getTime();
  const date2 = new Date();
  const after = date2.getTime();
  return new Promise(function (resolve) {
    resolve(after - before);
  });
}
function print(data) {
  console.log(data);
}
call(1, 2, 3).then(print);
