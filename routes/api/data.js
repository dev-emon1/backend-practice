const express = require("express");
const data = express.Router();
const userData = require("../../controllers/userdataController");

data.get("/data", userData);

module.exports = data;
