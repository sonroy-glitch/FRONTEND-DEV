const express = require("express");
const app = express();
var count = 0;

var data = [
  {
    name: "john",
  },
];

function ratelimitter(req, res, next) {
  var name = req.headers.name;
  count++;
  for (var i = 0; i < data.length; i++) {
    if (data[i].name == name) {
      setTimeout((name) => {
        if (count > 5) {
          res.send("Too many requests from " + name);
        }
      }, 999);
      setTimeout(() => {
        count = 0;
      }, 1000);
    }
  }
  next();
}
app.use(express.json());
app.use(ratelimitter);

app.get("/", (req, res) => {
  res.send(`Receieved request from ${req.headers.name}`);
});
app.post("/", (req, res) => {
  let newuser = req.body.name;
  data.push({ name: newuser });
  res.send("User adding success");
});
app.listen(3002);
