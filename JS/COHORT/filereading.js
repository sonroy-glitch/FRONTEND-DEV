const file = require("fs");
file.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});
