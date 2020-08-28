const express = require("express");
const app = express();
const path = require("path");
const todos = require("./lib/routes/todos");

app.use(express.json());

app.use("/api/todos", todos);

app.use(express.static(path.join(__dirname, "build/")));
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(3003, () => {
  console.log("listening on 3003");
});
