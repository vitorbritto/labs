<?php

$num = 654;

$upper = 1000;
$lower = 500;

if ($num >= $lower && $num <= $upper) {
	echo 'OK!<br>';
} else {
	echo 'Number must be between '. $lower.' and '.$upper. '<br>';
}

$num1 = 654;

$canbe1 = 1000;
$canbe2 = 500;

if ($num1 == $canbe1 || $num1 == $canbe2) {
	echo 'OK!<br>';
} else {
	echo 'Not OK!<br>';
}

?>