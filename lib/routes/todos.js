const { Router } = require("express");
const router = Router();

router.get("/", async function (request, result) {
  //Abindung zum mongodb in try . Functionen in models todo.js schreiben
  // in routes was passiert wenn man auf die rute geht
  try {
    return result.json("Hello world!");
  } catch (error) {
    console.log(error);
    return result.status(404).end("error");
  }
});

module.exports = router;
