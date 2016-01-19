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
    $("#fol0").hide();
    $("#fol1").hide();
    $("#fol2").hide();
    $("#fol3").hide();
    $("#fol4").hide();

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

	// depending on checkbox selector 'cb' state, 
	// set visibility of widget selector 'target'
	//
	var toggleVis = function(cb, target) {

		if ($(cb).checked) {
			// console.log('chekt')
		} else {
			// console.log('wrekt')
		}
	}

	$('#provide').click( provideClick );		
	$('#subscribe').click( subscribeClick );

    $("#btnCancel1").click(function() {
    	$("#myLoginWrapper1").hide(400);
    });
    $("#btnCancel2").click(function() {
    	$("#myLoginWrapper2").hide(400);
    });

    // enable and disable email field
    // when textbox clicks
    //
    $("#c1").change( function() {
    	// this does not work for unknown reasons
    	// $("#emailfield").disabled = !this.checked;
    	$("#emailfield").prop('disabled', !this.checked);
 	});

    // kludge for mockup functionality simulating
    // subscribers selecting feeds
    //
	$("#v0").click( function() {
		$("#fol0").toggle();
   });

	$("#v1").click( function() {
		$("#fol1").toggle();
   });

	$("#v2").click( function() {
		$("#fol2").toggle();
   });

	$("#v3").click( function() {
		$("#fol3").toggle();
   });

	$("#v4").click( function() {
		$("#fol4").toggle();
   });

   for (i = 0; i < 5; i++) { 
   	// construct checkbox, divid selector
   	cbsel = "v" + i.toString();
   	divid = "fol" + i.toString();
   // 		console.log("HEY " + cbsel + " " + divid);

   // 	$("input[name=" + cbsel + "]").change( function(cbsel, divid) {
   // 		console.log("WHAT " + cbsel + " " + divid);
			// // if ($("input[name=" + cbsel + "]").checked) {
			// // 	console.log('chekt');
			// // } else {
			// // 	console.log('wrekt');
			// // }
	  //  });
   }
};

// bind function to ready event
$(document).ready(whenReady);


