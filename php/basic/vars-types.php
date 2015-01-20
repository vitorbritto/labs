<?php

/*
 * Types & Variables
 */

// Variables begin with the $ symbol.
// A valid variable name starts with a letter or underscore,
// followed by any number of letters, numbers, or underscores.

// Boolean values are case-insensitive
$boolean = true;  // or TRUE or True
$boolean = false; // or FALSE or False

// Integers
$int1 = 12;   // => 12
$int2 = -12;  // => -12
$int3 = 012;  // => 10 (a leading 0 denotes an octal number)
$int4 = 0x0F; // => 15 (a leading 0x denotes a hex literal)

// Floats (aka doubles)
$float = 1.234;
$float = 1.2e3;
$float = 7E-10;

// Delete variable
unset($int1)

// Strings should be enclosed in single quotes;
$sgl_quotes = '$String'; // => '$String'

// Avoid using double quotes except to embed other variables
$dbl_quotes = "This is a $sgl_quotes."; // => 'This is a $String.'

// Special characters are only escaped in double quotes
$escaped   = "This contains a \t tab character.";
$unescaped = 'This just contains a slash and a t: \t';

// Enclose a variable in curly braces if needed
$money = "I have $${number} in the bank.";

// Since PHP 5.3, nowdocs can be used for uninterpolated multi-liners
$nowdoc = <<<'END'
Multi line
string
END;

// Heredocs will do string interpolation
$heredoc = <<<END
Multi line
$sgl_quotes
END;

// String concatenation is done with .
echo 'This string ' . 'is concatenated';
