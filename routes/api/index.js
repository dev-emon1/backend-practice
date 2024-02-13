const express = require("express");
const route = express.Router();
const auth = require("./auth");
const data = require("./data");

route.use("/auth", auth);

route.use("/user", data);

module.exports = route;
