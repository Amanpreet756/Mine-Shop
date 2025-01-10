$(document).ready(function(){
    $("#btn1").click(function(){
      $("#btn2").toggle();
    });

   $("#btn2").click(function()
{
    $("p").toggle();
});

$(".slider").hover(function(){
    $(".slider2").slideUp("slow");
});


    $("button").click(function(){
      $(".box").animate({
         left: '+=65px',
        opacity: '0.5',
        height: 'toggle',
        width: '150px'
      });
    });
   
        $(".box_slide").click(function(){
          $(".down_text").slideDown(1000);
        });
        $(".box_slide").hover(function(){
          $(".down_text").stop();
        });
        $("#btn1").click(function(){
          var total;
          var basic_salary = parseInt($("#salary").val()); //document.getElementById("salary").value;
          var option = $("[name='Gender']");
        var hra = basic_salary * (20 / 100);
          var da = basic_salary * (20 / 100);
          var ta = basic_salary * (30 / 100);
          var sa= basic_salary * (10/100);
          total= hra + da + ta + basic_salary;
          for(var a of option){
            if(a.value=="Female"){
              total += sa;
            }
          }
          console.log('total',total);
        }); 
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