const users = require("./closure");

function app(inner) {
  users(inner);
  console.log("This is from inner: ", inner);
}

app("myApp");
