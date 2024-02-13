require("dotenv").config();
const express = require("express");
const route = require("./routes");
const app = express();

const port = process.env.PORT || 8000;

app.use("/", route);

app.listen(port, () => {
  console.log("Server is running");
});
