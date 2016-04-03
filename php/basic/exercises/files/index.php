<?php
function file_rename() {
	$file = 'file_rename.txt';
	$rand = rand(10000,99999);

	if (rename($file, $rand.'.txt')) {
		$newfile = $rand.'.txt';
		echo 'File <strong>'.$file.'</strong> renomeado com sucesso para'.$newfile.'!';
	} else {
		echo 'Erro ao renomear este arquivo.';
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

			<form action="upload.php" method="POST" enctype="multipart/form-data">

			</form>


	</div>
</body>
</html>