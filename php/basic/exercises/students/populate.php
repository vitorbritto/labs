<?php require 'db.inc.php'; ?>

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

		<form action="populate.php" method="POST">
			<?php
			$query = "SELECT ensino FROM alunos";
			$set_query = mysql_query($query);
			// $set_rows = mysql_num_rows($set_query);
			echo "<select name = 'ensino'>";
			while (($row = mysql_fetch_assoc($set_query)) != null)
			{
			    echo "<option value = '{$row['id']}'";
			    if ($selected_id == $row['id'])
			        echo "selected = 'selected'";
			    echo ">{$row['ensino']}</option>";
			}
			echo "</select>";
			?>
			<input type="submit" value="busca" class="btn btn-primary">
		</form>
	</div>

</body>
</html>