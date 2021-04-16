$(document).ready(function(){
	$(".rslides").responsiveSlides({
		auto: true,             // Boolean: Animate automatically, true or false
		speed: 500,            // Integer: Speed of the transition, in milliseconds
		timeout: 30000,          // Integer: Time between slide transitions, in milliseconds
		pager: false,           // Boolean: Show pager, true or false
		nav: true,             // Boolean: Show navigation, true or false
		random: false,          // Boolean: Randomize the order of the slides, true or false
		pause: false,           // Boolean: Pause on hover, true or false
		pauseControls: true,    // Boolean: Pause when hovering controls, true or false
		prevText: "Prev",   // String: Text for the "previous" button
		nextText: "Next",       // String: Text for the "next" button
		maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
		navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
		manualControls: "",     // Selector: Declare custom pager navigation
		namespace: "rslides",   // String: Change the default namespace used
		before: function(){},   // Function: Before callback
		after: function(){}     // Function: After callback
	});
	$('.customerSectionSlideshow').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true,
		arrows:false,
		autoplay:true
	});
	$('.slide-product-details').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots:false,
		arrows:true,
		autoplay:true,
		responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots:false,
		arrows:true,
		autoplay:true
      }
  }
    
  ]
	});
	$('.our-customer-solution').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots:false,
		arrows:true,
		infinite: false,
		autoplay:true,
			responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots:false,
		arrows:true,
		autoplay:true
      }
  }

  ]
	});
	$(".app_customer-bor").click(function(){
		var id = $(this).attr('data-id');
		$(".app_customer-bor").removeClass("active");
		$(".appsection").hide();
		$(this).addClass('active');
		$("#"+id).show();
	});
	$('.whyChooseUsSectionImgSlick').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 2,
		dots:false,
		arrows:false,
		autoplay:true
	});	
});
// function initMap() {
	// var uluru = {lat: 13.068928, lng: 80.217629};
	// var map = new google.maps.Map(document.getElementById('map'), {
	  // zoom: 17,
	  // scrollwheel: false,
	  // center: uluru
	// });
	// var marker = new google.maps.Marker({
	  // position: uluru,
	  // map: map
	// });
  // }

var	menuRight = document.getElementById( 'cbp-spmenu-s2' ),
showRightPush = document.getElementById( 'showRightPush' ),
body = document.body;
showRightPush.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'cbp-spmenu-push-toleft' );
	classie.toggle( menuRight, 'cbp-spmenu-open' );
	disableOther( 'showRightPush' );
	$("#showRightPush").hide();
};
menuHide.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'cbp-spmenu-push-toleft' );
	classie.toggle( menuRight, 'cbp-spmenu-open' );
	disableOther( 'showRightPush' );
	$("#showRightPush").show();
};
function disableOther( button ) {
	if( button !== 'showRightPush' ) {
		classie.toggle( showRightPush, 'disabled' );
	}
}
function blurtextbox(id){
	if($(id).val() != ''){
		$(id).next(".form_right_place").addClass("showplaceholder");
	}
	else{
		$(id).next(".form_right_place").removeClass("showplaceholder");
	}
}

$(window).on('load',function(){
	 $(".workWrapper").each(function(){
	 	$(this).css("height",$(window).height());
	 	
	 	if( $(window).width() < 991 ) {
		$(".workWrapper").css("height","680");
	}

		var contentTop = $(this).find(".work_new_name");
		var imgTop = $(this).find(".work-img");
		var outerVal = $(window).height() - 60;
		var contentTopHeight = (outerVal - $(contentTop).height())/2;
		var imgTopHeight = (outerVal - $(imgTop).height())/2;
		$(contentTop).css("margin-top",contentTopHeight);
		$(imgTop).css("margin-top",imgTopHeight);
	});
});
/*$(window).resize(function(){
	 $("[class^='work-bg']").each(function(){
		$(this).css("height",$(window).height());
		var contentTop = $(this).find(".work_new_name");
		var imgTop = $(this).find(".work-img");
		$(contentTop).css("margin-top",($(window).height() - 60 - $(contentTop).height()) / 2);
		$(imgTop).css("margin-top",($(window).height() - 60 - $(imgTop).height()) / 2);
	});
});*/

