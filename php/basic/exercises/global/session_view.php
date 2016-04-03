<?php

	session_start();

	$name = $_SESSION['session_name'];
	$email = $_SESSION['session_email'];

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

	<h1><?php echo 'Welcome, '.$name.'!'; ?></h1>
	<h2><?php echo 'Your e-mail address is: '.$email; ?></h2>


</body>
</html>


