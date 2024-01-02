const express = require("express");
const app = express();
const file = require("fs");

app.get("/files", (req, res) => {
  file.readdir("./files", (err, files) => {
    if (err) throw err;
    else res.send(files);
  });
});
app.get("/files/:filename", (req, res) => {
  var filename = req.params.filename;
  file.readFile(`./files/${filename}`, (err, data) => {
    if (err) res.status(404).send("File not found");
    else res.status(200).send(data);
  });
});
app.listen(3000);
///done on REPLIT
