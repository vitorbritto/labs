<?php

$match = 'pass123';

if (isset($_POST['password'])) {
	$password = $_POST['password'];
	if (!empty($password)) {
		if ($password == $match) {
			echo 'Correto!';
		} else {
			echo 'Incorreto!';
		}
	} else {
		echo 'Preencha o campo!';
	}
}

?>

<form action="index.php" method="POST">
	Password:<br><input type="password" name="password"><br><br>
	<input type="submit" value="Enviar">
</form>