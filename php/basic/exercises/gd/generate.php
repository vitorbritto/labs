<?php

	require 'db.inc.php';

	header('Content-type: image/jpeg');

	if (isset($_GET['id'])) {
		$id = $_GET['id'];

		$query = mysql_query("SELECT email FROM users WHERE id='".mysql_real_escape_string($id)."'");
		if (mysql_num_rows($query) >= 1) {
			$email = mysql_result($query, 0, 'email');
		} else {
			$email = 'ID não encontrado.';
		}
	} else {
		$email = 'Nenhum ID especificado.';
	}

	$email_length = strlen($email);

	$font_size = 4;

	// dimensões da imagem
	$image_height = imagefontheight($font_size);
	$image_width = imagefontwidth($font_size) * $email_length;

	$image  = imagecreate($image_width, $image_height);

	imagecolorallocate($image, 255,255,255);
	$font_color = imagecolorallocate($image, 0,0,0);

	imagestring($image, $font_size, 0, 0, $email, $font_color);
	imagejpeg($image/*, $source.'.watermarked.jpg'*/);

?>