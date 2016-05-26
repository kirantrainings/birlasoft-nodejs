var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDetails = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    email: String,
    phone: Number,
    address: {
        country: String,
        city: String,
        state: String,
        zipcode: Number
    }
});

var userSchema = mongoose.model('UserDetails', userDetails);

exports.createUser = function (data) {
    var user = new userSchema(data);
    user.save(function (error) {
        if (error) {
            console.log("failure");
            return error;
        } else {
            console.log("success");
            return user;
        }
    });
};

exports.getAllUsers = function (req, next) {
    console.log("Get All Users")

    userSchema.find(function (error, data) {
        if (error) {
            console.log("failure");
            return error;
        } else {
            next(data);
        }
    });
};

exports.findUserById = function (login, next) {
    console.log("fetching user byId");
    userSchema.findOne({
        email: login.username
    }, function (err, data) {
        if (err) {
            next("Error");
        } else {
            console.log(data);
            next(data);
        }
    });
};
