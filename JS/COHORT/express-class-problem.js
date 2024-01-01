const express = require("express");
const app = express();
var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
  {
    name: "Sounak",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: true,
      },
    ],
  },
];
function indexCalc(s) {
  var index = 0;
  var name = s;
  for (var i = 0; i < users.length; i++) {
    if (name === users[i].name) {
      index = i;
    }
  }
  return index;
}
app.get("/", (req, res) => {
  var index = indexCalc(req.query.s);
  var count = users[index].kidneys.length;
  //   for (var i = 0; i < 2; i++) {
  //     if (users[index].kidneys[i].healthy === "") {
  //       count--;
  //     }
  //   }

  res.send(
    `THE NUMBER OF KIDNEYS ARE ${count.toString()} and the status of their kidneys are ${JSON.stringify(
      users[index].kidneys
    )}`
  );
});
app.post("/", (req, res) => {
  var index = indexCalc(req.body.s);
  var health = indexCalc(req.body.health);
  var count = users[index].kidneys.length;
  if (users[index].kidneys.length < 2) {
    users[index].kidneys.push({ healthy: health });
  }
  res.send(JSON.stringify({ msg: "done" }));
});

app.listen(3001);
