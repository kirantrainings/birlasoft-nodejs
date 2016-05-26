var config = require('./env/development/development');
mongoose = require('mongoose');

module.exports = function () {
    console.log("==Establishing Connection==");
    //step 1 connect to the database
    var db = mongoose.connect(config.mongoConnection);
    //refer the documents of the database
    require('../app/models/user.server.model');
    return db;
};
