var express=require('express');
app = express(),
router = express.Router(),
SignUpClass=require('../modal/signup');
signup=new SignUpClass();
console.log("signup",signup);
router.post('/signup', function(req,res){

console.log("Inside get signup");
try {
  console.log("I am body data",req.body);
  if(req.body.fname === undefined || req.body.lname === undefined || req.body.email === undefined || req.body.password === undefined )
  {
    res.send({"status":false,"message":"signup error"});
  }
else {
  var data = {
                  fname : req.body.fname,
                  lname : req.body.lname,
                	email : req.body.email,
                  password : req.body.password,
                  // mobno : req.body.mobno,
            };
            console.log("data",data);
            signup.saveUser(data);
            res.send({"status":true,"message":"Successfully Signup"});
}}
catch (e)
 {
      console.log(e);
     res.send({"status":false,"message":"server error"});
 }
});
module.exports = router;
