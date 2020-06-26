const axios = require("axios");

const baseUrl = "https://jsonplaceholder.typicode.com/users";

const users = (doubleInner) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log(data);
      console.log("this is after axios: ", doubleInner);
    })
    .catch((err) => console.log(err));
  console.log("This is from closure: ", doubleInner);
};

module.exports = users;
