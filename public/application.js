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





});