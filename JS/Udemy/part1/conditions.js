// Check if a number is greater then another number?

let num1 = 8;
let num2 = 20;

console.log("First code.");

if(num1 > num2) { // Block of code
    console.log("Num 1 is Greater then num2");
} else {
    console.log("Nope, Num1 is not greater.");
}

console.log("Last Code.");


// Check if a string is equal to another string?

let username = "work";
let anotherUsername = "work";

if(username == anotherUsername) {
    console.log("Pick Another Username");
} else {
    console.log("You can pick this username");
}



// Checking if a variable is a number or not?

let score = 44;

if(typeof score === 'number') { 
    console.log("Yup, This is a number.");
} else {
    console.log("No, This is not a number.");
}




// Cheking if a boolean value is true or false?

let isTeaReady = false;

if(isTeaReady) {
    console.log("Yes, Tea is ready.");
} else {
    console.log("No, Tea is not ready.");
}



// Cheking if an array is empty or not?

let items = [];

if(items.length === 0) {
    console.log("Array is empty.");
} else {
    console.log("Array is not empty.");
}