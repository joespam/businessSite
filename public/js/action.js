// 
//  Javascript - JCS Week 2 Day 1 final jQuery Exercise
// 

//
//  commented out as a stub for future use
//

// define function to be run later
var whenReady = function () {

    $("#myLoginWrapper1").hide();
    $("#myLoginWrapper2").hide();
    
	// this is our callback function
	//
	var provideClick = function() {
		console.log('about to set provider_login as post');
		// set the dialog to go to the login for providers
		//
		
		$('#signinForm').action = '/contact';

		// if( typeof ($('#signinForm')) === 'undefined' ) {
		// 	$('#signinForm').action = "/provider_login";


		// // show the modal login dialog
		// //
	     $("#myLoginWrapper1").show(500);
		 // } else {
		 // 	console.log("WHY can't I get the signin form?");
		 // 	console.log(document);
		 // }
	}

	var subscribeClick = function() {
		// set the dialog to go to the login for subscribers
		//
		// $('#signinForm').action = "/subscriber_login";
		// document.getElementById('#signinForm').action = "/subscriber_login";
		// if( typeof ( document.getElementById('#signinForm') ) === 'undefined' ) {

		// show the modal login dialog
		//
	    $("#myLoginWrapper2").show(500);
		// } else {
		// 	console.log("Also undefined getting element by ID")
		// }
	}

	$('#provide').click( provideClick );		
	$('#subscribe').click( subscribeClick );

    $("#btnCancel1").click(function() {
    	$("#myLoginWrapper1").hide(400);
    });
    $("#btnCancel2").click(function() {
    	$("#myLoginWrapper2").hide(400);
    });
};

// bind function to ready event
$(document).ready(whenReady);


