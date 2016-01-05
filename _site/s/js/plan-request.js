$(document).ready(function(){
	function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(emailAddress);
    }

    //init parse tool app
    Parse.initialize("gHDRtWSuD02eG4HtB21RjRMeLZmH7PJvNVmhuNI7", "i2NqiVz7yionmTkeifhPQIvazs3YdtlWAfiIUnwK");

    //Data Models & Collection declaration
    var PlanRequest = Parse.Object.extend("PlanRequest", {
        //instance methods
    },
    {
        //class methods
    });

    function sendToParse(contact){
        var planRequest = new PlanRequest();

        planRequest.set("email", contact.email?contact.email:"");
        planRequest.set("business", contact.business?contact.business:"");
        planRequest.set("name", contact.name?contact.name:"");
        planRequest.set("phone", contact.phone?contact.phone:"");
        planRequest.set("plan", contact.plan?contact.plan:"");
        planRequest.set("message", contact.message?contact.message:"");

        console.log('Saving plan request : '+planRequest.toJSON());

        planRequest.save(null, {
            success: function(planRequest) {
                // The object was saved successfully.
                location = 'thank-you.html';
            },
            error: function(planRequest, error) {
                alert('Failed to send the plan request! Please try again.');
            }
        });
    }

    //Simple demo request (sharing just an email)
    if($('#emailDemo').exists()){
        function singleEmailDemo(){
            var email = $('#emailInput').val() || "";

            if(!email){
                alert('Please fill the email field');
            }else if(!isValidEmailAddress(email)){
                alert('Sorry but the email address is invalid, please try again');
            }else{
                sendToParse({email:email});
            }

						return false;
        }

        $('#emailDemo').on('click',singleEmailDemo);
        $('#emailInput').keypress(function(e){
            if (e.keyCode == 13){
							singleEmailDemo();
							e.preventDefault();
						};
        });
    }

    //contact form / parse cloud code
    if($('#sendForm').exists()){
        $('#sendForm').on('click',function(){
            var email = $('#emailForm').val();
            var business = $('#businessForm').val();
            var name = $('#nameForm').val();
            var phone = $('#phoneForm').val();
            var plan = $('#planForm').val();
            var message = $('#messageForm').val();

            if(!business){
                alert('Please fill the business field');
            }else if(!name){
                alert('Please fill the name field');
            }else if(!plan){
                alert('Please fill the name plan');
            }else if(!email){
                alert('Please fill the email field');
            }else if(!isValidEmailAddress(email)){
                alert('Sorry but the email address is invalid, please try again');
            }else{
                sendToParse({email: email, business: business, name: name, plan: plan, phone: phone, message: message})
            }
        });
    }
})
