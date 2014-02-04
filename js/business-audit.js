$(document).ready(function(){
	function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(emailAddress);
    }

    //init parse tool app
    Parse.initialize("gHDRtWSuD02eG4HtB21RjRMeLZmH7PJvNVmhuNI7", "i2NqiVz7yionmTkeifhPQIvazs3YdtlWAfiIUnwK");

    //Data Models & Collection declaration
    var BusinessAudit = Parse.Object.extend("BusinessAudit", {
        //instance methods
    },
    {
        //class methods
    });

    function sendToParse(contact){
        var businessAudit = new BusinessAudit();

        businessAudit.set("fname", contact.fname?contact.fname:"");
        businessAudit.set("lname", contact.lname?contact.lname:"");
        businessAudit.set("email", contact.email?contact.email:"");
        businessAudit.set("phone", contact.phone?contact.phone:"");
        businessAudit.set("business", contact.business?contact.business:"");
        businessAudit.set("website", contact.website?contact.website:"");
        businessAudit.set("address", contact.address?contact.address:"");
        businessAudit.set("city", contact.city?contact.city:"");
        businessAudit.set("state", contact.state?contact.state:"");
        businessAudit.set("zip", contact.zip?contact.zip:"");
        businessAudit.set("views", contact.views?contact.views:"");
        businessAudit.set("message", contact.message?contact.message:"");

        console.log('Saving audit request : '+businessAudit.toJSON());

        businessAudit.save(null, {
            success: function(businessAudit) {
                // The object was saved successfully.
                alert('Thanks for the request! We\'ll contact you shortly.');
            },
            error: function(businessAudit, error) {
                alert('Failed to send the audit request! Please try again.');
            }
        });
    }

    //audit form / parse cloud code
    if($('#sendForm').exists()){
        $('#sendForm').on('click',function(){
            var fname = $('#fnameForm').val();
            var lname = $('#lnameForm').val();
            var email = $('#emailForm').val();
            var phone = $('#phoneForm').val();
            var business = $('#businessForm').val();
            var website = $('#websiteForm').val();
            var address = $('#addressForm').val();
            var city = $('#cityForm').val();
            var state = $('#stateForm').val();
            var zip = $('#zipForm').val();
            var views = $('#viewsForm').val();
            var message = $('#messageForm').val();

            if(!fname){
                alert('Please fill the first name field');
            }else if(!lname){
                alert('Please fill the last name field');
            }else if(!email){
                alert('Please fill the email field');
            }else if(!phone){
                alert('Please fill the phone field');
            }else if(!business){
                alert('Please fill the business field');
            }else if(!website){
                alert('Please fill the website field');
            }else if(!isValidEmailAddress(email)){
                alert('Sorry but the email address is invalid, please try again');
            }else{
                sendToParse({fname: fname, lname: lname, email: email, phone: phone, business: business, website: website, address: address, city: city, state: state, zip: zip, views: views, message: message})
            }
        });
    }
})