var multer = require('multer')
var upload = multer({
    dest: 'uploads/'
})


module.exports = function (app) {

    app.post('/upload', upload.single(), function (req, res, next) {
        console.log(req.file);
        // req.file is the `avatar` file 
        // req.body will hold the text fields, if there were any 
    })

};
