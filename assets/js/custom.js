$(document).ready(function(){
           $("#signup_sec_form").validate({
          rules: {
         
            username: {
              required: true,
              minlength: 2
            },
            pswd: {
              required: true,
              minlength: 5
            },
            
            email: {
              required: true,
              email: true
            },
            
           
          },
          messages: {
        
            
            username: {
              required: "Please enter a username",
              minlength: "Your username must consist of at least 2 characters"
            },
            pswd: {
              required: "Please provide a password",
              minlength: "Your password must be at least 5 characters long"
            },
            
            email: "Please enter a valid email address",
          },
        
        });
  });