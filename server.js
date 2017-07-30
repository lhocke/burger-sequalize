var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var PORT = process.env.PORT || 7500;

var app = express();

var db = require("./models");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("public"));

var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var burgerRoute = require('./routes/burger-api-routes');
app.use("/burgers", burgerRoute);

var customerRoute = require('./routes/customer-api-routes');
app.use("/customers", customerRoute);

app.use("/", './routes/html-routes');

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});