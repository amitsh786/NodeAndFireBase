var express  =  require("express"),//import all the property of express
    app       =  express();// assigning express property to a variable  named with app
    bodyParser   =  require("body-parser");
    var cors=require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
//validator
console.log("heloi sir1111");
app.use(require('./Controller'));
app.use(express.static("./public"));

var port = 8081;
app.listen(port,function () {
  // connect();
  console.log("listning from the port" +port);
});
