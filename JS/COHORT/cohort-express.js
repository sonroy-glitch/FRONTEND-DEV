const express = require("express");
const app = express();

function cube(n) {
  return n * n * n;
}

app.get("/", (req, res) => {
  console.log("Server is running...");
  var output = cube(req.query.n);
  res.send(
    `<p>The cube of ${req.query.n.toString()} is :${output.toString()}</p>`
  );
});

app.listen(3000);
