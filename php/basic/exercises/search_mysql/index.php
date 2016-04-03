<?php include 'includes/view/header.php'; ?>

<form class="form-inline" action="" method="POST">
  <div class="input-append">
    <input type="text" name="keywords" class="span12"/>
    <input type="submit" class="btn" value="Search"/>
  </div>
</form>

<?php

if (isset($_POST['keywords'])) {

	$keywords = mysql_real_escape_string(htmlentities(trim($_POST['keywords'])));
	$errors = array();

	if (empty($keywords)) {
		$errors[] = '<div class="alert alert-error"> <a class="close" data-dismiss="alert" href="#">x</a>Por favor digite algo para iniciar a busca.</div>';
	} else if (strlen($keywords) < 3) {
		$errors[] = '<div class="alert alert-error"> <a class="close" data-dismiss="alert" href="#">x</a>O termo para a busca precisa ter mais que 3 caracteres.</div>';
	} else if (search_results($keywords) === 0) {
		$errors[] = '<div class="alert alert-error"> <a class="close" data-dismiss="alert" href="#">x</a>Sem resultados para'.$keywords.'</div>';
	}

	if (empty($errors)) {
		$results = search_results($keywords);
		$results_num = count($results);

		$suffix = ($results_num != 1) ? 's' : '';

		echo '<div class="alert alert-success"> <a class="close" data-dismiss="alert" href="#">x</a>O termo '.$keywords.'  retornou'.$results_num.' resultado'.$suffix.'</div>';

	} else {
		foreach ($errors as $error) {
			echo $error.'<br>';
		}
	}
}

?>

<?php include 'includes/view/footer.php'; ?>