<?php

// CONFIGURAÇÕES COM ARRAY ASSOCIATIVO
$config['db'] = array(
	'host'     => 'localhost',
	'username' => 'root',
	'password' => 'root',
	'dbname'   => 'labs_pdo'
);

// CONEXÃO COM O DB
$db = new PDO('mysql:host=' . $config['db']['host'] . ';dbname=' . $config['db']['dbname'], $config['db']['username'], $config['db']['password']);


// SELECT QUERY
$query = $db->query("SELECT `articles`.`title` FROM `articles`");

// LOOP MOSTRADO NA TELA
while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
	echo $row['title'], '<br>';
}

// RESULTADOS RETORNADOS
echo '<p> Encontrados: ', $query->rowCount(), ' resultados.</p>';

?>