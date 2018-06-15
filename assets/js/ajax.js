$(document).ready(function(){
	//enviamos por ajax un tag para poder validar en calculo.php el algoritmo
	//para enviar correo
	$("#formContacto").submit(function(e){
		e.preventDefault();
		var data = $(this).serializeArray();
	    data.push({name:'tag',value:'enviarcorreo'});

	    $.ajax({
	      url: 'calculo.php',
	      type: 'POST',
	      dataType: 'json',
	      data: data,
	    })
	    .done(function() {
	      alert("Gracias por su mensaje. Nos pondremos en contacto con usted en la brevedad posible.");
	    })
	    .fail(function() {
	      alert("Envio Fallido");
	    })
	    $(".fcontac input[type='text']").val("");
	    $(".fcontac input[type='email']").val("");
		$(".fcontac input[type='tel']").val("");
	    $(".fcontac textarea").val("");
	})


	new WOW().init();

})