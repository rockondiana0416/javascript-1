const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello my name is Brad';
const tags = 'web design, web developer, programming';

let val;

val = firstName + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName)

// Change case
val = firstName.toUpperCase();
val = firstName.toUpperCase();

// inderOf()
val = firstName.indexOf('l'); // This will return a 2
val = firstName.lastIndexOf('l'); //This will return a 3, it is looking for the first l from the end

// charAt()
val = firstName.charAt('2') //This will return an l William

// Get last char
val = firstName.charAt('firstName.length', -1); //This will return an m, last letter in William

// substring
val = firstName.substring(0, 4); //This will return Will, starting with 0 and givinig the first 4 characters

// slice
val = firstName.slice(0, 4),

// split
val = str.split(' '); //This will split my string into an array
val = tags.split(',');

// replace 
val = str.replace('Brad', 'Jack'); //This will replace Brad with Jack

// includes
val = str.includes('Hello'); //This will return true
val = str.indexOf('foo'); //This will return false

console.log(val);