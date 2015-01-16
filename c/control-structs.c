///////////////////////////////////////
// Control Structures
///////////////////////////////////////

if (0) {
    printf("I am never run\n");
} else if (0) {
    printf("I am also never run\n");
} else {
    printf("I print\n");
}

// While loops exist
int ii = 0;
while (ii < 10) { //ANY value not zero is true.
    printf("%d, ", ii++); // ii++ increments ii AFTER using its current value.
} // => prints "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "

printf("\n");

int kk = 0;
do {
    printf("%d, ", kk);
} while (++kk < 10); // ++kk increments kk BEFORE using its current value.
// => prints "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "

printf("\n");

// For loops too
int jj;
for (jj=0; jj < 10; jj++) {
    printf("%d, ", jj);
} // => prints "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "

printf("\n");

// *****NOTES*****:
// Loops and Functions MUST have a body. If no body is needed:
int i;
for (i = 0; i <= 5; i++) {
    ; // use semicolon to act as the body (null statement)
}

// branching with multiple choices: switch()
switch (a) {
    case 0: // labels need to be integral *constant* expressions
        printf("Hey, 'a' equals 0!\n");
        break; // if you don't break, control flow falls over labels
    case 1:
        printf("Huh, 'a' equals 1!\n");
        break;
    default:
        // if `some_integral_expression` didn't match any of the labels
        fputs("error!\n", stderr);
        exit(-1);
        break;
}
