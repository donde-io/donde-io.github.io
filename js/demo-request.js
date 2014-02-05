$(document).ready(function(){
	function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(emailAddress);
    }

    //init parse tool app
    Parse.initialize("gHDRtWSuD02eG4HtB21RjRMeLZmH7PJvNVmhuNI7", "i2NqiVz7yionmTkeifhPQIvazs3YdtlWAfiIUnwK");

    //Data Models & Collection declaration
    var DemoRequest = Parse.Object.extend("DemoRequest", {
        //instance methods
    },
    {
        //class methods
    });

    function sendToParse(contact){
        var demoRequest = new DemoRequest();

        demoRequest.set("email", contact.email?contact.email:"");
        demoRequest.set("business", contact.business?contact.business:"");
        demoRequest.set("name", contact.name?contact.name:"");
        demoRequest.set("phone", contact.phone?contact.phone:"");
        demoRequest.set("time", contact.time?contact.time:"");
        demoRequest.set("message", contact.message?contact.message:"");

        console.log('Saving demo request : '+demoRequest.toJSON());

        demoRequest.save(null, {
            success: function(demoRequest) {
                // The object was saved successfully.
                location.href('thank-you.html');
            },
            error: function(demoRequest, error) {
                alert('Failed to send the demo request! Please try again.');
            }
        });
    }

    //Simple demo request (sharing just an email)
    if($('#emailDemo').exists()){
        function singleEmailDemo(){
            var email = $('#emailInput').val();

            if(!email){
                alert('Please fill the email field');
            }else if(!isValidEmailAddress(email)){
                alert('Sorry but the email address is invalid, please try again');
            }else{
                sendToParse({email:email});
            }
        }

        $('#emailDemo').on('click',singleEmailDemo);
        $('#emailInput').keypress(function(e){
            if (e.keyCode == 13) singleEmailDemo();
        });
    }

    //contact form / parse cloud code
    if($('#sendForm').exists()){
        $('#sendForm').on('click',function(){
            var email = $('#emailForm').val();
            var business = $('#businessForm').val();
            var name = $('#nameForm').val();
            var phone = $('#phoneForm').val();
            //var time = $('#timeForm').val();
            var message = $('#messageForm').val();

            if(!business){
                alert('Please fill the business field');
            }else if(!name){
                alert('Please fill the name field');
            }else if(!phone){
                alert('Please fill the phone field');
            }else if(!email){
                alert('Please fill the email field');
            }else if(!isValidEmailAddress(email)){
                alert('Sorry but the email address is invalid, please try again');
            }else{
                sendToParse({email: email, business: business, name: name, phone: phone, message: message})
            }
        });
    }
})