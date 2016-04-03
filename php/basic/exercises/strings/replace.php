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
		<?php

		// SUBSTR REPLACE
		// $str = 'This part don\'t search. This part search.';
		// $str_new = substr_replace($str, 'vitor', 29, 4);

		// echo $str_new;

		// STRING REPLACE
		$find = array('suck', 'cock', 'fuck', 'bitch', 'ass', 'pussy');
		$replace = '*';

		$str = 'Suck my cock! I want to fuck you hard bitch. I am gonna make your ass bleed so much. I am gonna eat your pussy so hard!';
		$str_new = str_replace($find, $replace, $str);

		echo $str_new;

		?>


	</div>

</body>
</html>