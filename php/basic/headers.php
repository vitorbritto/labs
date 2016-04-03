<?php

/*
 * Headers
 */


// HEADER LOCATION
$redirect_page = 'http://www.vitorbritto.com.br';
$redirect = true;

header('Location: '.$redirect_page);

?>

<?php

// OB_STAR
ob_start();

?>

<h1>My Page</h1>
<p>This is my page.</p>

<?php

$redirect_page = 'http://www.google.com.br';
$redirect = false;

if ($redirect == true) {
	header('Location: '.$redirect_page);
}

ob_end_flush();

?>
