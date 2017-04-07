var User=function(fname,lname,email,password)
{
  this.fname=fname;
  this.lname=lname;
  this.email=email;
  this.password=password;
}
$(document).ready(function()
{
  $(document).on("click","#register",function()
  {
  //  var nameReg = /^[A-Za-z]+$/;
 //     var numberReg =  /^[0-9]+$/;
 //     var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    var fname=$("#fname").val();
    var lname=$("#lname").val();
   var email=$("#email").val();
   var password=$("#password").val();
   var userObj=new User(fname,lname,email,password);

    $.ajax({
    url:" http://127.0.0.1:8081/api/signup",
    type:"POST",
    datatype:"json",
    data:JSON.stringify(userObj),
    contentType:'application/json',
    success:function(data)
    {
      if(data.status==true){
        document.getElementById("demo3").innerHTML ="your firstName is"+" " +fname;
         document.getElementById("demo4").innerHTML = "your lastName is"+" " +lname ;
         document.getElementById("demo5").innerHTML ="your email is"+" " +email;
          document.getElementById("demo6").innerHTML = "your datas are succesfully saved into the database ";
        console.log("this is the response");

      }
      else {
          document.getElementById("demo7").innerHTML = "your datas are not succesfully saved into the database ";
      }
    },
    });
  });
});
////////////////
$(document).ready(function()
{
  $(document).on("click","#login",function()
  {
    var email=$("#email").val();
    var password=$("#password").val();
  var userObject={
    email:email,
    password:password
  }
    // console.log(userObject);
$.ajax({
    url:"http://127.0.0.1:8081/api/login",
    type:"POST",
    datatype:"json",
    data:userObject,
    // contentType:'/application/json',
    success:function(data)
    {
      if(data.status){
       document.getElementById("demo").innerHTML ="your email is"+" " +email;
        document.getElementById("demo1").innerHTML = "you are a valid user ";
        console.log("data is here..."+data);
        console.log("you are the valid user");}

      else
        {
                document.getElementById("demo2").innerHTML = "you are a Invalid user please give the valid data";
                console.log("you are the invalid user");
        }

    },
    });
  });
});
$(document).ready(function()
{
  $(document).on("click","#clearall",function()
  {
    var fname=$("#fname").val("");
    var lname=$("#lname").val("");
   var email=$("#email").val("");
   var password=$("#password").val("");
   $("#maindiv").empty()
 });
 });
 $(document).ready(function()
 {
   $(document).on("click","#cleared",function()
   {
    var email=$("#email").val("");
    var password=$("#password").val("");
    $("#maindiv").empty()
  });
  });
//////////////
// $(document).ready(function(){
//
// $('.submit').click(function(){
//     validateForm();
// });
//
// function validateForm(){
//
//
//     var nameReg = /^[A-Za-z]+$/;
//     var numberReg =  /^[0-9]+$/;
//     var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//
//     var names = $('#nameInput').val();
//     var company = $('#companyInput').val();
//     var email = $('#emailInput').val();
//     var telephone = $('#telInput').val();
//     var message = $('#messageInput').val();
//
//     var inputVal = new Array(names, company, email, telephone, message);
//
//     var inputMessage = new Array("name", "company", "email address", "telephone number", "message");
//
//      $('.error').hide();
//
//         if(inputVal[0] == ""){
//             $('#nameLabel').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
//         }
//         else if(!nameReg.test(names)){
//             $('#nameLabel').after('<span class="error"> Letters only</span>');
//         }
//
//         if(inputVal[1] == ""){
//             $('#companyLabel').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
//         }
//
//         if(inputVal[2] == ""){
//             $('#emailLabel').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
//         }
//         else if(!emailReg.test(email)){
//             $('#emailLabel').after('<span class="error"> Please enter a valid email address</span>');
//         }
//
//         if(inputVal[3] == ""){
//             $('#telephoneLabel').after('<span class="error"> Please enter your ' + inputMessage[3] + '</span>');
//         }
//         else if(!numberReg.test(telephone)){
//             $('#telephoneLabel').after('<span class="error"> Numbers only</span>');
//         }
//
//         if(inputVal[4] == ""){
//             $('#messageLabel').after('<span class="error"> Please enter your ' + inputMessage[4] + '</span>');
//         }
// }
//
// });
