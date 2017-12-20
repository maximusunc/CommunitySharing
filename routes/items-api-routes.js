// api routes for Item table
var db = require("../models");

module.exports = function(app) {
//  get - /api/items - show all items
    app.get("/api/items", function (req, res) {
        console.log("api/items");
        db.Item.findAll({
            include: [{
                model: db.User
            }]
        }).then(function (dbItem) {
            res.json(dbItem);
        });
    });

    //  get categories
    app.get("/api/items/categories", function (req, res) {
        db.Item.findAll({
          attributes: ['category']
        }).then(function (dbItem) {
            res.json(dbItem);
        });
    });

//  get - /api/items/user/:userId - show list of your items
    app.get("/api/items/user/:userid", function(req, res) {
        db.Item.findAll({
            where: {
                UserId: req.params.userid
            },
            include: [{
                model: db.User
            }]
        }).then(function(dbItem) {
            res.json(dbItem);
        });
    });

// post - /api/items - add a new item
    app.post("/api/items", function(req, res) {
        console.log(req.user.id);
        db.Item.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            UserId: req.user.id
        }).then(function(dbItem) {
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

    // update - /api/items/:id - update item to borrowed
    app.put("/api/items/:id", function(req, res) {
        db.Item.update(
            req.body,
            {
            where: {
                id: req.params.id
            }
        }).then(function(dbBorrow) {
            db.Share.create({
                name: req.body.name,
                ItemId: req.params.id,
                UserId: req.user.id,
                OwnerId: req.body.UserId
            }).then(function(data) {
                res.json(data);
            });
            res.json(dbBorrow);
        });
    });

    app.put("/api/items/return/:id", function(req, res) {
        db.Item.update(
            req.body,
            {
                where: {
                    id: req.body.ItemId
                }
            }
        ).then(function(dbReturn) {
            db.Share.destroy({
                where: {
                    id: req.params.id
                }
            }).then(function(data) {
                res.json(data);
            });
        });
    });
};