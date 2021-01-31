// Create arrays
const numbers = [55,23,45,83,66,5];
const numbers2 = new Array(22,45,66,78,97,58);
const fruit = ['Apple', 'Bannana', 'Orange', 'Grapes', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// console.log(mixed);

let val;

// Get array length
val = numbers.length;
// Check to see if it is an Array
val = Array.isArray(numbers);
// Get a single value
val = numbers[3]; //will return 83
// Insert into array
numbers[2] = 100; //Changes 45 to be 100
// Find index of value
val = numbers.indexOf(66); //will return a 4, it is in the fourth position

// MUTATING ARRAYS
numbers.push(250);  //Adds number to the end
numbers.unshift(120); //Adds number to the front
numbers.pop(); //Takes number off the end
numbers.shift(); //Takes number of the front
numbers.splice(1,3); //Takes out 23,45,83 //Takes out 1st postion to 3rd position
numbers.reverse();

// Concate arrays
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort(); //Will put in alphabetical order
val = numbers.sort();

// Use the "compare function"  //function to make sure numbers sorts the right way
val = numbers.sort(function(x, y) {
    return x - y;
});

// Sorts the reverse way
val = numbers2.sort(function(x, y) {
    return y - x;
});

// Find
function under50(num) {
    return num < 50;
}

val = numbers.find(under50); //Will return the 1st number in the array under 50

console.log(numbers);
console.log(val)