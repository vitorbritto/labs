<?php

require 'db.inc.php';

?>

<!doctype html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>DATABASE</title>
	<link rel="stylesheet" type="text/css" href="../_css/bootstrap.css" media="all">
	<link rel="stylesheet" type="text/css" href="../_css/style.css" media="all">
</head>
<body>
	<div id="container">
		<form action="index.php" method="get">
			Escolha um tipo de comida:<br>
			<select name="uh" id="">
				<option value="u">Unhealthy</option>
				<option value="h">Healthy</option>
			</select><br><br>
				<input type="submit" value="Submit" class="btn btn-primary">
		</form>
		<!-- SELECT `people`.`name`, `pets`.`pet`FROM `people`LEFT JOIN `pets` ON `people`.`id`= `pets`.`people_id`  -->
		<?php

		if (isset($_GET['uh']) && !empty($_GET['uh'])) {

			$uh = strtolower($_GET['uh']);

			if ($uh == 'u' || $uh == 'h') {

				$query = "SELECT `food`, `calories` FROM `food` WHERE `healthy_unhealthy` = '$uh' ORDER BY `id`";

				// $set_query = mysql_query($query);
				if ($set_query = mysql_query($query)) {

					// echo 'Query iniciada com sucesso!';
					if (mysql_num_rows($set_query) == NULL) {
						echo 'Nenhum resulado encontrado!';
					} else {
						while ($row = mysql_fetch_assoc($set_query)) {

							$food = $row['food'];
							$calories = $row['calories'];

							echo $food. ' tem '.$calories.' calorias <br>';
						}
					}

				} else {

					// echo 'Query falhou!';
					echo mysql_error();
				}

			}

		}

		?>
	</div>

</body>
</html>