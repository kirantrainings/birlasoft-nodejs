var express = require('express'),
    bodyParser = require('body-parser');


module.exports = function () {
    var app = express();
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../app/routes/index.server.route.js')(app);
    require('../app/routes/user.server.route.js')(app);
    require('../app/routes/tweet.server.route.js')(app);
    require('../app/routes/fileupload.server.route.js')(app);

    app.use(express.static('./public'));
    return app;
};
