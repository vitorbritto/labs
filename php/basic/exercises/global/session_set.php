<?php

	session_start();

	if ( isset($_POST['name']) && isset($_POST['email']) ) {
		$_SESSION['session_name'] = $_POST['name'];
		$_SESSION['session_email'] = $_POST['email'];
	}

?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>GLOBAL VARIABLES</title>
	<link rel="stylesheet" type="text/css" href="../_css/bootstrap.css" media="all">
	<link rel="stylesheet" type="text/css" href="../_css/style.css" media="all">
</head>
<body>
	<div id="container">
		<form action="session_view.php" method="POST">
			Name:<br><input type="text" name="name" class="input"><br>
			Email:<br><input type="email" name="email" class="input"><br><br>
			<input type="submit" value="Submit" class="btn btn-primary">
		</form>
	</div>
</body>
</html>