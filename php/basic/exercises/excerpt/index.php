<?php require 'excerpt.php'; ?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Excerpt</title>
</head>
<body>
	<p>
		<?php
			$content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis minus iste odit maiores est quis. Necessitatibus hic ratione id possimus dicta mollitia commodi omnis tempora in suscipit itaque qui deserunt.";
			echo excerpt($content, 140);
		?>
	</p>
</body>
</html>
