var db = require("../models");
var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
    var obj = {};
    res.render("index", obj);
});

router.get("/user", function(req, res) {
    // Im not sure this is the way we should do this. We need to send login info to validation, and then redirect
    // to user.handlebars page with the id of the person logging in.
    db.Item.findAll({
        where: {
            userId: 1
            // || req.user.id
        }
    }).then(function(result) {
        var items = { 
            items: result.map(elem => elem),
            user: "Max"
        }; 
        res.render("user", items);
    }); 
});

router.get("/login", function (req, res) {
    var obj = {};
    res.render("index", obj);
});

router.get("/item", function (req, res) {
    db.sequelize.query("SELECT DISTINCT(category) AS category FROM Items ORDER BY category ASC;").spread((results, metadata) => {
        var obj = { categories: results.map(elem => elem.category) };
        res.render("test", obj);
    })
});

module.exports = router;
