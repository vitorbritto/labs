
<?php

/*
 * Operators
 */




// Arithmetic
$sum        = 1 + 1; // 2
$difference = 2 - 1; // 1
$product    = 2 * 2; // 4
$quotient   = 2 / 1; // 2



// Shorthand arithmetic
$number = 0;
$number += 1;      // Increment $number by 1
echo $number++;    // Prints 1 (increments after evaluation)
echo ++$number;    // Prints 3 (increments before evaluation)
$number /= $float; // Divide and assign the quotient to $number



// Logic Operators
$a = 0;
$b = '0';
$c = '1';
$d = '1';

// assert throws a warning if its argument is not true

// These comparisons will always be true, even if the types aren't the same.
assert($a == $b); // equality
assert($c != $a); // inequality
assert($c <> $a); // alternative inequality
assert($a < $c);
assert($c > $b);
assert($a <= $b);
assert($c >= $d);

// The following will only be true if the values match and are the same type.
assert($c === $d);
assert($a !== $d);
assert(1 === '1');
assert(1 !== '1');

// Variables can be converted between types, depending on their usage.

$integer = 1;
echo $integer + $integer; // => 2

$string = '1';
echo $string + $string; // => 2 (strings are coerced to integers)

$string = 'one';
echo $string + $string; // => 0
// Outputs 0 because the + operator cannot cast the string 'one' to a number

// Type casting can be used to treat a variable as another type

$boolean = (boolean) 1; // => true

$zero = 0;
$boolean = (boolean) $zero; // => false

// There are also dedicated functions for casting most types
$integer = 5;
$string = strval($integer);

$var = null; // Null value
