module.exports = function (app) {
    var ctrl = require('../controllers/tweet.server.controller');
    app.post('/api/createTweet', ctrl.createTweet);
};
