const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtpasscode = "1435";

var userData = [
  {
    username: "abc@gmail.com",
    password: "123",
    name: "SR",
  },
  {
    username: "abcd@gmail.com",
    password: "1234",
    name: "SR1",
  },
];

const schema = zod.string().email();
const passwordschema = zod.number();

app.use(express.json());
app.post("/signin", (req, res) => {
  if()
  var username = req.body.username;
  var password = req.body.password;
  for (var i = 0; i < userData.length; i++) {
    if (userData[i].username == username && userData[i].password == password) {
      const token = jwt.sign({ username: username }, jwtpasscode);
      return res.status(200).send(JSON.stringify(token));
    } else {
      res.status(401).send("Invalid Username or Password");
    }
  }
});
var newData=[];
var index;
app.get("/verify", function (req, res) {
  var token = req.headers.authentication;
  try {
    const data=jwt.verify(token,jwtpasscode)
    for (var i = 0; i < userData.length; i++) {
      if (!(userData[i].username == data.username)) {
        newData.push(userData[i]);
      }
      
    }
   return res.status(200).send(JSON.stringify(newData))
    
  } catch (err) {
    res.status(500).json(err);
  }
});
app.post("/add",(req,res)=>{
  var username=req.body.username;
  var password=req.body.password;
  var name=req.body.name;
  var success=schema.safeParse(username);
  if(success.success){
    userData.push({
        "username":username,
        "password":password,
        "name":name
    })
    res.send("Adding Done")
  }
  else{
    res.status(505).send("")
  }

})
app.get("/users",(req,res)=>{
     res.status(200).send(JSON.stringify(userData))   
})
app.listen(3008);
