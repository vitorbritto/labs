///////////////////////////////////////
// Typecasting
///////////////////////////////////////

// Every value in C has a type, but you can cast one value into another type
// if you want (with some constraints).

int x_hex = 0x01; // You can assign vars with hex literals

// Casting between types will attempt to preserve their numeric values
printf("%d\n", x_hex); // => Prints 1
printf("%d\n", (short) x_hex); // => Prints 1
printf("%d\n", (char) x_hex); // => Prints 1

// Types will overflow without warning
printf("%d\n", (unsigned char) 257); // => 1 (Max char = 255 if char is 8 bits long)

// For determining the max value of a `char`, a `signed char` and an `unsigned char`,
// respectively, use the CHAR_MAX, SCHAR_MAX and UCHAR_MAX macros from <limits.h>

// Integral types can be cast to floating-point types, and vice-versa.
printf("%f\n", (float)100); // %f formats a float
printf("%lf\n", (double)100); // %lf formats a double
printf("%d\n", (char)100.0);
