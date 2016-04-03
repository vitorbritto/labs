<?php


// GLOBAL VARIABLES

// REMOTE ADDR
// $user_ip = $_SERVER['REMOTE_ADDR'];

// function show_ip() {
// 	global $user_ip;
// 	$str = 'Your IP address is: '.$user_ip;
// 	echo $str;
// }

// show_ip();

// GET IP VISITORS - METHOD ONE
// $ip_adr = $_SERVER['REMOTE_ADDR'];
// $ip_blocked = array('127.0.0.1', '100.100.100.100','::1');

// foreach ($ip_blocked as $ip) {
// 	if ($ip == $ip_adr) {
// 		die('Your IP, '.$ip_adr.' has been blocked.');
// 	}
// }

// GET IP VISITORS - BEST METHOD
// $ip_client = $_SERVER['HTTP_CLIENT_IP'];
// $ip_forwarded = $_SERVER['HTTP_X_FORWARDED_FOR'];
// $ip_remote = $_SERVER['REMOTE_ADDR'];

// if (!empty($ip_client)) {
// 	$ip_adr = $ip_client;
// } else if (!empty($ip_forwarded)) {
// 	$ip_adr = $ip_forwarded;
// } else {
// 	$ip_adr = $ip_remote;
// }

// echo $ip_adr;

// DETECT USER BROWSER
$browser = $_SERVER['HTTP_USER_AGENT'];
$browser = strtolower($browser);

// print_r($browser);
if ($browser == 'chrome/23.0.1271.64') {
	echo 'Congratulations! You are using Chrome!';
} else {
	echo 'Use Chrome, please!';
}
// print_r($browser);
// Using browsercap.ini
// $browser = get_browser($agent, true);



// HTTP HOST
// $host   = $_SERVER['HTTP_HOST'];
// $files  = $host.'/files';
// $images = $files.'/images/';
// $docs   = $files.'/docs/';
// $videos = $files.'/videos/';

// echo $host.'<br>';
// echo $files.'<br>';
// echo $images.'<br>';
// echo $docs.'<br>';
// echo $videos.'<br>';
?>