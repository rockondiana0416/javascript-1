// Function Declarations

function greet(firstName = 'John', lastName = 'Doe') {
     // console.log('Hello');
     return 'Hello';
 }

 console.log(greet('John'));

// Function Expressions

const square = function(x) {
    return x*x;
};

console.log(square(8));

// Imediately Invocable Function Expressions - IIFEs
// Expression
(function() {
    console.log('IIFE Ran..');
})();

(function(name) {
    console.log('Hello ' + name);
})('Brad');

// Property Methods, Functions Inside Objects

const todo = {
    add: function() {
        console.log('Add todo..')
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log('Delete todo..');
}

todo.add();
todo.edit(22);
todo.delete();


// // Loops for, while, and do while loops
// // For Loop
for(let i = 0; i < 10; i++) {
    if(i === 2) {
        console.log('2 is my favorite number')
        // will only log 2 is my favorite number, not the statement + number 2
        continue;
    }

    if(i === 5) {
        console.log('Stop the loop');
        break;
    }

    console.log(i);
}

// While loop
let i = 0;
// condition is in ()
while(i < 10) {
    console.log('Number ' + i);
    i++;
}

// // Do While, will always run once
let i = 0;

do {
    console.log('Number ' + i);
    i++;
}

while(i < 10);

// Loop through Arrays
// These next 2 examples do the same thing
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++) {
    // This will output the names of the cars
    console.log(cars[i]);
}

//For each Array loop
cars.forEach(function(car, index, array) {
console.log(`${index} : ${car}`);
console.log(array);
});

// Map 
const users = [
    {id:1, name: 'John'},
    {id:2, name: 'Alex'},
    {id:3, name: 'Dane'},
    {id:4, name: 'Diana'}
];

const ids = users.map(function(user) {
    return user.id;
});

console.log(ids);

// For in loop
const user = {
    firstName: 'John',
    lastName: 'Smith',
    age: 42
}

for(let x in user) {
    console.log(`${x} : ${user[x]}`);
}
