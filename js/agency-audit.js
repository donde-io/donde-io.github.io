$(document).ready(function(){
	function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(emailAddress);
    }

    //init parse tool app
    Parse.initialize("gHDRtWSuD02eG4HtB21RjRMeLZmH7PJvNVmhuNI7", "i2NqiVz7yionmTkeifhPQIvazs3YdtlWAfiIUnwK");

    //Data Models & Collection declaration
    var AgencyAudit = Parse.Object.extend("AgencyAudit", {
        //instance methods
    },
    {
        //class methods
    });

    function sendToParse(contact){
        var agencyAudit = new AgencyAudit();

        agencyAudit.set("fname", contact.fname?contact.fname:"");
        agencyAudit.set("lname", contact.lname?contact.lname:"");
        agencyAudit.set("email", contact.email?contact.email:"");
        agencyAudit.set("phone", contact.phone?contact.phone:"");
        agencyAudit.set("agency", contact.agency?contact.agency:"");
        agencyAudit.set("awebsite", contact.awebsite?contact.agency:"");
        agencyAudit.set("business", contact.business?contact.business:"");
        agencyAudit.set("website", contact.website?contact.website:"");
        agencyAudit.set("address", contact.address?contact.address:"");
        agencyAudit.set("city", contact.city?contact.city:"");
        agencyAudit.set("state", contact.state?contact.state:"");
        agencyAudit.set("zip", contact.zip?contact.zip:"");
        agencyAudit.set("views", contact.views?contact.views:"");
        agencyAudit.set("message", contact.message?contact.message:"");

        console.log('Saving audit request : '+agencyAudit.toJSON());

        agencyAudit.save(null, {
            success: function(agencyAudit) {
                // The object was saved successfully.
                alert('Thanks for the request! We\'ll contact you shortly.');
            },
            error: function(agencyAudit, error) {
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
            var agency = $('#agencyForm').val();
            var awebsite = $('#awebsiteForm').val();
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
            }else if(!agency){
                alert('Please fill the agency field');
            }else if(!awebsite){
                alert('Please fill the agency website field');
            }else if(!business){
                alert('Please fill the business field');
            }else if(!website){
                alert('Please fill the website field');
            }else if(!isValidEmailAddress(email)){
                alert('Sorry but the email address is invalid, please try again');
            }else{
                sendToParse({fname: fname, lname: lname, email: email, phone: phone, agency: agency, awebsite: awebsite, business: business, website: website, address: address, city: city, state: state, zip: zip, views: views, message: message})
            }
        });
    }
})