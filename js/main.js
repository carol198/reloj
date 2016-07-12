$(document).ready(function() {
setInterval( function() {
	
	var minutos = new Date().getMinutes();
	
	$("#m").html(( minutos < 10 ? "0" : "" ) + minutos);
    },1000);
	
setInterval( function() {
	
	var horas = new Date().getHours();
	
	$("#h").html(( horas < 10 ? "0" : "" ) + horas);
    }, 1000);	
});

/*$(document).ready(function()){
	var nuevahora = new Date().getHours();
	$("#h").html((nuevahora == horas-6)+horas);
},1000);
});*/