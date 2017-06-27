$(document).ready(function(){
	alert('jquery is working');

	$("#add").on("click", function(){
		var song = $("#song").val();
		console.log(song);

		var songAdded = "<li>" + song + "</li>";
		console.log(songAdded)

		$("#song-list").append(songAdded);

		$("#song").val(" ");
	})

});