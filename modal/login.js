var firebase = require('../config.js'),
    ref = firebase.database().ref();
var login = function() {

this.checklogin = function(bodydata) {
    return new Promise(function(resolve, reject) {
        var email = bodydata.email;
        var password = bodydata.password;
// console.log(email);
// console.log(password);
if (email == "" && password == "") {
  reject("Insert the field")
}
    else if (email == "") {
    reject("Insert the Email")
    } else if (password == "") {
    reject("insert the password")
  }

  ref.orderByChild("email").equalTo(email).once("value", function(data)
        {
                    if (data.val() !== null)
                      {
                          data.forEach(function(snap) {
                          var temp = snap.val();
                            if (temp.password === password) {
                                resolve("You are the valid user");
                                      } else {
                                          reject("password is wrong");
                                      }
                          });
                      }
                        else {
                          reject("Invalid Email Id");
                      }
        });

    });
}
}
module.exports = login;
