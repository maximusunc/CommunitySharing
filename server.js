var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var session = require('express-session');
var passport = require('passport');
var Sequelize = require('sequelize');
var MySQLStore = require('express-mysql-session')(session);


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Handlebars engine setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));



// Setup session table for user session
//================================================================

var options = {
	host: "localhost",
	user: "stuffshare",
	password: "",
	database: "stuffshare_db"
};

var sessionStore = new MySQLStore(options);

app.use(session({
	key: 'share_session',
	secret: 'chainsaw',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


// Routes
// =============================================================
require("./routes/items-api-routes.js")(app, passport);
require("./routes/share-api-routes.js")(app, passport);
require("./routes/user-api-routes.js")(app, passport);
require("./config/passport.js")(passport, db.User);
var routes = require("./routes/html-routes.js");
app.use("/", routes);


  
  


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
	app.listen(PORT, function () {
		console.log("App listening on PORT " + PORT);
	});
});