$('.carousel').carousel();
$(document).ready(function(){
    $(".project-content").click(function(){
        $(".popup-design ").fadeOut();
		var id = $(this).parent().attr('id');
		$("#"+id+"_content").show();
		$("body").addClass("overflow-hidden");
    });
     $(".close-btn-all").click(function(){
    	 $(".popup-design").fadeOut();
		 $("body").removeClass("overflow-hidden");
    });
});

//-------------------------------------------------------------
function isNumberKey(evt)
{
     var charCode = (evt.which) ? evt.which : event.keyCode
     if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

     return true;
}
//-------------------------------------------------------------
//To get plan type 
function jobType(plan){
	$("#jobtype").val(plan);
}

//**********************contactus validations***********************************************//
function homeContactUs(){
	$("#register").attr('disabled', true);

	$(".form-error").html('');
	var firstname 	 = $("#fullname").val();
	var email        = $("#email").val();
    var mobile       = $("#phone").val();
	var desc		 = $("#desc").val();

    if(firstname == ''){
		$(".nameErr").html("Please enter the fullname");
		$("#fullname").focus();
		$("#register").attr('disabled', false);
		return false;
	}else if(email == ''){
		$(".emailErr").html("Please enter the email id");
		$('#email').focus();
		$("#register").attr('disabled', false);
		return false;
	}else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
		$(".email").html("Please enter the valid email id");
		$("#email").focus();
		$("#register").attr('disabled', false);
		return false;
	}else if(mobile == ''){
		$(".mobile").html("Please enter the mobile number");
		$('#mobile').focus();
		$("#register").attr('disabled', false);
		return false;
	}else if(desc == ''){
		$(".desc").html("Please enter the description");
		$("#desc").focus();
		$("#register").attr('disabled', false);
		return false;
	}else if(grecaptcha.getResponse() == ''){
		$(".recaptcha").html("Please verify you robot or not");
		$("#recaptcha1").focus();
		$("#register").attr('disabled', false);
		return false;
    }
	else{

		if(firstname != '' && email != '' && mobile != '' && desc != '')
            {  
            	//$('#register').prop('disabled', true);
                var form_data = new FormData();
                form_data.append('firstname',firstname);
                form_data.append('email',email);
                form_data.append('mobile',mobile);
                form_data.append('desc',desc);
                form_data.append('action', 'homeContactUs');

                $.ajax({  
                    url: "ajaxFile.php", 
                    dataType: 'text',  
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,                         
                    type: 'post',
                    success: function(data){
                    	//alert(data);
                        if(data == 'success')
                        {
                        	$("#thanksmodal").modal('show');
                            $("#fullname").val("");$("#email").val("");$("#phone").val("");$("#desc").val("");
                            grecaptcha.reset();
                        }                   
                    }
                });
                return false;
            }  
    }	
}
function getFeedback(){
	
	$("#fdkRegister").attr('disabled', true);

	$(".form-error").html('');
	var firstname 	 = $("#your_name").val();
	var comments        = $("#comments").val();

    if(firstname == ''){

		$(".nameErr").html("Please enter the fullname");
		$("#your_name").focus();
		$("#fdkRegister").attr('disabled', false);
		return false;
	}else if(comments == ''){
		$(".commentErr").html("Please enter the comments");
		$('#comments').focus();
		$("#fdkRegister").attr('disabled', false);
		return false;
	}
	else{

		if(firstname != '' && comments != '')
            {  
            	//$('#register').prop('disabled', true);
                var form_data = new FormData();
                form_data.append('firstname',firstname);
                form_data.append('comments',comments);
                form_data.append('action', 'feedback');

                $.ajax({  
                    url: "ajaxFile.php", 
                    dataType: 'text',  
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,                         
                    type: 'post',
                    success: function(data){
                    	//alert(data);
                        if(data == 'success')
                        {
                        	$("#thanksmodal").modal('show');
                            $("#firstname").val("");$("#comments").val("");
                        }                   
                    }
                });
                return false;
            }  
    }	
}
function getContactUs(){

	$("#conRegister").attr('disabled', true);

	$(".form-error").html('');
	var firstname 	 = $("#firstname").val();
	var lastname     = $("#lastname").val();
	var email        = $("#email").val();
    var mobile       = $("#mobile").val();
	var desc		 = $("#details").val();

    if(firstname == ''){
		$(".fnameErr").html("Please enter the firstname");
		$("#firstname").focus();
		$("#conRegister").attr('disabled', false);
		return false;
	}else if(lastname == ''){
		$(".lnameErr").html("Please enter the lastname");
		$("#lastname").focus();
		$("#conRegister").attr('disabled', false);
		return false;
	}else if(email == ''){
		$(".emailErr").html("Please enter the email id");
		$('#email').focus();
		$("#conRegister").attr('disabled', false);
		return false;
	}else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
		$(".emailErr").html("Please enter the valid email id");
		$("#email").focus();
		$("#conRegister").attr('disabled', false);
		return false;
	}else if(mobile == ''){
		$(".mobile").html("Please enter the mobile number");
		$('#mobile').focus();
		$("#conRegister").attr('disabled', false);
		return false;
	}else if(desc == ''){
		$(".detailsErr").html("Please enter the description");
		$("#details").focus();
		$("#conRegister").attr('disabled', false);
		return false;
	}/*else if(grecaptcha.getResponse() == ''){
		$(".recaptcha").html("Please verify you robot or not");
		$("#recaptcha").focus();
		$("#register").attr('disabled', false);
		return false;
    }*/
	else{
		if(firstname != '' && lastname != '' && email != '' && mobile != '' && desc != '')
            {  
            	//$('#register').prop('disabled', true);
                var form_data = new FormData();
                form_data.append('firstname',firstname);
                form_data.append('lastname',lastname);
                form_data.append('email',email);
                form_data.append('mobile',mobile);
                form_data.append('desc',desc);
                form_data.append('action', 'getContactUs');

                $.ajax({  
                    url: "ajaxFile.php", 
                    dataType: 'text',  
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,                         
                    type: 'post',
                    success: function(data){
                        if(data == 'success')
                        {
                        	$("#thanksmodal").modal('show');
                            $("#firstname").val("");$("#lastname").val("");$("#mobile").val("");$("#desc").val("");$("#email").val("");
                            //grecaptcha.reset();
                        }                   
                    }
                });
                return false;
            }  
    }	
}
function letsDiscussContact(){
	$("#register").attr('disabled', true);

	$(".form-error").html('');
	var firstname 	 = $("#firstname").val();
	var lastname     = $("#lastname").val();
	var email        = $("#email").val();
	var imo		     = $("#imo").val();
	var country		 = $("#country").val();
    var mobile       = $("#mobile").val();
	var desc		 = $("#desc").val();

    if(firstname == ''){
		$(".firstname").html("Please enter the firstname");
		$("#firstname").focus();
		$("#register").attr('disabled', false);
		return false;
	}else if(lastname == ''){
		$(".lastname").html("Please enter the lastname");
		$("#lastname").focus();
		$("#register").attr('disabled', false);
		return false;
	}else if(email == ''){
		$(".email").html("Please enter the email id");
		$('#email').focus();
		$("#register").attr('disabled', false);
		return false;
	}else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
		$(".email").html("Please enter the valid email id");
		$("#email").focus();
		$("#register").attr('disabled', false);
		return false;
	}else if(country == ''){
		$(".country").html("Please enter the Country");
		$('#country').focus();
		$("#register").attr('disabled', false);
		return false;
	}else if(mobile == ''){
		$(".mobile").html("Please enter the mobile number");
		$('#mobile').focus();
		$("#register").attr('disabled', false);
		return false;
	}else if(desc == ''){
		$(".desc").html("Please enter the description");
		$("#desc").focus();
		$("#register").attr('disabled', false);
		return false;
	}else if(grecaptcha.getResponse() == ''){
		$(".recaptcha").html("Please verify you robot or not");
		$("#recaptcha").focus();
		$("#register").attr('disabled', false);
		return false;
    }
	else{
		if(firstname != '' && lastname != '' && email != '' && mobile != '' && desc != '' &&  country != '')
            {  
            	//$('#register').prop('disabled', true);
                var form_data = new FormData();
                form_data.append('firstname',firstname);
                form_data.append('lastname',lastname);
                form_data.append('email',email);
                form_data.append('imo',imo);
                form_data.append('country',country);
                form_data.append('mobile',mobile);
                form_data.append('desc',desc);
                form_data.append('action', 'Lets-Discuss');

                $.ajax({  
                    url: "ajaxFile.php", 
                    dataType: 'text',  
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,                         
                    type: 'post',
                    success: function(data){
                        if(data == 'success')
                        {
                        	$("#thanksmodal").modal('show');
                            $("#firstname").val("");$("#lastname").val("");$("#country").val("");$("#mobile").val("");$("#imo").val("");$("#desc").val("");$("#email").val("");
                            grecaptcha.reset();
                        }                   
                    }
                });
                return false;
            }  
    }	
}
//-------------------------------------------------------------
function getInTouchValid(){

	$("#register2").attr('disabled', true);

	$(".form-error").html('');
	var firstname 	 = $("#ur_name").val();
	var company      = $("#ur_company").val();
	var imo          = $("#ur_imo").val();
	var phone        = $("#ur_phone").val();
	var mail		 = $("#ur_mail").val();
	var country		 = $("#ur_country").val();
	var craft        = $('input[name="jobtypenew"]:checked').val(); 
	var summary	     = $("#summary").val();
	
    if(firstname == ''){
		$(".ur_name").html("Please enter your name");
		$("#ur_name").focus();
		$("#register2").attr('disabled', false);
		return false;
	}else if(company == ''){
		$(".ur_company").html("Please enter your company");
		$("#ur_company").focus();
		$("#register2").attr('disabled', false);
		return false;
	}else if(phone == ''){
		$(".ur_phone").html("Please enter Your mobile number");
		$('#ur_phone').focus();
		$("#register2").attr('disabled', false);
		return false;
	}else if(mail == ''){
		$(".ur_mail").html("Please enter Your email id");
		$('#ur_mail').focus();
		$("#register2").attr('disabled', false);
		return false;
	}else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))){
		$(".ur_mail").html("Please enter Your valid email id");
		$("#ur_mail").focus();
		$("#register2").attr('disabled', false);
		return false;
	}else if(country == ''){
		$(".ur_country").html("Please select Your Country");
		$('#ur_country').focus();
		$("#register2").attr('disabled', false);
		return false;
	}else if(craft == undefined){
		$(".ur_craft").html("Please choose your job type");
		$("#craft").focus();
		$("#register2").attr('disabled', false);
		return false;
	}else if(summary == ''){
		$(".summary").html("Please enter Your project summary");
		$('#summary').focus();
		$("#register2").attr('disabled', false);
		return false;
	}
	else if(grecaptcha.getResponse() == ''){
		$(".recaptcha").html("Please verify you robot or not");
		$("#recaptcha").focus();
		$("#register2").attr('disabled', false);
		return false;
    }
	else{		
		if(firstname != '' && company != '' && mail != '' && phone != '' && summary != '' && craft != '' &&  country != '')
            {  

                var form_data = new FormData();
                form_data.append('firstname',firstname);
                form_data.append('company',company);
                form_data.append('email',mail);
                form_data.append('imo',imo);
                form_data.append('country',country);
                form_data.append('mobile',phone);
                form_data.append('summary',summary);
                form_data.append('craft',craft);
                form_data.append('action', 'GetInTouch');

                $.ajax({  
                    url: "ajaxFile.php", 
                    dataType: 'text',  
                    cache: false,
                    contentType: false,  
                    processData: false,
                    data: form_data,                         
                    type: 'post',
                    success: function(data){
                        	//$("#getIntouch").trigger('reset');
                        	$("#thanksmodal").modal('show');  
                        	$("#ur_name").val("");$("#ur_company").val("");$("#ur_imo").val("");$("#ur_phone").val("");$("#ur_mail").val("");$("#ur_country").val("");$("#jobtype").val("");$("#summary").val("");
                        	grecaptcha.reset();                          
                            return false;                            
                    }
                });
                return false;
            }  
    }	
}
//-------------------------------------------------------------
function EnquiryContactForm(){

	$("#register1").attr('disabled', true);
	$(".formerror").html('');
	var name 	     = $("#name").val();
	var email        = $("#Email").val();
	var location	 = $("#location").val();
    var mobile       = $("#contactno").val();
    var imo		     = $("#skype").val();
	var desc		 = $("#message").val();
	var jobtype      = $("#jobtype").val();

    if(name == ''){
		$(".name").html("Please enter your name");
		$("#name").focus();
		$("#register1").attr('disabled', false);
		return false;
	}else if(email == ''){
		$(".Email").html("Please enter your email id");
		$('#Email').focus();
		$("#register1").attr('disabled', false);
		return false;
	}else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
		$(".Email").html("Please enter your valid email id");
		$("#register1").attr('disabled', false);
		$("#Email").focus();
		return false;
	}else if(location == ''){
		$(".location").html("Please enter the Country");
		$('#location').focus();
		$("#register1").attr('disabled', false);
		return false;
	}else if(mobile == ''){
		$(".contactno").html("Please enter the mobile number");
		$('#contactno').focus();
		$("#register1").attr('disabled', false);
		return false;
	}else if(desc == ''){
		$(".message").html("Please enter your description");
		$("#message").focus();
		$("#register1").attr('disabled', false);
		return false;
	}else if(grecaptcha.getResponse() == ''){
		$(".err-recaptcha").html("Please verify you robot or not");
		$("#recaptcha").focus();
		$("#register1").attr('disabled', false);
		return false;
    }
	else{
		if(name != '' && desc != '' && email != '' && mobile != '' && location != '' && jobtype != '' &&  location != '')
            {   
            	// /$('#register1').prop('disabled', true);
                var form_data = new FormData();
                form_data.append('firstname',name);
                form_data.append('country',location);
                form_data.append('email',email);
                form_data.append('imo',imo);
                form_data.append('mobile',mobile);
                form_data.append('desc',desc);
                form_data.append('jobtype',jobtype);
                form_data.append('action', 'enquiryContactus');

                $.ajax({  
                    url: "ajaxFile.php", 
                    dataType: 'text',  
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,                         
                    type: 'post',
                    success: function(data){
                        if(data == 'success')
                        {
                            //$("#thanksmodal").modal('show');
                            $("#name").val("");$("#Email").val("");$("#location").val("");$("#contactno").val("");$("#skype").val("");$("#message").val("");$("#jobtype").val("");
                            grecaptcha.reset();
                            window.location.reload();

                           
                        }                    
                    }
                });
                return false;
            }  
    }	
}
//-------------------------------------------------------------
function careerQuoteValid(){

	$(".form-error").html('');
	var jobtype      = $("#position").val();
	var name 	     = $("#Name").val();
	var email        = $("#email").val();
	var location	 = $("#location").val();
    var mobile       = $("#contactNo").val();
    var resume       = $("#resumeUpload").val();
	
	if(jobtype == ''){
		$(".position").html("Please choose your job type");
		$("#position").focus();
		return false;
	}else if(name == ''){
		$(".Name").html("Please enter your name");
		$("#Name").focus();
		return false;
	}else if(email == ''){
		$(".email").html("Please enter your email id");
		$('#email').focus();
		return false;
	}else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
		$(".email").html("Please enter your valid email id");
		$("#emails").focus();
		return false;
	}else if(location == ''){
		$(".location").html("Please enter the location");
		$('#location').focus();
		return false;
	}else if(mobile == ''){
		$(".contactNo").html("Please enter the mobile number");
		$('#contactNo').focus();
		return false;
	}else if(resume == ''){
		$(".resumeUpload").html("Please upload your resume");
		$('#resumeUpload').focus();
		return false;
	}else if (!/(\.(gif|jpg|jpeg|png|pdf|doc|docx))$/i.test(resume)){
            //alert("Company Document format should be (gif,jpg,jpeg,png,doc,docx,pdf)");
            $(".resumeUpload").html("Resume Document format should be (gif,jpg,jpeg,png,doc,docx,pdf)");
            $("#resumeUpload").focus();
            return false;
    }
	else{
		$("#careerForm").submit();
		$("#careerForm").unbind("submit");
    }	
}

