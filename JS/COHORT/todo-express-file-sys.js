const express = require("express");
const app = express();
const file = require("fs");
var a;
var arr;
file.readFile("./a.json", "utf-8", (err, data) => {
  arr = JSON.parse(data);
});

// var arr = a;
console.log(arr);
console.lo;
function writeMiddleware(req, res) {
  file.writeFile("a.json", JSON.stringify(arr), "utf-8", (err, data) => {});
}

app.get("/todos", (req, res) => {
  res.status(200).json(arr);
});
app.get("/todos/:id", (req, res) => {
  var idno = req.params.id;

  for (var i = 0; i < arr.length; i++) {
    if (idno == arr[i].id) {
      res.status(200).send(JSON.stringify(arr[i]));
    }
  }
});
app.use(express.json());
app.post(
  "/todos",
  (req, res, next) => {
    var title = req.body.title;
    var completed = req.body.completed;
    var description = req.body.description;
    var id = parseInt(Math.random() * 1000);
    arr.push({
      title: title,
      completed: completed,
      description: description,
      id: id,
    });

    res.status(201).send("Done");
    next();
  },
  writeMiddleware
);

app.put(
  "/todos/:id",
  (req, res, next) => {
    var idno = req.params.id;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id == idno) {
        if (arr[i].completed == false) {
          arr[i].completed = true;
          res.status(200).send("Updated");
        } else res.status(505).send("already Done");
      }
    }
    next();
  },
  writeMiddleware
);
app.delete(
  "/todos/:id",
  (req, res, next) => {
    var idno = req.params.id;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (idno != arr[i].id) {
        newArr.push(arr[i]);
      }
    }
    arr = newArr;
    res.status(200).send("Updated");
    next();
  },
  writeMiddleware
);
app.listen(3000);
