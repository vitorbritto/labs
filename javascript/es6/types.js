// =============================
// Primitives
// =============================
//  - string
//  - number
//  - boolean
//  - null
//  - undefined
// =============================

const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); //  => 1, 9


// =============================
// Complex
// =============================
//  - object
//  - array
//  - function
// =============================

const foo = [1,2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
