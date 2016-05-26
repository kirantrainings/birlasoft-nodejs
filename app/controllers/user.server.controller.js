var userDetails = require('../models/user.server.model');
//file upload functionality
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
    }
});

var upload = multer({
    storage: storage
}).single('userPhoto');


exports.createUser = function (req, res, next) {
    var create = userDetails.createUser(req.body);
    console.log(create);
};


exports.getAll = function (req, res) {
    userDetails.getAllUsers(req, function (data) {
        res.json(data);
    });

};

exports.findUser = function (req, res) {
    console.log(req.body.login);
    userDetails.findUserById(req.body.login,
        function (userData) {
            console.log(userData);
            res.json(userData);
        });
};

exports.uploadPic = function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
};
