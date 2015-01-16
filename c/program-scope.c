///////////////////////////////////////
// Program Scope
///////////////////////////////////////

// Declare function signatures in advance in a .h file, or at the top of
// your .c file.
void function_1();
int function_2(void);

// Must declare a 'function prototype' before main() when functions occur after
// your main() function.
int add_two_ints(int x1, int x2); // function prototype

// Your program's entry point is a function called
// main with an integer return type.
int main() {
  // print output using printf, for "print formatted"
  // %d is an integer, \n is a newline
  printf("%d\n", 0); // => Prints 0

} // end main function

int function_1() {

}
