///////////////////////////////////////
// Operators
///////////////////////////////////////

// Shorthands for multiple declarations:
int i1 = 1, i2 = 2;
float f1 = 1.0, f2 = 2.0;

int b, c;
b = c = 0;

// Arithmetic is straightforward
i1 + i2; // => 3
i2 - i1; // => 1
i2 * i1; // => 2
i1 / i2; // => 0 (0.5, but truncated towards 0)

// You need to cast at least one integer to float to get a floating-point result
(float)i1 / i2 // => 0.5f
i1 / (double)i2 // => 0.5 // Same with double
f1 / f2; // => 0.5, plus or minus epsilon
// Floating-point numbers and calculations are not exact

// Modulo is there as well
11 % 3; // => 2

// Comparison operators are probably familiar, but
// there is no Boolean type in c. We use ints instead.
// (Or _Bool or bool in C99.)
// 0 is false, anything else is true. (The comparison
// operators always yield 0 or 1.)
3 == 2; // => 0 (false)
3 != 2; // => 1 (true)
3 > 2; // => 1
3 < 2; // => 0
2 <= 2; // => 1
2 >= 2; // => 1

// C is not Python - comparisons don't chain.
// Warning: The line below will compile, but it means `(0 < a) < 2`.
// This expression is always true, because (0 < a) could be either 1 or 0.
// In this case it's 1, because (0 < 1).
int between_0_and_2 = 0 < a < 2;
// Instead use:
int between_0_and_2 = 0 < a && a < 2;

// Logic works on ints
!3; // => 0 (Logical not)
!0; // => 1
1 && 1; // => 1 (Logical and)
0 && 1; // => 0
0 || 1; // => 1 (Logical or)
0 || 0; // => 0

//Conditional expression ( ? : )
int e = 5;
int f = 10;
int z;
z = (e > f) ? e : f; // => 10 "if e > f return e, else return f."

//Increment and decrement operators:
char *s = "iLoveC";
int j = 0;
s[j++]; // => "i". Returns the j-th item of s THEN increments value of j.
j = 0;
s[++j]; // => "L". Increments value of j THEN returns j-th value of s.
// same with j-- and --j

// Bitwise operators!
~0x0F; // => 0xF0 (bitwise negation, "1's complement")
0x0F & 0xF0; // => 0x00 (bitwise AND)
0x0F | 0xF0; // => 0xFF (bitwise OR)
0x04 ^ 0x0F; // => 0x0B (bitwise XOR)
0x01 << 1; // => 0x02 (bitwise left shift (by 1))
0x02 >> 1; // => 0x01 (bitwise right shift (by 1))

// Be careful when shifting signed integers - the following are undefined:
// - shifting into the sign bit of a signed integer (int a = 1 << 32)
// - left-shifting a negative number (int a = -1 << 2)
// - shifting by an offset which is >= the width of the type of the LHS:
//   int a = 1 << 32; // UB if int is 32 bits wide