//-------------Get Feedback-----------------
function getFeedbacks()
{
	$(".form-error").html('');
	var name 	     = $("#your_name").val();
	var comments     = $("#comments").val();
	
    if(comments == ''){
		$(".comments").html("Please enter your comments");
		$("#comments").focus();
		return false;
	}
	else if(comments != '')
    {   	
            var form_data = new FormData();
            form_data.append('name',name);
            form_data.append('comments',comments);
            form_data.append('action', 'feedback');

            $.ajax({  
                url: "ajaxFile.php", 
                dataType: 'text',  
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,                         
                type: 'post',
                success: function(data){
                    if(data == 'success')
                    {
                    	$("#feedback").trigger('reset');
                    	$("#thanksmodal").modal('show');
                        $("#your_name").val("");$("#comments").val("");
                    }                   
                }
            });
            return false;
             
    }	
}

//-------------------------------------------
$(document).ready(function() {
	$(".succMsg").addClass("succMsgshow")
	setTimeout(function() {
		$(".succMsg").removeClass("succMsgshow")
	},4000);
	$(".enSuccessMsg").addClass("show")
	setTimeout(function() {
		$(".enSuccessMsg").removeClass("show")
	},5000);

	$(".sentMsg").addClass("show")
	setTimeout(function() {
		$(".sentMsg").removeClass("show")
	},5000);


	$('.digital-wallet-section-left li a').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('.digital-wallet-section-left li a, .tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	var owl = $('#slider_wrapper').owlCarousel({
	    loop: false,
	    margin: 0,
	    nav: true,
	    animateOut: 'fadeOut',
	    touchDrag: false,
	    mouseDrag: false,
	    autoplay: true,
	    autoplayTimeout: 7000,
	    autoplayHoverPause: false,
	    responsive: {
	        0: {
	            items: 1
	        },
	        600: {
	            items: 1
	        },
	        1000: {
	            items: 1
	        }
	    }
	});
	owl.on('change.owl.carousel changed.owl.carousel', function(e) {
		if (e.property.name != 'position') return;
		var current = e.relatedTarget.current()
		var items = $(this).find('.owl-stage').children()
		var add = e.type == 'changed'
		items.eq(e.relatedTarget.normalize(current + 1)).toggleClass('before', add)
		items.eq(e.relatedTarget.normalize(current - 1)).toggleClass('after', add)
	});
});
//----------------------------------------------------
	
$('input').focus(function(){
	$(this).parents('.form-wrapper .form-group').addClass('focused');
});

$('input').blur(function(){
	var inputValue = $(this).val();
	if ( inputValue == "" ) {
		$(this).removeClass('filled');
		$(this).parents('.form-wrapper .form-group').removeClass('focused');  
	}
	else {
		$(this).addClass('filled');
	}
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".topBanner-wrap").css({
		backgroundSize: (100 + scroll/5)  + "%",
		top: -(scroll/10)  + "%",

		//Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
		//"-webkit-filter": "blur(" + (scroll/200) + "px)",
		//filter: "blur(" + (scroll/200) + "px)"
	});
});



