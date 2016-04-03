<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Selecionar valores múltiplos</title>
</head>
<body>
	<form action="<?=$_SERVER['PHP_SELF']?>" method="post">
		<select name="teste[]" multiple>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
		</select>
		<input type="submit" value="Enviar" />
	</form>
	<?php
		$teste = $_POST['teste'];
		if ($teste){
			foreach ($teste as $t) {
				echo 'Selecionado: ',$t,'<br />';
			}
		}
	?>
</body>
</html>