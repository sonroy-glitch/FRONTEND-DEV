var total = "";
function splitString(str, separator) {
  console.log("Original String:", str);
  var a = str.split(separator);
  //   console.log(a);
  //   var length = a.length;
  //   console.log(length);

  for (var i = 0; i < a.length; i++) {
    if (a[i] != "") {
      total += a[i] + " ";
    }
  }
  console.log(total);
}
splitString("Hello World                 world", " ");
