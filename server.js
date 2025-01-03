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

app.set("view engine", "handlebars");

// Connect Handlebars to Express app
app.engine("handlebars", exphbs({
    layoutsDir: __dirname + '/views/layouts',
}));

app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('home', {layout : 'main'});
});

// Use bodyParser in app
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

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
