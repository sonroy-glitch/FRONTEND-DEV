const file = require("fs");
var strafter;
function readandwrite(fn) {
  file.readFile("a.txt", "utf-8", function (err, data) {
    // console.log(fn(data," "));
    strafter = fn(data, " ");
    // console.log(strafter);
    file.writeFile("a.txt", strafter, "utf-8", function (err) {});
  });

  return;
}

var total = "";
function splitString(str, separator) {
  var a = str.split(separator);

  for (var i = 0; i < a.length; i++) {
    if (a[i] != "") {
      total += a[i] + " ";
    }
  }
  return total;
}
readandwrite(splitString);
