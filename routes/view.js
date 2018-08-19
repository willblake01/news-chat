var db = require('../models');
module.exports = function(app) {
    //index route for landing page
    app.get('/', function (req, res) {
        res.render('home', {
        title: 'News-Chat',
        css: 'home.css',
        javascript: 'home.js'
    });
});
};
