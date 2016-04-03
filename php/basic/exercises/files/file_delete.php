<?php
function file_delete() {
	$file = 'file_delete.txt';
	if (@unlink($file)) {
	 	echo 'Arquivo <strong>'.$file.'</strong> foi deletado com sucesso!';
	 } else {
	 	'Arquivo não pode ser excluído!';
	 }
}
?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>FILE HANDLING</title>
	<link rel="stylesheet" type="text/css" href="../_css/bootstrap.css" media="all">
	<link rel="stylesheet" type="text/css" href="../_css/style.css" media="all">
</head>
<body>
	<div id="container">
	</div>
</body>
</html>