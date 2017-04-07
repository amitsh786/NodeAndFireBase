var firebase = require('../config.js'),
    ref = firebase.database().ref();
var express = require('express'),
    app = express(),
    router = express.Router(),
    login = require('../modal/login');
var loginObj = new login();
// console.log("login", login);

// validator = require('express-validator');
// router.use(validator());
router.post('/login', function(req, res) {
    // try {
    var loginData = req.body;

      //validation v.checkBody("email").isEmail v.checkBody("password")

    loginObj.checklogin(loginData).then(
            function(successurl){
              res.send({
                            "status": true,
                           "message": successurl
                       });
            },
                function(errorurl){
                res.send({
                             "status": false,
                             "message": errorurl
                         });
            }
)
});
module.exports = router;
