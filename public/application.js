$(function(){
	console.log('here');
	$("#all-messages").on("click", function(event) {
		//selector			events		handler
		// alert('click!');

		$.getJSON( "/messageboards", function( data ) {
			//Sconsole.log(data);
			// var container = $('#container');
			// var c = 0;
			// var r = 0;
			// var row = "<div id=row"+r+">";
			// row+="<div id=col1>";
			// on click of button, do e.preventDEfault(). then do a $.post (jquery ajax post method ) to server sending all the form data (grab it using $('vxyz filed').value ... the post method has success and failure callbacks. on success/failure doo what you have done below)

			data.forEach(function(d){
				
			// 	row.append
			// console.log(d.author);
			// console.log(d.title);
			$('.posts').append("<h3><font color='black'>"+d.author+"</font></h3>");
			$('.posts').append("<h4>"+d.title+"</h4>");
			$('.posts').append("<p>"+d.text+"</p>");


				
				
			});

		
		});          
	
	});  


	$("#post123").on("click", function(event) {
		event.preventDefault();
		var data = {
			title: $('#hashtags').val(),
			text: $('#message').val(),
			author: $('#name').val()

		};
		console.log(data);
		$.ajax({
		  type: "POST",
		  url: "/messageboards",
		  data: data,
		  dataType: "json",
		  success: function(response) {
		  	console.log(response);


		  },
		  error: function(response){
		  	console.log(response);
		  }
		  
		});


	});
});