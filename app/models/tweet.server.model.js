var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tweetSchema = new Schema({
    post: String,
    datePosted: String,
    postedBy: String,
    follwedBy: String,
});


var tweetModel = mongoose.model('tweets', tweetSchema);
exports.createTweet = function (data) {
    tweet.save(function (err) {
        if (error) {
            return "Error Occurred in Tweet";
        } else {
            return data;
        }
    });
};
