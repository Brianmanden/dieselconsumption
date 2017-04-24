const distance = $("#distance");
const amount = $("#amount");
const calculateBtn = $("#calculate");
const average = $("#average");

calculateBtn.on('click', function(e){
	e.preventDefault();
	const avg = distance.val() / amount.val();
	average.val(avg);
});