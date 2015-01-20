<?php

/*
 * Constants
 */

// A constant is defined by using define()
// and can never be changed during runtime!

// a valid constant name starts with a letter or underscore,
// followed by any number of letters, numbers, or underscores.
define("FOO",     "something");

// access to a constant is possible by direct using the choosen name
echo 'This outputs '.FOO;
