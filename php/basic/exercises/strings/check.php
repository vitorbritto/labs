<?php

	if (isset($_GET['username']) && !empty($_GET['username'])) {
		$username = $_GET['username'];
		$username_lc = strtolower($username);

		if ($username_lc == 'vitor') {
			echo 'You are the best!';
		}
	}

?>

<!doctype html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>STRINGS</title>
	<link rel="stylesheet" type="text/css" href="../_css/bootstrap.css" media="all">
	<link rel="stylesheet" type="text/css" href="../_css/style.css" media="all">

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script type="" src="../_js/bootstrap.min.js"></script>
</head>
<body>
	<div id="container">
		<form action="app.php" method="GET">
			<input type="text" name="username">
			<input type="submit" value="Submit" class="btn btn-primary">
		</form>
	</div>

</body>
</html>