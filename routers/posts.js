const express = require("express")
const router = express.Router()

module.exports = router

//index
router.get("/posts", (req, res) => {
  res.send("lista dei post!");
});

//show
router.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  res.send(`dettagli del post! ${id}`);
});

//create
router.post("/posts", (req, res) => {
  res.send("creazione post");
});

//update
router.put("/posts/:id", (req, res) => {
  const id = req.params.id;
  res.send("aggiornamento post" + ${id});
});

//delete
router.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  res.send("cancellazione post" + ${id});
}); 

    