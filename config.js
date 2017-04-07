var firebase = require('firebase');
  var config = {
    apiKey: "AIzaSyC921_LVidp0huo8ti-5Itj6NzYq0kre-Y",
    authDomain: "amitsharma1-96f8b.firebaseapp.com",
    databaseURL: "https://amitsharma1-96f8b.firebaseio.com",
    projectId: "amitsharma1-96f8b",
    storageBucket: "amitsharma1-96f8b.appspot.com",
    messagingSenderId: "244742644360"
  };
  var firebase = firebase.initializeApp(config);
module.exports = firebase;
