var a = 0;
function counter(n, a) {
  var n;
  while (n > 0) {
    setTimeout(() => {
      a++;
      console.log(a);
    }, 999);
  }
}

counter(5, 0);
