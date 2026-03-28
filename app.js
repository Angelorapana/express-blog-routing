
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
  console.log("Hello!");
});

app.listen(3000, () => {
  console.log("Il server è attivo");
});