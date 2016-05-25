var config = require('./config/env/development/development');
var express = require('express');

var checkUserName = function (req, res) {
    if (req.param('name')) {
        res.send("User name available");
    } else {
        res.send("Please Send the user name");
    }
};


var returnData = function (req, res) {
    res.send("hewllo Guys");
};

var login = function(req,res){
    
};
var app = express();
app.get("/", checkUserName);
app.get("/print", returnData);
app.post("/login",login)

app.listen(config.port);
console.log(config.port);
