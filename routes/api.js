// Will display all articles and links with comments
var db = require("../models");

module.exports = function(app) {
    app.get("/api", function(req, res) {
        db.Headline.find().then(result => {
            res.json(result);
        });
    });
};
