const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;
const route = require("./routes");
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// XML,fetch,
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

//route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
