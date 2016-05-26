module.exports = function (app) {
    var ctrl = require('../controllers/index.server.controller');
    app.get('/', ctrl.sendResponse);
    app.get('/api/getUserDetails', ctrl.sendUserDetails);
    app.get('/contact', ctrl.contact);
    app.get('/about', ctrl.about)
};
