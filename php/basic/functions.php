<?php

/*
 * Functions
 */

// Define a function with "function":
function my_function () {
  return 'Hello';
}

echo my_function(); // => "Hello"

// A valid function name starts with a letter or underscore, followed by any
// number of letters, numbers, or underscores.

function add ($x, $y = 1) { // $y is optional and defaults to 1
  $result = $x + $y;
  return $result;
}

echo add(4); // => 5
echo add(4, 2); // => 6

// $result is not accessible outside the function
// print $result; // Gives a warning.

// Since PHP 5.3 you can declare anonymous functions;
$inc = function ($x) {
  return $x + 1;
};

echo $inc(2); // => 3

function foo ($x, $y, $z) {
  echo "$x - $y - $z";
}

// Functions can return functions
function bar ($x, $y) {
  // Use 'use' to bring in outside variables
  return function ($z) use ($x, $y) {
    foo($x, $y, $z);
  };
}

$bar = bar('A', 'B');
$bar('C'); // Prints "A - B - C"

// You can call named functions using strings
$function_name = 'add';
echo $function_name(1, 2); // => 3
// Useful for programatically determining which function to run.
// Or, use call_user_func(callable $callback [, $parameter [, ... ]]);
