const express = require("express");
var app = express();
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
var index;
function indexCalc(name) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      index = i;
    }
  }
  return index;
}
app.get("/", (req, res) => {
  var name = req.query.s;
  var index = indexCalc(name);
  var healthy = 0;
  var unhealthy = 0;
  for (var i = 0; i < users[index].kidneys.length; i++) {
    if (users[index].kidneys[i].healthy === true) {
      healthy++;
    } else {
      unhealthy++;
    }
  }
  res.json(
    `The user name is ${users[index].name} and the kidneys he have ${users[index].kidneys.length} out of which bad kidenys :${unhealthy} and healthy are :${healthy}`
  );
});
app.use(express.json());
app.post("/", (req, res) => {
  var newkidney = req.body.newkidney;
  var name = req.body.name;
  var index = indexCalc(name);
  if (users[index].kidneys.length < 3) {
    users[index].kidneys.push({ healthy: newkidney });
    res.send("done");
  } else {
    res.send("You have reached the maximum number of kidneys.");
  }
});

app.put("/", (req, res) => {
  for (var i = 0; i < users[index].kidneys.length; i++) {
    if (users[index].kidneys[i].healthy == false) {
      users[index].kidneys[i].healthy = true;
      res.send("done");
    } else {
      res.send("NO UPdate req");
    }
  }
});

app.delete("/", (req, res) => {
  let newarr = [];
  for (var i = 0; i < users[index].kidneys.length; i++) {
    if (users[index].kidneys.length != 0) {
      if (users[index].kidneys[i].healthy != false) {
        newarr.push(users[index].kidneys[i]);
        users[index].kidneys = newarr;
        res.send("done");
      } else {
        res.send("NO Bad kidney");
      }
    } else {
      res.send("Just 1 kideny left mf");
    }
  }
});

app.listen(3000);
