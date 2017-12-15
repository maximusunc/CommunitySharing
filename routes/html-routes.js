// get function goes to landing page, unless already logged in, take to profile page.
// home page asks for login, or create account button launches modal window to create account

// user - handlebars renders with user info with view my items button

// view items - list user's items available to share, and add items button (POST to DB)

// borrow - have drop down list with categories, and search button to list items available in that category.
// click item will send email to owner with share request info

var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var db = require("../models");

router.get("/", function(req, res) {
    var obj = {};
    res.render("index", obj);
});

router.get("/user", function(req, res) {
    var obj = {};
    res.render("user", obj);
});

router.get("/item", function(req, res) {
    var obj = {};
    res.render("item", obj);
});


module.exports = router;