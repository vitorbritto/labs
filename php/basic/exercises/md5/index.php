<?php

	function check_pass() {
		if ( isset($_POST['password']) && !empty($_POST['password']) ) {

		$password = md5($_POST['password']);

		$filename = 'hash.txt';
		$handle = fopen($filename, 'r');
		$filepass = fread($handle, filesize($filename));

			if ($password == $filepass) {
				echo 'Senha correta!';
			} else {
				echo 'Senha incorreta!';
			}

		} else {
			echo 'Por favor, digite uma senha.';
		}
	}

?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>MD5 ENCRYPTION</title>
	<link rel="stylesheet" type="text/css" href="../_css/bootstrap.css" media="all">
	<link rel="stylesheet" type="text/css" href="../_css/style.css" media="all">
</head>
<body>
	<div id="container">
		<?php check_pass(); ?>
		<form action="index.php" method="POST">
			<label for="password">Password:</label> <input type="text" name="password"><br><br>
			<input type="submit" value="Submit" class="btn btn-primary">
		</form>
	</div>
</body>
</html>