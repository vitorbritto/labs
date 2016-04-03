<?php

// PREG_MATCH
// $string = 'This is a string.';

// if(preg_match('/is/', $string)) {
// 	echo 'Match found.';
// } else {
// 	echo 'No match found.';
// }

function has_space($str) {
	if (preg_match('/ /', $str)) {
		return true;
	} else {
		return false;
	}
}

$str = 'Thisdoesnthaveaspace';

if (has_space($str)) {
	echo 'Has at least one space.';
} else {
	echo 'Has no space';
}

?>