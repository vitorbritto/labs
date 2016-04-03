<?php

/*
 * Control Structures
 */

if (true) {
    print 'I get printed';
}

if (false) {
    print 'I don\'t';
} else {
    print 'I get printed';
}

if (false) {
    print 'Does not get printed';
} elseif(true) {
    print 'Does';
}

// ternary operator
print (false ? 'Does not get printed' : 'Does');

$x = 0;
if ($x === '0') {
    print 'Does not print';
} elseif($x == '1') {
    print 'Does not print';
} else {
    print 'Does print';
}



// This alternative syntax is useful for templates:
?>

<?php if ($x): ?>
This is displayed if the test is truthy.
<?php else: ?>
This is displayed otherwise.
<?php endif; ?>

<?php

// Use switch to save some logic.
switch ($x) {
    case '0':
        print 'Switch does type coercion';
        break; // You must include a break, or you will fall through
               // to cases 'two' and 'three'
    case 'two':
    case 'three':
        // Do something if $variable is either 'two' or 'three'
        break;
    default:
        // Do something by default
}

// While, do...while and for loops are probably familiar
$i = 0;
while ($i < 5) {
    echo $i++;
}; // Prints "01234"

echo "\n";

$i = 0;
do {
    echo $i++;
} while ($i < 5); // Prints "01234"

echo "\n";

for ($x = 0; $x < 10; $x++) {
    echo $x;
} // Prints "0123456789"

echo "\n";

$wheels = ['bicycle' => 2, 'car' => 4];

// Foreach loops can iterate over arrays
foreach ($wheels as $wheel_count) {
    echo $wheel_count;
} // Prints "24"

echo "\n";

// You can iterate over the keys as well as the values
foreach ($wheels as $vehicle => $wheel_count) {
    echo "A $vehicle has $wheel_count wheels";
}

echo "\n";

$i = 0;
while ($i < 5) {
    if ($i === 3) {
        break; // Exit out of the while loop
    }
    echo $i++;
} // Prints "012"

for ($i = 0; $i < 5; $i++) {
    if ($i === 3) {
        continue; // Skip this iteration of the loop
    }
    echo $i;
} // Prints "0124"
