$(document).ready(function(){
	alert('Jquery is working!');

	$("#hide").click(function(){

		$("#image").hide();
	});

	$("#show").click(function(){

		$("#image").show();
	});

	$("#explode").click(function(){

		$("#image").hide("explode", {pieces:16}, 2000);
	});

	$("#fade_in").click(function(){

		$("#image").hide(2000);
	});

	$("#fade_out").click(function(){

		$("#image").show(2000);
	});


});