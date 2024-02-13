const express = require("express");
const auth = express.Router();
const registrationController = require("../../controllers/registrationController");

auth.get("/registration", registrationController);

module.exports = auth;
