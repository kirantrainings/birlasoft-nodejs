var port = 1337;
var database = require('./config/mongoose');
var express = require('./config/express');
var db = database();
var app = express();
app.listen(port);
console.log('Server running at http://localhost:' + port);
