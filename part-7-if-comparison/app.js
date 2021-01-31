// if(something) {
//     do something
// } else {
//     do something else
// }

const id = 100;

// Equal to
// This will return correct
if(id == 100) {
    console.log('Correct')
} else {
    console.log('Incorrect')
}

// Not equal to 
// This will return incorrect
if(id != 100) {
    console.log('Correct')
} else {
    console.log('Incorrect')
}

// definite use === //This will return correct
if(id === 100) {
    console.log('Correct')
} else {
    console.log('Incorrect')
}

// definite not !== //This will return incorrect
if(id !== 100) {
    console.log('Correct')
} else {
    console.log('Incorrect')
}

// If you want to test to see if an object is undefined
// Make sure you use typeof
if(typeof id !== 'undefined') { 
    console.log(`The ID is ${id}`); //This will return "The ID is 100"
} else {
    console.log('NO ID'); //This will return NO ID
}

// Logical Operators
const name = 'Steve';
const age = '20';

if(age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
} //This will return that he is an adult

// Ternary Operator
// Shorthand
console.log(id === 100 ? 'Correct' : 'Incorrect');


// Switches
const color = 'red';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day;

switch(new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday'
        break;
    case 2:
        day = 'Tuesday'
        break;
    case 3:
        day = 'Wednesday'
        break;
    case 4:
        day = 'Thursday'
        break;
    case 5:
        day = 'Friday'
        break;
    case 6:
        day = 'Saturday'
        break;
}

console.log(`Today is ${day}`);

