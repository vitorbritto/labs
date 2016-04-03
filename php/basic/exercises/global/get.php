<?php

if ( isset($_GET['name']) && isset($_GET['email']) && isset($_GET['date']) ) {
	$name   = $_GET['name'];
	$email = $_GET['email'];
	$date  = $_GET['date'];
	if ( !empty($name) && !empty($email) && !empty($date) ) {
		echo 'Os dados inseridos foram: ',$name,$email,$date;
	} else {
		echo 'Preencha todos os campos!';
	}
}

?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>GLOBAL VARIABLES</title>

	<style>
		body {
			font-family: 'Arial';
			font-size: 12px;
			margin: 50px;
		}
		.input {
			-webkit-border-radius: 4px;
			   -moz-border-radius: 4px;
			      	border-radius: 4px;

			height: 18px;
			padding: 6px;
			border: 1px solid #d6d6d6;
			background: #f6f6f6;
			width: 200px;
		}
	</style>


</head>
<body>


	<form action="get.php" method="GET">
		Name:<br><input type="text" name="name" class="input"><br><br>
		Email:<br><input type="email" name="email" class="input"><br><br>
		Date:<br><input type="date" name="date" class="input"><br><br><br>
		<input type="submit" value="Submit">
	</form>

</body>
</html>


