// Problem: Create an object representing a type of tea with property for name, type, and caffeine content.
const teas = {
    name: 'Lemon Tea',
    type: 'Green',
    caffeine: 'Low'
}


// Problem: Access and print the name and type properties of the tea object.
console.log(teas.name);
console.log(teas.type);
console.log(teas['caffeine']);


// Problem: Add a new property origin to the tea object.
teas.origin = "China";
console.log(teas);


// Problem: Change the caffeine level of the tea object to "medium".
teas.caffeine = 'Medium';
console.log(teas);


// Problem: Remove the type property from the tea object.
delete teas.type;
console.log(teas);


// Problem: check if the tea object has a property origin.
console.log('origin' in teas);


// Problem: Use a for..in loop to print all properties of the tea object.
for(let key in teas) {
    console.log(key + ': ' + teas[key]);
}


// Problem: create a nested object representing different types of teas and their properties.
const myTeas = {
    greenTea: {
        name: 'Green Tea',
        cups: {
            one: '1',
            two: '2'
        }
    },
    blackTea: {
        name: 'Black Tea'
    }
}


// Problem: Create a copy of tea object.
const copyTea1 = { ...myTeas }; // Shallow copy bcz both object update
// copyTea1.greenTea.cups.one = 111;
// console.log(myTeas);

const newObj = new Object(myTeas);
console.log(newObj);


// Problem: Add a custom method describe to the tea object that returns a discription string.

// Problem: Merge two objects representing different teas into one.