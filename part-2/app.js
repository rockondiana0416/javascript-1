// Primitive

// String
const name = 'John Doe';
// // // Number
const age = 45;
// // // Boolean
const hasKids = true;
// // Null
const car = null;
// // Undefined
let test;
// // Symbol
const sym = Symbol();

// // Reference Types - Objects
// // Array
const hobbies = ['movie', 'music'];
// // // Object literal
const address = {
    city: 'Boston',
    state: 'MA'
}
const today = new Date();

console.log(today);
console.log(typeof hobies);

// let val;

// // Number to string
val = String(555);
val = String(4+4);
// // Bool to a string
val = String(true);
// // Date to string
val = String(new Date());
// // Array to string
val = String([1,2,3,4]);

// // tooString()
val = (5).toString();
val = (true).toString();

// // String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
// // NaN Not a Number
val = Number('hello');

val = parseInt('100');
val = parseFloat('100.30');


// // Output
console.log(val);
console.log(typeof val);
console.log(val.length);

// // Method that only works on numbers
// // Allows to specify decimals
console.log(val.toFixed());

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

const num1 = 100;
const num2 = 50;

let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.6);
val = Math.floor(2.3);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 44, 5, 3);
val = Math.max(33, 55, 4,);
val = Math.random();

// Get a random number between 1 and 20
val = Math.floor(Math.random() * 20 + 1);




console.log(val);