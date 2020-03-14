const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
var route = require("./controllers/burgers_controllers");

var app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(route);

app.listen(PORT, function() {
    console.log("Server Listening at: http://localhost: " + PORT);
})