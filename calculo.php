<?php 
	$tag = $_POST["tag"];

	if(isset($tag) && $tag!=""){

		if($tag=='enviarcorreo'){
			$nombre = $_POST["nombre"];
			$correo = $_POST["correo"];
			$fono = $_POST["telefono"];
			$sms = $_POST["mensaje"];

			$correo = trim($correo);//para quitar espacios al inicio y final de la cadena
			$correo = filter_var($correo,FILTER_SANITIZE_EMAIL);//valida que no existan caracteres invalidos dentro de la cadena

			$destinatario = 'info@qenkotronics.com';
			$asunto = 'Correo Qenkotronics';
			$mensaje = '
                                -----------------------------------------
				Email Contáctenos
				-----------------------------------------

				El Señor(a) : '.$nombre.' 
				Teléfono  : '.$fono.'
				Email 	  : '.$correo.'

				Te envio una consulta desde tu pagina web con el siguiente mensaje:'."\n".$sms."\n\n".' Qenkotronics';

			mail($destinatario,$asunto,$mensaje);
			
			print true;
		}else{
			print false;
		}
	}


 ?>
