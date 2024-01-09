const express = require("express");
const app = express();

app.get("/sum", (req, res) => {
  var num1 = req.params.a;
  var num2 = req.query.b;
  return a + b;
});
