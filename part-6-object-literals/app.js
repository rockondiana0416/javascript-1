const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'stevesmith@yahoo.com',
    hobbies: ['music', 'sports', 'running', 'swimming'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    // This is an object of age 2021 - 30 = 1991
    getBirthYear: function() {
        return 2021 - this.age;
    }
}

let val;

val = person;
// Get specific value //You will get the same value if you use either of these
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();


console.log(val);

// Create array with object
const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Steve', age: 45},
];

// This is a loop
for(let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}


// Dates
let val;
// Date is a reference type which is an object
const today = new Date();
const birthday = new Date('July 15, 1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();

birthday.setMonth(2);

console.log(birthday);