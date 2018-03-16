var express = require("express");

var router = express.Router();

// Import the model (Headline.js) to use its database functions.
var headline = require("../models/Headline.js");

// Export routes for server.js to use.
module.exports = router;
