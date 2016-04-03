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

// DRUMP ARRAY COM FETCH_ASSOC
$rows = $query->fetchAll(PDO::FETCH_ASSOC);
echo '<pre>', print_r($rows, true), '</pre>';

// DRUMP ARRAY COM FETCH_NUM
// $rows = $query->fetchAll(PDO::FETCH_NUM);
// echo '<pre>', print_r($rows, true), '</pre>';

?>