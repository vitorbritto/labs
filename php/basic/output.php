<?php


/*
 * Output
 */

echo('Hello World!');
// Prints Hello World! to stdout.
// Stdout is the web page if running in a browser.

print('Hello World!'); // The same as echo

// echo is actually a language construct, so you can drop the parentheses.
echo 'Hello World!';
print 'Hello World!'; // So is print

$paragraph = 'paragraph';

echo 100;        // Echo scalar variables directly
echo $paragraph; // or variables

// If short open tags are configured, or your PHP version is
// 5.4.0 or greater, you can use the short echo syntax
?>
<p><?= $paragraph ?></p>
<?php

$x = 1;
$y = 2;
$x = $y; // $x now contains the same value as $y
$z = &$y;
// $z now contains a reference to $y. Changing the value of
// $z will change the value of $y also, and vice-versa.
// $x will remain unchanged as the original value of $y

echo $x; // => 2
echo $z; // => 2
$y = 0;
echo $x; // => 2
echo $z; // => 0

// Dumps type and value of variable to stdout
var_dump($z); // prints int(0)

// Prints variable to stdout in human-readable format
print_r($array); // prints: Array ( [0] => One [1] => Two [2] => Three )
