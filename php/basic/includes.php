<?php

/*
 * Includes
 */

// PHP within included files must also begin with a PHP open tag.

include 'my-file.php';
// The code in my-file.php is now available in the current scope.
// If the file cannot be included (e.g. file not found), a warning is emitted.

include_once 'my-file.php';
// If the code in my-file.php has been included elsewhere, it will
// not be included again. This prevents multiple class declaration errors

require 'my-file.php';
require_once 'my-file.php';
// Same as include(), except require() will cause a fatal error if the
// file cannot be included.

// Contents of my-include.php:
return 'Anything you like.';
// End file

// Includes and requires may also return a value.
$value = include 'my-include.php';

// Files are included based on the file path given or, if none is given,
// the include_path configuration directive. If the file isn't found in
// the include_path, include will finally check in the calling script's
// own directory and the current working directory before failing.
/* */
