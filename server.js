var express = require("express");
var bodyParser = require("body-parser");
var db = require('./models');



var port = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./app/routes/html-routes.js");

db.sequelize.sync({force: true}).then(function() {
	app.listen(port, function() {
	console.log("Listening on port: " + port);
	});
});

app.use("/", routes);

