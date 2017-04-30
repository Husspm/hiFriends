var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var routes = require("./htmlRoutes.js");
var app = express();
var PORT = 8080;
var friend = require("./friends.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname)));

var friends = [];
exports = friends;

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
app.use(routes.targets.one[0], function(req, res) {
    res.sendFile(path.join(__dirname, routes.targets.one[1]));
});
app.get(routes.targets.one[0], function(req, res) {
    res.sendFile(path.join(__dirname, routes.targets.one[1]));
});
app.get(routes.targets.two[0], function(req, res) {
    res.sendFile(path.join(__dirname, routes.targets.two[1]));
});
app.get("/api/friends", function(req, res) {
    res.json(friend.friends);
});
app.post("/api/friends", function(req, res) {
    var newPerson = req.body;
    console.log(newPerson);
    res.json(newPerson);
    friend.friends.push(newPerson);
});