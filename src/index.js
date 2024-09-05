const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
//HTTP logger
app.use(morgan("combined"));
//Template engine
app.engine(
  "hjs",
  engine({
    extname: ".hjs",
  })
);
app.set("view engine", "hjs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
