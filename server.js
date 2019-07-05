// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

// Set up port to be either the host's designated port, or 3000
const PORT = process.env.PORT || 3000;

// Instantiate Express App
const app = express();

// Require routes
const routes = require("./routes");

// Designate public folder as a static directory
app.use(express.static("public"));

// Connect Handlebars to Express app
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Use bodyParser in app
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Have every request go through route middleware
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Listen on the port
app.listen(PORT, function () {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
