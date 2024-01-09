const express = require("express");
const app = express();
const zod = require("zod");
const db = require("mongoose");
const jwt = require("jsonwebtoken");
const jwtPasscode = "secret";
var token;

const usernameSchema = zod.string().email();
const passwordSchema = zod.string().min(8);
//connect and scheming  the database
db.connect(
  "mongodb+srv://admin:1TEogV8S9akeHULY@cluster0.4dda1ju.mongodb.net/data"
);
const adminSchema = db.model("Admin", {
  username: String,
  password: String,
});
const userSchema = db.model("Users", {
  username: String,
  password: String,
});
const course = db.model("Course", {
  title: String,
  description: String,
  price: Number,
  courseID: Number,
});
const purchasedCourses = db.model("Purchased-Courses", {
  username: String,
  course: Object,
});
//checking for authentication of both users and admin
function checkMiddlewareAdmin(req, res, next) {
  var username = req.headers.username;
  var password = req.headers.password;

  const check = usernameSchema.safeParse(username);
  const check1 = passwordSchema.safeParse(password);
  if (!(check.success && check1.success)) {
    return res.status(403).send({ message: "Invalid Username or Password" });
  } else {
    async function rndm() {
      var dbcheck = await adminSchema.findOne({
        username: username,
        password: password,
      });
      return dbcheck;
    }
    var result = rndm();
    if (result == null) {
      res.status(300).send("You do not exist in database");
    } else {
      next();
    }
  }
}
function checkMiddlewareUser(req, res, next) {
  var username = req.headers.username;
  var password = req.headers.password;
  var token = req.headers.authentication;
  const check = usernameSchema.safeParse(username);
  const check1 = passwordSchema.safeParse(password);
  if (!(check.success && check1.success)) {
    return res.status(403).send({ message: "Invalid Username or Password" });
  } else {
    async function rndm() {
      var dbcheck = await userSchema.findOne({
        username: username,
        password: password,
      });
      return dbcheck;
    }
    var result = rndm();
    if (result == null) {
      res.status(300).send("You do not exist in database");
    } else {
      try {
        var check2 = jwt.verify(token, jwtPasscode);
        next();
      } catch (err) {
        res.status(505).send("Wrong token sent");
      }
    }
  }
}
app.use(express.json());
app.post("/admin/signup", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  const check = usernameSchema.safeParse(username);
  const check1 = passwordSchema.safeParse(password);
  if (!(check.success && check1.success)) {
    res.status(505).send("Not in the valid format");
  } else {
    var user = new adminSchema({
      username,
      password,
    });
    user.save();
    res.status(200).send("admin signup successful");
  }
});
app.post("/admin/signup", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  const check = usernameSchema.safeParse(username);
  const check1 = passwordSchema.safeParse(password);
  if (!(check.success && check1.success)) {
    res.status(505).send("Not in the valid format");
  } else {
    var user = new adminSchema({
      username,
      password,
    });
    user.save();
    res.status(200).send("admin signup successful");
  }
});
app.post("/users/signup", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  const check = usernameSchema.safeParse(username);
  const check1 = passwordSchema.safeParse(password);
  if (!(check.success && check1.success)) {
    res.status(505).send("Not in the valid format");
  } else {
    var user = new userSchema({
      username,
      password,
    });
    user.save();
    res.status(200).send("user signup successful");
  }
});
app.post("/admin/signin", checkMiddlewareAdmin, (req, res) => {
  var username = req.headers.username;

  try {
    token = jwt.sign({ username: username }, jwtPasscode);

    res.send("User signin successfull");
  } catch (err) {
    res.status(505).send("Something is up with the server");
  }
});
app.post("/users/signin", (req, res) => {
  var username = req.headers.username;
  try {
    token = jwt.sign({ username: username }, jwtPasscode);

    res.send("User signin successfull");
  } catch (err) {
    res.status(505).send("Something is up with the server");
  }
});
app.post("/admin/courses", checkMiddlewareAdmin, (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  var price = req.body.price;
  var courseID = parseInt(Math.random() * 1000);

  var data = new course({
    title,
    description,
    price,
    courseID,
  });
  data.save();
  res.status(200).send(`Course created successfully. CourseID--${courseID}`);
});
app.get("/admin/courses", checkMiddlewareAdmin, (req, res) => {
  async function sr() {
    var output = await course.find({});
    res.status(200).send(JSON.stringify(output));
  }
  sr();
});
app.get("/users/courses", checkMiddlewareUser, (req, res) => {
  async function sr() {
    var output = await course.find({});
    res.status(200).send(JSON.stringify(output));
  }
  sr();
});
app.post("/users/courses/:courseID", checkMiddlewareUser, (req, res) => {
  var username = req.headers.username;
  var output;
  async function sr() {
    output = await course.find({});
  }
  sr();
  var index;
  var courseID = req.params.courseID;
  for (var i = 0; i < output.length; i++) {
    if (output[i].courseID == courseID) {
      index = i;
    }
  }
  var data = new purchasedCourses({
    username: username,
    course: output,
  });
  res.status.json("Course purchased successfully");
});
app.get("/users/purchasedCourses", checkMiddlewareUser, (req, res) => {
  var username = req.headers.username;
  var data = purchasedCourses.findOne({
    username: username,
  });
  res.status(200).send(JSON.stringify(data.course));
});
app.listen(3003);
