// 
//  Javascript - JCS Week 2 Day 1 final jQuery Exercise
// 

// define function to be run later
var whenReady = function () {

	$("#myLoginWrapper").hide();

	var channelCount = 5;
	var i = 0;
	for (i = 0; i < channelCount; i++) { 
		$("#fol" + i.toString()).hide();
	};

	// callback for when user logs in as a provider
	//
	var provideClick = function() {
		console.log('about to set contact as post target');
		// set the dialog to go to the login for providers
		//
		$('#signinForm').get(0).setAttribute('action', '/provider_login'); 

		// show the modal login dialog
		//
		$("#myLoginWrapper").show(500);
		$(".dropdown").css('display','none');
	}
	// callback for when user logs in as a subscriber
	//
	var subscribeClick = function() {
		// set the dialog to go to the login for subscribers
		//
		$('#signinForm').get(0).setAttribute('action', '/subscriber_login'); 

		// show the modal login dialog
		//
		$("#myLoginWrapper").show(500);
		$(".dropdown").css('display','none');
	}

	// set up the click actions for providers/subscribers
	// in the navbar
	//
	$('#provide').click( provideClick );
	$('#subscribe').click( subscribeClick );

	// ensure that hovering over 'log in' displays the dropdown
	//
	$("#dropdown").hover ( 
		function() {$(".dropdown").css('display','block');}, 
		function() {$(".dropdown").css('display','none');}
	);

	// make sure that if the user cancels instead 
	// of logging in, the login form goes away.
	$("#btnCancel").click(function() {
		$("#myLoginWrapper").hide(400);
	});

	// enable and disable email field
	// when form textbox clicks
	//
	$("#c1").change( function() {
		// this does not work for unknown reasons
		// $("#emailfield").disabled = !this.checked;
		$("#emailfield").prop('disabled', !this.checked);
	});

   // on the subscriber page, set each provider checkbox to
   // toggle the visibility of the corresponding feed div
   // 
   for (i = 0; i < channelCount; i++) { 
	 	$("#v" + i.toString()).click( function() {
			// $("#fol" + i.toString()).toggle(); 
			// the above won't work because the concatenation
			// to produce the element name isn't evaluated
			// until click time, at which point i is static
			//  at the 'for' loop exit condition value.
			//
			// but the value of 'i' we need is contained in the
			// checkbox name, held in this.id, so we can
			// extract everything that isn't a number and
			// build the corresponding element name with that.
			var numray = this.id.split("v");
			$("#fol" + numray[1]).toggle(); 
	   });
   };

   $("#uploadV").click(function() {
   	console.log("YTMND");
   	if (this.checked) {
   		console.log('chekt');
	   	open('/upload_video','_self');
	   } else {
   		console.log('rekt');	   	
	   }
   });
};

// bind function to ready event
$(document).ready(whenReady);


