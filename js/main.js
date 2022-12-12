$(function () {
    var openedr = false;

    var animating = false;

    $(document).scroll(function () {
        if ($(this).scrollTop() > 100) {
       
         $("#light-logo").hide();
          
            $("#mobile-image").attr("src", "images/menu-dark.png");
        } else {
        
           $("#light-logo").show();
            $("#mobile-image").attr("src", "images/menu.png");


         //   if($('#responsive-icon').css('display') === 'block')
          //  {
         //       $("#light-logo").hide();
        //    }
        }
        
        $("#responsive-icon").click(function(e){
            $("#light-logo").hide();
        })

      
                     
    });
});

function subscribe() {
 /*    var dataString = "subscribe=" + $("#sub-email").val();
    $.ajax({
        type: "POST",
        url: "https://example.com",
        data: dataString,
        success: function (response) {
            if (response == "Success") {
                $("#newsletter").html("<p>You have successfully subscribed to our newsletter.</p>");
            } else {
                $("#newsletter-error").html(response);
            }
        },
    });
    return false; */

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "patricknghifikwa@gmail.com",
        Password : "707579968BAB972C6862354F7CDF9D7A4054",
        To : 'startechitnam@gmail.com',
        From : "patricknghifikwa@gmail.com",
        Subject : "Startech Email Subscription",
        Body : $("#sub-email").val(),
    }).then(
      message => alert("Thank For Subscribing to StarTech IT Solutions Newsletter")
    );
}


// Write the JS function to send emails via SmtpJS.com. This is the step where you need to include the credentials you retrieved earlier.
function sendEmail() {
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "patricknghifikwa@gmail.com",
    Password : "707579968BAB972C6862354F7CDF9D7A4054",
    To : 'startechitnam@gmail.com',
    From : "patricknghifikwa@gmail.com",
    Subject : "Startech Enquiry",
    Body : "Client Name: " + $("#name").val() + "<br>"  +
            "Client Email: " +   $("#email").val() + "<br>"+
            "Request: " +    $("#email_body").val(),
}).then(
  message => alert("Thank You For Contacting StarTech IT Solutions We Will Revert Soonest.")
);
}