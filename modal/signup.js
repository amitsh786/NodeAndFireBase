var firebase=require('../config.js');
usersRef = firebase.database().ref();
var signup = function() {
};
    signup.prototype.saveUser = function(data)
   {
    usersRef.push(data);
   }
  module.exports = signup;
