const zod = require("zod");
var email = "abcd@gmail.com";
const schema = zod.string().email();

var check = schema.safeParse(email);
console.log(check);
