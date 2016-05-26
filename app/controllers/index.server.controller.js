exports.sendResponse = function (req, res) {
    // res.send("Hello Birlasoft");
    res.render('index', {
        title: 'NodeJs Training'
    });
};

exports.sendUserDetails = function (req, res) {
    res.send("I got the user details");
};

exports.about = function (req, res) {
    res.render('about', {
        title: "about"
    });
    r
};

exports.contact = function (req, res) {
    res.render('contact', {
        title: "Contact"
    });
}
