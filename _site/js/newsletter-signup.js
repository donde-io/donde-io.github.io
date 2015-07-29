$(document).ready(function(){
	function isValidEmailAddress(emailAddress) {
      var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
      return pattern.test(emailAddress);
  }

	if($('#newsLetterSignup').length){
        function newsLetterSignupTrack(){
            var email = $('#MERGE0').val();

            if(!email){
                alert('Please fill the email field');
            }else if(!isValidEmailAddress(email)){
                alert('Sorry but the email address is invalid, please try again');
            }else{               
              analytics.track('Subscribe to Newsletter', {
              	email: email
              });
            }
						return true;
        }

        $('#newsLetterSignup').on('click',newsLetterSignupTrack);
        $('#MERGE0').keypress(function(e){
            if (e.keyCode == 13){
							newsLetterSignupTrack();
							e.preventDefault();
						}
        });
    }
})