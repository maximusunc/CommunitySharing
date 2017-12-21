var db = require("../models");
var express = require("express");
var router = express.Router();
var db = require("../models");

// index page
router.get("/", function(req, res) {
    if (req.user) {
        res.redirect("/user");
    } else {
        var obj = {};
        res.render("index", obj);
    };
});

// user page
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
            var categories = { 
                categories: results.map(elem => elem.category),
                userId: req.user.id
            };
            db.Share.findAll({
                where: {
                    UserId: req.user.id
                }
            }).then(function(result) {
                var borrowed = {
                    borrowed: result.map(elem => elem.dataValues)
                };
                db.Share.findAll({
                    where: {
                        OwnerId: req.user.id
                    }
                }).then(function(result) {
                    var lent = {
                        lent: result.map(elem => elem.dataValues)
                    };
                    var allItems = Object.assign({}, items, categories, borrowed, lent);
                    res.render("user", allItems);
                }); 
            });
        });
    }); 
});

// items to borrow page
router.get("/borrow/:category", function (req, res) {
    db.Item.findAll({
        where: { 
            UserId: {notIn: req.user.id},
            category: req.params.category,
            borrowed: false
        }
    }).then(function(result){
        var items = {
            items: result.map(elem => elem),
            name: req.user.name
        };
        console.log(items.items);
        res.render("borrow", items);
    });
   
});

module.exports = router;
