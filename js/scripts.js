$(document).ready(function(){
	jQuery.fn.exists = function(){return this.length>0;}
	if ($('.how-works .slides li').exists()) {
		 $(".how-works .slides li").click(function () {
			$('.how-works .slides li').removeClass("active");
			$(this).addClass("active");
		});
	}
	if ($('.info-section .box').exists()) {
		 $(".info-section .box").click(function () {
			$('.info-section .box').removeClass("active");
			$(this).addClass("active");
		});
	}
	if ($('nav .btn-nav').exists()) {
		$("nav").has(".mobile-nav").addClass("has-child");
		$("nav a.btn-nav").click(function(){
			if(!$('nav').hasClass('drop-open')){
				$('nav').toggleClass("drop-open");
				$(".has-child").children(".mobile-nav").slideDown();
				return false;
			}
		});
		$('html').click(function(){
			$('.drop-open .mobile-nav').slideUp();
			$('.drop-open').removeClass('drop-open');
		})
		 $('nav .mobile-nav').click(function(event){
		 	event.stopPropagation();
		});
	}
	if ($('.gallery').exists()) {
		$('.gallery').flexslider();
	}
	if ($('.pricing-area .slides li').exists()) {
		 $(".pricing-area .slides li").click(function () {
			$('.pricing-area .slides li').removeClass("active");
			$(this).addClass("active");
		});
	}

    function isValidEmailAddress(emailAddress) {
        //var validEmail = new RegExp(/^[a-zA-Z0-9.!#$%&amp;'*+\-\/=?\^_`{|}~\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z0-9\-]+)*$/);
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(emailAddress);
    }

    //contact form / parse cloud code
    if($('#sendForm').exists()){
        //init AWA app
        Parse.initialize("W3sSL98svnTEc5KlVDmbTnz2J7UxeUWb4T9NP9wr", "5E1HX2jE46l9UBuChHMMEI35JFsqNYM4bOhRfBrk");

        //Data Models & Collection declaration
        var DemoRequest = Parse.Object.extend("DemoRequest", {
                //instance methods
            },
            {
                //class methods
            });
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
                var demoRequest = new DemoRequest();

                demoRequest.set("email", email);
                demoRequest.set("business", business);
                demoRequest.set("name", name);
                demoRequest.set("phone", phone);
                demoRequest.set("time", "");
                demoRequest.set("message", message);

                demoRequest.save(null, {
                    success: function(demoRequest) {
                        // The object was saved successfully.
                        alert('Thanks for the request! We\'ll contact you shortly.');
                    },
                    error: function(demoRequest, error) {
                        alert('Failed to send the demo request! Please try again.');
                    }
                });
            }
        });
    }
})