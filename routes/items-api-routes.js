// api routes for Item table
var db = require("../../models");

module.exports = function(app) {
//  get - /api/items - show all items
    app.get("/api/items", function (req, res) {
        db.Item.findAll({
            include: [db.Users]
        }).then(function (dbItem) {
            res.json(dbItem);
        });
    });

//  get - /api/items/:userId - show list of your items
    app.get("/api/items/user/:UserId", function(req, res) {
        db.Item.findAll({
            where: {
                UserId: req.params.id
            },
            include: [db.Users]
        }).then(function(dbItem) {
            res.json(dbItem);
        });
    });

// get - api/items/:category - show list of items in category
    app.get("/api/items/:Category", function (req, res) {
        db.Item.findAll({
            where: {
                Category: req.params.category
            },
            include: [db.Users]
        }).then(function (dbItem) {
            res.json(dbItem);
        });
    });

// post - /api/items - add a new item
    app.post("/api/items", function(req, res) {
        db.Item.create(req.body).then(function(dbItem) {
            res.json(dbItem);
        });
    });

// update - /api/itmes/:id - update item name or description
    app.put("/api/items", function (req, res) {
        db.Item.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // delete - /api/items:id - delete item
    app.delete("/api/items/:id", function(req, res) {
        db.Item.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbItem) {
            res.json(dbItem);
        });
    });
};