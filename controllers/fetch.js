var express = require("express");

var router = express.Router();

// Import the model (index.js) to use its database functions.
var burger = require("../models/index.js");

// Export routes for server.js to use.
module.exports = router;
