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

// PREPARE METHOD
// $query = $db->prepare("SELECT `articles`.`title` FROM `articles` WHERE `articles`.`title` LIKE '%PDO%'");

// PREPARE METHOD WITH GET REQUEST USING MYSQL OBJECT
// $query = $db->prepare("SELECT `articles`.`title` FROM `articles` WHERE `articles`.`title` LIKE '%". mysql_real_escape_string($_GET['search']) ."%'");

// PREPARE METHOD WITH PDO OBJECT
$query = $db->prepare("SELECT `articles`.`title` FROM `articles` WHERE `articles`.`title` LIKE :search");

// GET REQUEST
$search = (isset($_GET['search'])) ? $_GET['search'] : '';

// BINDING VALUE
$query->bindValue(':search', '%' . $search . '%', PDO::PARAM_STR);

// // EXECUTE METHOD
$query->execute();

$rows = $query->fetchAll(PDO::FETCH_ASSOC);
echo '<pre>', print_r($rows, true), '</pre>';

?>