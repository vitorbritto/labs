<?php

// BASE 64
// É um método para codificação de transferência na internet.
// Funciona como uma mão dupla, utilizando os método
// base64_encode() e base64_decode().
function encpt1() {
	$code = "O rato roeu a roupa do rei de Roma";
	$string = base64_encode($code);
	return $string;
}

// SHA1
// É um algoritmo com um hash de 160 bits de mão única
// que gera uma string alfa-numérica de 40 caracteres
function encpt2() {
	$code = "O rato roeu a roupa do rei de Roma";
	$string = sha1($code);
	return $string;
}

// MD5
// É um algoritmo com um hash de 128 bits de mão única
// que gera uma string alfa-numérica de 32 caracteres
function encpt3() {
	$code = "O rato roeu a roupa do rei de Roma";
	$string = md5($code);
	return $string;
}

echo 'BASE 64: ', encpt1(), '<br><br>';
echo 'SHA1: ', encpt2(), '<br><br>';
echo 'MD5: ', encpt3();

?>