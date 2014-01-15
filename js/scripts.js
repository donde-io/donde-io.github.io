$(document).ready(function(){
	jQuery.fn.exists = function(){return this.length>0;}
	if ($('.how-works .slides li').exists()) {
		 $(".how-works .slides > li").hover(function () {
			$('.how-works .slides li').removeClass("active");
			$(this).addClass("active");
		});
	}
	if ($('.info-section .box').exists()) {
		 $(".info-section .box").hover(function () {
			$('.info-section .box').removeClass("active");
			$(this).addClass("active");
		});
	}

    if($('.numbers .tabs .nav-tabs li').exists()){
        $('.numbers .tabs .nav-tabs li').hover(function(event){
            //console.log('hover number');
            $(this).find('a').click();
            event.stopPropagation()
        },function(e){});
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
		 $(".pricing-area .slides > li").hover(function () {
			$('.pricing-area .slides li').removeClass("active");
			$(this).addClass("active");
		});
	}
})