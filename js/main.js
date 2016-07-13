//obtiene la hora del pc
function hora(){
	
	setInterval( function() {
		
		var minutos = new Date().getMinutes();
		
		$(".m").html(( minutos < 10 ? "0" : "" ) + minutos);
	    },1000);
		
	setInterval( function() {
		
		var horas = new Date().getHours();
		
		$(".h").html(( horas < 10 ? "0" : "" ) + horas);
	    }, 1000);	
	
}
$(document).ready(function(){
		hora();
		var nuevahora=$(".clock").clone();
		$(".listas").html(nuevahora);
});
////hora chic	

function horaChicago(){
	
	setInterval( function() {
		
		var minutos = new Date().getMinutes();
		
		$(".m").html(( minutos < 10 ? "0" : "" ) + minutos);
	    },1000);
		
	setInterval( function() {
		
		var horas = new Date().getHours();
		
		$(".h").html((parseInt( horas < 10 ? "0" : "" ) + horas)+3);
	    }, 1000);	
	
}

$(document).ready(function(){
		$("#chicago").click(function(){
			var nuevahora=$(".clock").clone();
			
			$(".listas").html(nuevahora);
			horaChicago();
			
		})
		/*var nuevahora=$("").clone();
		$(".listas").html(nuevahora);*/
});
