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

			$offset = 0;

			$find = 'is';
			$find_length = strlen($find);

			$str = 'This is a string, and it is an example.';

			while ($str_pos = strpos($str, $find, $offset)) {
				echo '<strong>'.$find.'</strong> encontrado em: '.$str_pos.'<br>';
				$offset = $str_pos + $find_length;
			}

		?>
	</div>

</body>
</html>