<?php

    $destino= "dsstornelli@gmail.com";
    $nombre= $_Post["nombre"]; 
    $correo = $_Post["email"];  /* Recibimos el dato de email (la clase), y lo guardamos en la variable correo.*/
    $mensaje = $_POST["mensaje"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje;
    mail($destino, "Contacto", $contenido); /*Se envía el mensaje con la funcion "mail". La segunda variable seria el asunto. Si no hicimos una variable para eso, ponemos algo x. por ejemplo "Contacto". Eso es aparecerá en el asunto del mail.*/
    header("Location:gracias.html");  /*Con la función header nos redirecciona al usuario a otra pagina*/ 

?>