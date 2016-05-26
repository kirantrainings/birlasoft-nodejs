var tweetModel = require('../models/tweet.server.model');

exports.createTweet = function (req, res, next) {
    var create = tweetModel.createTweet(req.body);
    res.send(create);
};
