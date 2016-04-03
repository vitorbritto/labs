<?php

/*
 * Arrays
 */

// All arrays in PHP are associative arrays (hashmaps),

// Associative arrays, known as hashmaps in some languages.

// Works with all PHP versions
$associative = array('One' => 1, 'Two' => 2, 'Three' => 3);

// PHP 5.4 introduced a new syntax
$associative = ['One' => 1, 'Two' => 2, 'Three' => 3];

echo $associative['One']; // prints 1

// List literals implicitly assign integer keys
$array = ['One', 'Two', 'Three'];
echo $array[0]; // => "One"

// Add an element to the end of an array
$array[] = 'Four';

// Remove element from array
unset($array[3]);
