const express = require("express");
const app = express();
const file = require("fs");
var arr = [
  {
    title: "Buy Groceries",
    completed: false,
    description: "I should buy groceries",
    id: 243,
  },
  {
    title: "Buy Groceries",
    completed: false,
    description: "I should buy groceries",
    id: 245,
  },
];

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
app.post("/todos", (req, res) => {
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
});
app.put("/todos/:id", (req, res) => {
  var idno = req.params.id;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id == idno) {
      if (arr[i].completed == false) {
        arr[i].completed = true;
        res.status(200).send("Updated");
      } else res.status(505).send("already Done");
    }
  }
});
app.delete("/todos/:id", (req, res) => {
  var idno = req.params.id;
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (idno != arr[i].id) {
      newArr.push(arr[i]);
    }
  }
  arr = newArr;
  res.status(200).send("Updated");
});
app.listen(3000);
