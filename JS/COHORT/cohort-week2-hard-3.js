function promisedelay1(n) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(console.log(`Promise1 resolved after ${n} seconds`));
    }, n * 1000);
  });
}
function promisedelay2(m) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(console.log(`Promise2 resolved after ${m} seconds`));
    }, m * 1000);
  });
}
function promisedelay3(o) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(console.log(`Promise3 resolved after ${o} seconds`));
    }, o * 1000);
  });
}

async function call(a, b, c) {
  const date1 = new Date();
  const before = date1.getTime();
  console.log(before);

  var x = await Promise.all([
    promisedelay1(a),
    promisedelay2(b),
    promisedelay3(c),
  ]);
  const date2 = new Date();
  const after = date2.getTime();
  console.log(after);
  console.log(after - before);
}
call(0, 0, 0);
