module.exports = function (app) {
    var ctrl = require('../controllers/user.server.controller');
    app.post('/api/user/createUser', ctrl.createUser);
    app.get('/api/user/getAll', ctrl.getAll);
    app.post('/api/user/login', ctrl.findUser);
    app.post('/api/user/photo', ctrl.uploadPic)
};
