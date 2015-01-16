///////////////////////////////////////
// Types
///////////////////////////////////////

// ints are usually 4 bytes
int x_int = 0;

// shorts are usually 2 bytes
short x_short = 0;

// chars are guaranteed to be 1 byte
char x_char = 0;
char y_char = 'y'; // Char literals are quoted with ''

// longs are often 4 to 8 bytes; long longs are guaranteed to be at least
// 64 bits
long x_long = 0;
long long x_long_long = 0;

// floats are usually 32-bit floating point numbers
float x_float = 0.0f; // 'f' suffix here denotes floating point literal

// doubles are usually 64-bit floating-point numbers
double x_double = 0.0; // real numbers without any suffix are doubles

// integer types may be unsigned (only positive)
unsigned short ux_short;
unsigned int ux_int;
unsigned long long ux_long_long;

// chars inside single quotes are integers in machine's character set.
'0'; // => 48 in the ASCII character set.
'A'; // => 65 in the ASCII character set.

// sizeof(T) gives you the size of a variable with type T in bytes
// sizeof(obj) yields the size of the expression (variable, literal, etc.).
printf("%zu\n", sizeof(int)); // => 4 (on most machines with 4-byte words)


// If the argument of the `sizeof` operator is an expression, then its argument
// is not evaluated (except VLAs (see below)).
// The value it yields in this case is a compile-time constant.
int a = 1;
// size_t is an unsigned integer type of at least 2 bytes used to represent
// the size of an object.
size_t size = sizeof(a++); // a++ is not evaluated
printf("sizeof(a++) = %zu where a = %d\n", size, a);
// prints "sizeof(a++) = 4 where a = 1" (on a 32-bit architecture)

// Arrays must be initialized with a concrete size.
char my_char_array[20]; // This array occupies 1 * 20 = 20 bytes
int my_int_array[20]; // This array occupies 4 * 20 = 80 bytes
// (assuming 4-byte words)


// You can initialize an array to 0 thusly:
char my_array[20] = {0};

// Indexing an array is like other languages -- or,
// rather, other languages are like C
my_array[0]; // => 0

// Arrays are mutable; it's just memory!
my_array[1] = 2;
printf("%d\n", my_array[1]); // => 2

// In C99 (and as an optional feature in C11), variable-length arrays (VLAs)
// can be declared as well. The size of such an array need not be a compile
// time constant:
printf("Enter the array size: "); // ask the user for an array size
char buf[0x100];
fgets(buf, sizeof buf, stdin);

// strtoul parses a string to an unsigned integer
size_t size2 = strtoul(buf, NULL, 10);
int var_length_array[size2]; // declare the VLA
printf("sizeof array = %zu\n", sizeof var_length_array);

// A possible outcome of this program may be:
// > Enter the array size: 10
// > sizeof array = 40

// Strings are just arrays of chars terminated by a NULL (0x00) byte,
// represented in strings as the special character '\0'.
// (We don't have to include the NULL byte in string literals; the compiler
//  inserts it at the end of the array for us.)
char a_string[20] = "This is a string";
printf("%s\n", a_string); // %s formats a string

printf("%d\n", a_string[16]); // => 0
// i.e., byte #17 is 0 (as are 18, 19, and 20)

// If we have characters between single quotes, that's a character literal.
// It's of type `int`, and *not* `char` (for historical reasons).
int cha = 'a'; // fine
char chb = 'a'; // fine too (implicit conversion from int to char)

//Multi-dimensional arrays:
int multi_array[2][5] = {
{1, 2, 3, 4, 5},
{6, 7, 8, 9, 0}
};
//access elements:
int array_int = multi_array[0][2]; // => 3
