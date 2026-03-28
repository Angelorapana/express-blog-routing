
const express = require("express");
const app = express();



// importo router
const postsRouter = require("./routers/posts");
app.use("/posts", postsRouter);


app.listen(3000, () => {
  console.log("Il server è attivo");
});