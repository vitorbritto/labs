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
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try {

	$db->beginTransaction();

	$db->query("INSERT INTO `articles` (`articles`.`title`) VALUES ('Another PDO Tutorial')");
	$db->query("UPDATE `articles` SET `articles`.`views` = 1 WHERE `articles`.`id` = " . $db->lastInsertId());

	$db->commit();

} catch (PDOException $e) {

	$db->rollBack();
	die($e->getMessage());

}

?>