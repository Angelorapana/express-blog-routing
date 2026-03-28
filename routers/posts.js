const express = require("express")
const router = express.Router()

//index
router.get("/", (req, res) => {
  res.send("lista dei post!");
});

//show
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`dettagli del post ${id}`);
});

//create
router.post("/", (req, res) => {
  res.send("creazione post");
});

//update
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send("aggiornamento post" + id);
});

//delete
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send("cancellazione post" + id);
}); 

module.exports = router;
