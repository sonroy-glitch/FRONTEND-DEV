const express = require("express");
const app = express();

app.post("/", (req, res) => {
  var a = req.headers.authentication; //gets authentication header data
  console.log(a);
  res.json(a);
});
app.listen(3005);
