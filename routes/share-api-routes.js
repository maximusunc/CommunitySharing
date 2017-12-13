// api routes for shared items

// get - /api/share/:itemId - show shares for an item

// get - /api/share/:userId - show shares for a user

// post - /api/share - create a new share between user and item

// update - /api/share/:id - update a share

// delete - /api/share/:id - delete a share


// api routes for shares
var db = require("../models");

module.exports = function (app) {
    // api routes for shared items
    app.get("/api/shares/", function (req, res) {
        db.Share.findAll({ include: [{
            model: db.User,
            include: [{
                model: db.Item
            }]
        }]
        }).then(function (dbShare) {
            res.json(dbShare);
        });
    });

    // get - /api/shares/:id - display shares of logged in user
    app.get("/api/shares/:userid", function (req, res) {
        db.Share.findAll({
            where: {
                UserId: req.params.userid
            }, 
            include: [{
                model: db.Item,
                include: [{
                    model: db.User,
                    where: {id: req.params.userid}
                }]
            }]
        }).then(function (dbShare) {
            res.json(dbShare);
        });
    });

    // post - /api/shares - add a new share
    app.post("/api/shares", function (req, res) {
        db.Share.create(req.body).then(function (dbShare) {
            res.json(dbShare);
        });
    });

    // update - /api/shares/:id - update a share
    app.put("/api/shares", function (req, res) {
        db.Share.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // delete - /api/shares/:id
    app.delete("/api/shares/:id", function (req, res) {
        db.Share.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbShare) {
            res.json(dbShare);
        });
    });
};