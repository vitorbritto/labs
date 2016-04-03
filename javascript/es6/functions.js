// =============================
// Functions
// =============================


// Function Declaration
function foo() {}


// Immediately-invoked function expression (IIFE)
(function () {
  console.log('Bazinga!');
}());


// Dealing with Arguments
function concatenateAll(...args) {
  return args.join('');
}


// Default Params
function handleThings(name, opts = {}) {
  // ...
}


// Arows Functions
const numbers = [1, 2, 3];

// Single Argument
numbers.map(x => x * x);

numbers.map((x) => {
  const y = x + 1;
  return x * y;
});

// Multiples Arguments
numbers.map(number => (
  `As time went by, the string containing the ${number} became much ` +
  'longer. So we needed to break it over multiple lines.'
));

numbers.map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});


// Guards
;(() => {
    const name = 'Vitor Britto';
    return name;
});


// This Context
function foo() {
    return () => {
        console.log(this);
    };
}
