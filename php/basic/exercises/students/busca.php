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

		<form action="busca.php" method="POST" class="form-inline">
			<input type="text" name="busca">
			<input type="submit" value="busca" class="btn btn-primary">
		</form>

		<?php

		if (isset($_POST['busca'])) {
			$busca = $_POST['busca'];
			if (!empty($busca)) {

				if (strlen($busca) >=4) {
				$query = "SELECT nome FROM alunos WHERE nome LIKE '%".mysql_real_escape_string($busca)."%' OR ensino LIKE '%".mysql_real_escape_string($busca)."%'";
				$set_query = mysql_query($query);
				$set_rows = mysql_num_rows($set_query);

					if ($set_rows >= 1) {

						if ($set_rows < 2) {
							echo $set_rows.' resultado encontrado:<br>';
						} else {
							echo $set_rows.' resultados encontrados:<br>';
						}
						while ($row = mysql_fetch_assoc($set_query)) {
							echo $row['nome'].'<br>';
						}

					} else {
						echo 'Sem resultados';
					}
				} else {
					echo 'Digite 4 caracteres ou mais para retornar um resultado.';
				}
			} else {
				echo 'Por favor, digite algo para iniciar a pesquisa.';
			}
		}

		?>

	</div>

</body>
</html>