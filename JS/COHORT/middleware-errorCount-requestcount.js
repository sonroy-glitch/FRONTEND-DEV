const express = require("express");
const app = express();
var count = 0;
var err = 0;

function requestCount(req, res, next) {
  count++;
  console.log("Request Count: " + count);
  next();
}

app.get("/", requestCount, (req, res) => {
  res.send(`Hello World!`);
});
app.use(express.json());
app.post("/", requestCount, (req, res) => {
  var input = req.body.name;
  res.send(`your name is ${name}`);
});

app.use((err, req, res, next) => {
  err++;
  res.send(`there is a problem with your server and error count is ${err} `);
});
app.listen(3000);
