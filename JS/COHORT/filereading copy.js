const file = require("fs");
var data = file.readdir(
  "/Users/KIIT0001/Documents/pr/WEBDEV/JS/COHORT/test/",
  (err, files) => {
    if (err) throw err;

    console.log(files);
    //lets say i want file  a conetents
  }
);
