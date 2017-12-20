var db = require("../models");
var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
    if (req.user) {
        res.redirect("/user");
    } else {
        var obj = {};
        res.render("index", obj);
    };
});

router.get("/user", function(req, res) {
    db.Item.findAll({
        where: {
            UserId: req.user.id
        }
    }).then(function(result) {
        var items = { 
            items: result.map(elem => elem),
            user: req.user.name
        };
        db.sequelize.query("SELECT DISTINCT(category) AS category FROM Items WHERE NOT UserId = ? ORDER BY category ASC", {replacements: [req.user.id]}).spread((results, metadata) => {
            var borrow = { 
                categories: results.map(elem => elem.category),
                user: req.user.id
            };
            res.render("user", [items, borrow]);
        });
    }); 
});

router.get("/borrow/:category", function (req, res) {
    db.Item.findAll({
        where: { 
            UserId: {notIn: req.user.id},
            category: req.params.category,
            borrowed: false
        }
    }).then(function(result){
        var items = {
            items: result.map(elem => elem)
        };
        res.render("borrow", items);
    });
   
});

module.exports = router;
