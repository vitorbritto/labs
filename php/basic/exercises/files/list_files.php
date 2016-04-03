<?php

function list_directory() {
	$dir = 'files';

	if ($handle = opendir($dir.'/')) {

		echo 'Você está em: '.$dir.'<br>';

		while ($file = readdir($handle)) {
			if ($file != '.' && $file != '..') {
				echo '<a href="'.$dir.'/'.$file.'">'.$file.'</a><br>';
			}
		}
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
		<?php list_directory(); ?>
	</div>
</body>
</html>