$("#calculateBtn").on('click', function(event){
	event.preventDefault();
	$("#average").val( $("#distance").val() / $("#amount").val() );
});

$("#submitBtn").submit(function( event ) {
  alert( "Handler for .submit() called." );
  event.preventDefault();
});