///////////////////////////////////////
// Pointers
///////////////////////////////////////

// A pointer is a variable declared to store a memory address. Its declaration will
// also tell you the type of data it points to. You can retrieve the memory address
// of your variables, then mess with them.

int x = 0;
printf("%p\n", (void *)&x); // Use & to retrieve the address of a variable
// (%p formats an object pointer of type void *)
// => Prints some address in memory;


// Pointers start with * in their declaration
int *px, not_a_pointer; // px is a pointer to an int
px = &x; // Stores the address of x in px
printf("%p\n", (void *)px); // => Prints some address in memory
printf("%zu, %zu\n", sizeof(px), sizeof(not_a_pointer));
// => Prints "8, 4" on a typical 64-bit system

// To retrieve the value at the address a pointer is pointing to,
// put * in front to dereference it.
// Note: yes, it may be confusing that '*' is used for _both_ declaring a
// pointer and dereferencing it.
printf("%d\n", *px); // => Prints 0, the value of x

// You can also change the value the pointer is pointing to.
// We'll have to wrap the dereference in parenthesis because
// ++ has a higher precedence than *.
(*px)++; // Increment the value px is pointing to by 1
printf("%d\n", *px); // => Prints 1
printf("%d\n", x); // => Prints 1

// Arrays are a good way to allocate a contiguous block of memory
int x_array[20]; //declares array of size 20 (cannot change size)
int xx;
for (xx = 0; xx < 20; xx++) {
x_array[xx] = 20 - xx;
} // Initialize x_array to 20, 19, 18,... 2, 1

// Declare a pointer of type int and initialize it to point to x_array
int* x_ptr = x_array;
// x_ptr now points to the first element in the array (the integer 20).
// This works because arrays often decay into pointers to their first element.
// For example, when an array is passed to a function or is assigned to a pointer,
// it decays into (implicitly converted to) a pointer.
// Exceptions: when the array is the argument of the `&` (address-of) operator:
int arr[10];
int (*ptr_to_arr)[10] = &arr; // &arr is NOT of type `int *`!
// It's of type "pointer to array" (of ten `int`s).
// or when the array is a string literal used for initializing a char array:
char otherarr[] = "foobarbazquirk";
// or when it's the argument of the `sizeof` or `alignof` operator:
int arraythethird[10];
int *ptr = arraythethird; // equivalent with int *ptr = &arr[0];
printf("%zu, %zu\n", sizeof arraythethird, sizeof ptr); // probably prints "40, 4" or "40, 8"


// Pointers are incremented and decremented based on their type
// (this is called pointer arithmetic)
printf("%d\n", *(x_ptr + 1)); // => Prints 19
printf("%d\n", x_array[1]); // => Prints 19

// You can also dynamically allocate contiguous blocks of memory with the
// standard library function malloc, which takes one argument of type size_t
// representing the number of bytes to allocate (usually from the heap, although this
// may not be true on e.g. embedded systems - the C standard says nothing about it).
int *my_ptr = malloc(sizeof(*my_ptr) * 20);
for (xx = 0; xx < 20; xx++) {
*(my_ptr + xx) = 20 - xx; // my_ptr[xx] = 20-xx
} // Initialize memory to 20, 19, 18, 17... 2, 1 (as ints)

// Dereferencing memory that you haven't allocated gives
// "unpredictable results" - the program is said to invoke "undefined behavior"
printf("%d\n", *(my_ptr + 21)); // => Prints who-knows-what? It may even crash.

// When you're done with a malloc'd block of memory, you need to free it,
// or else no one else can use it until your program terminates
// (this is called a "memory leak"):
free(my_ptr);

// Strings are arrays of char, but they are usually represented as a
// pointer-to-char (which is a pointer to the first element of the array).
// It's good practice to use `const char *' when referring to a string literal,
// since string literals shall not be modified (i.e. "foo"[0] = 'a' is ILLEGAL.)
const char *my_str = "This is my very own string literal";
printf("%c\n", *my_str); // => 'T'

// This is not the case if the string is an array
// (potentially initialized with a string literal)
// that resides in writable memory, as in:
char foo[] = "foo";
foo[0] = 'a'; // this is legal, foo now contains "aoo"
