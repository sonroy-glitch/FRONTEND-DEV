const file = require("fs");
file.readFile("./test/", "utf-8", function (err, data) {
  console.log(data);
});
