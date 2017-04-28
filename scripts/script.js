function setAverage(){
	$("#average").val( ($("#distance").val() / $("#amount").val()).toFixed(4) );
	//$("#average").val( ($("#distance").val() / $("#amount").val()) );
}

$("#calculateBtn").on('click', function(event){
	event.preventDefault();
	setAverage();
});

// Variable to hold request
var request;

// Bind to the submit event of our form
$("#dieselForm").submit(function(event){
	event.preventDefault();
	setAverage();
	
    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input");
	
    // Serialize the data in the form
    var serializedData = $form.serialize();
	
    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbz3NUvOMbUfPEPB8jnVmxEfSn-OExc7N62g88VQionRgxxtt6c/exec",
        type: "post",
        data: serializedData,
		crossDomain: true
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        console.dir(serializedData);
		
		// Log a message to the console
		if(0){
			console.log("Hooray, it worked!");
			console.log(response);
			console.log(textStatus);
			console.log(jqXHR);
		}
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });
	
});




