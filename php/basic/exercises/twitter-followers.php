<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>TWITTER</title>
	<link rel="stylesheet" type="text/css" href="../_css/bootstrap.css" media="all">
	<link rel="stylesheet" type="text/css" href="../_css/style.css" media="all">
</head>
<body>
	<div id="container">
		<?php
			$username = 'vitorbritto'; // insira o nome da sua conta
			$url      = 'http://api.twitter.com/1/users/show.json?screen_name='.urlencode($username).'&include_entities=true';
			$feed     = file_get_contents($url);
			$twitter_decoded = json_decode($feed);
			echo '<p class=\'followers\'> Seguidores: </p>';
			echo '<h3><strong>', $twitter_decoded->followers_count,'</strong></h3>';
		?>
	</div>
</body>
</html>