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
		<?php

			$filename = 'names.txt';
			$handle = fopen($filename, 'r');
			$datain = fread($handle, filesize($filename));
			$names_array = explode(', ', $datain);

			foreach ($names_array as $names) {
				echo $names.'<br>';
			}

		?>
	</div>
</body>
</html>

