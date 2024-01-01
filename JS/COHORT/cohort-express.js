const express = require("express");
const app = express();

function cube(n) {
  return n * n * n;
}
function square(n) {
  return n * n;
}

app.get("/cube", (req, res) => {
  console.log("Server is running...");
  var output = cube(req.query.n);
  res.send(
    `<p>The cube of ${req.query.n.toString()} is :${output.toString()}</p>`
  );
  var output1 = square(req.query.n);
  res.send(
    `<p>The square of ${req.query.n.toString()} is :${output1.toString()}</p>`
  );
});

// app.get("/square", (req, res) => {
//   console.log("Server is running...");
//   var output1 = square(req.query.n);
//   res.send(
//     `<p>The square of ${req.query.n.toString()} is :${output1.toString()}</p>`
//   );
// });

app.listen(3000);
