
const express = require("express");
const app = express();


app.listen(3000, () => {
  console.log("Il server è attivo");
});


// importo router
const postsRouter = require("./routers/posts");
app.use("/", postsRouter);