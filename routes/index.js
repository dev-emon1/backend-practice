const express = require("express");
const route = express.Router();
const api = require("./api");

route.use(process.env.API_URL, api);

module.exports = route;
