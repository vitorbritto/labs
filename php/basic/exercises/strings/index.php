<?php

$break = '<br><br><br>';

// STRING LENGTH
$str = 'Vitor';

$str_length = strlen($str);

for ($i=0; $i <=$str_length; $i++) {
	echo $i.'<br>';
}

echo $break;

// STRING UPPERCASE AND LOWERCASE

$str = 'Hello World!';

$str_lower = strtolower($str);
$str_upper = strtoupper($str);

echo $str_lower.'<br>';
echo $str_upper;

echo $break;
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
		<form action="index.php" method="GET">
			<input type="text" name="username">
			<input type="submit" value="Submit" class="btn btn-primary">
		</form>
	</div>

</body>
</html>