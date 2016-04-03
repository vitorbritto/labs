<?php
function check_file_exist() {
	$file = 'file.txt';

	if (file_exists($file)) {
		echo 'Este arquivo já existe.';
	} else {
		$handle = fopen($file, 'w');
		fwrite($handle, 'Um texto qualquer.');
		fclose($handle);
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
		<?php check_file_exist(); ?>
	</div>
</body>
</html>