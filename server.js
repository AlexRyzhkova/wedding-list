const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.listen(3003, function () {
  console.log("listening on 3003");
});
