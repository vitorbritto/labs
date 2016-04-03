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

			$find = array('fuck', 'bitch', 'ass');
			$replace = array('f*ck', 'b**ch', '*ss');

			if (isset($_POST['text']) && !empty($_POST['text'])) {
				$text = $_POST['text'];
				$text_new = str_ireplace($find, $replace, $text);

				echo $text_new;
			}

		?>

		<hr>

		<form action="censoring.php" method="POST">
			<textarea type="text" rows="6" cols="30" name="text"><?php echo $text; ?></textarea>
			<input type="submit" value="Submit" class="btn btn-primary">
		</form>
	</div>

</body>
</html>