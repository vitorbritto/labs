<?php

	$fail   = array('Error ao contectar ao banco de dados.', 'Falha ao acessar a tabela de dados');

	$host   = 'localhost';
	$user   = 'root';
	$pass   = 'root';

	$dbname = 'labs_search';

	if (mysql_connect($host, $user, $pass)) {
		if (mysql_select_db($dbname)) {
			// echo 'Conectado ao banco de dados com sucesso!';
		} else {
			die($fail[1]);
		}
	} else {
		 die($fail[0]);
	}

?>