const express = require("express");
const route = express.Router();
const auth = require("./auth");
const data = require("./data");
const secureApi = require("../../middleware/secureApi");

route.use("/auth", auth);

route.use("/user", secureApi, data);

module.exports = route;
