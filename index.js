const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Bruno passou por aq tentativa numero 500");
});


app.listen(3008, () => {
  console.log("Servidor on");
});