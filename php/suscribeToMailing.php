<?php
// Guardar los datos recibidos en variables:

if ('array_key_exists('email', $_POST)') {

	$email = $_POST['email'];

	if($email != '' ){

		// Definir el correo de destino:
		$dest = "alfredo@capitalonline.com.mx";
		 
		// Estas son cabeceras que se usan para evitar que el correo llegue a SPAM:
		$headers = "From: Portal Onex <$email>\r\n";  
		$headers .= "X-Mailer: PHP5\n";
		$headers .= 'MIME-Version: 1.0' . "\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		 
		// Aqui definimos el asunto y armamos el cuerpo del mensaje
		$asunto = "Suscripcción a lista de Mailing";
		$cuerpo .= "El usuario ".$email." se ha registrado en Onex";



		// Agregar datos a CSV
		$lista =  array($email);

		
		$fp = fopen('registros/listaDeMailing.csv', 'a');
		fputcsv($fp, $lista);
		fclose($fp);

	    mail($dest,$asunto,$cuerpo,$headers); //ENVIAR!

	}
	else{ 
		echo "Error al momento de guardar tu correo";
	}
	
}else{
	echo "Falta ingresar Correo";
}; 
?>
