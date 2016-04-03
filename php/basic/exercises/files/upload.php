<?php

function send_file() {
	$name = $_FILES['file']['name'];
	$ext  = strtolower(substr($name, strpos($name, '.') + 1));
	$type = $_FILES['file']['type'];

	$size = $_FILES['file']['size'];
	$max_size = 1000000;

	$tmp_name = $_FILES['file']['tmp_name'];

	// Checar caminho do arquivo
	// echo $tmp_name = $_FILES['file']['tmp_name'];
	// die();

	if (isset($name)) {

		if (!empty($name)) {

			if (($ext == 'jpg' || $ext == 'jpeg') && $type == 'image/jpeg') {

				if ($size<=$max_size) {

					$location = 'uploads/';

					if (move_uploaded_file($tmp_name, $location.$name)) {
						echo 'Arquivo enviado com sucesso.';
					} else {
						echo 'Falha ao enviar o arquivo.';
					}

				} else {
					echo 'O arquivo precisa ter menos que 1MB.';
				}

			} else {
				echo 'O arquivo precisa estar no formato JPG.';
			}

		} else {
			echo 'Selecione um arquivo.';
		}
	}
}

?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Envio de arquivo</title>
	<link rel="stylesheet" type="text/css" href="../_css/bootstrap.css" media="all">
	<link rel="stylesheet" type="text/css" href="../_css/style.css" media="all">
</head>
<body>
	<div id="container">
		<?php send_file(); ?>
		<form action="/" method="POST" enctype="multipart/form-data">
			<input type="file" name="file"><br><br>
			<input type="submit" value="Submit" class="btn btn-primary">
		</form>
	</div>
</body>
</html>