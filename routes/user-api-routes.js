// api routes for users
var db = require("../models");

module.exports = function (app) {
// get - /api/users - list all users
    app.get("/api/users/", function (req, res) {
        db.User.findAll({
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

// get - /api/users/:id - list user info of logged in user
    app.get("/api/users/:id", function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

// post - /api/users - add a new users
    app.post("/api/users", function (req, res) {
        db.User.create(req.body).then(function (dbUser) {
            res.json(dbUser);
        });
    });

// update - /api/users/:id - update your user info
    app.put("/api/users", function (req, res) {
        db.User.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbPost) {
                res.json(dbPost);
            });
    });

// delete - /api/users/:id
    app.delete("/api/items/:id", function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });
};