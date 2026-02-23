// Functions

function sayHello() {
    console.log('Hey Maulik');   
}

sayHello(); // Calling a function


// Parameters add(a, b)
function add(a, b) {
    console.log(a + b);
}
add(4, 8); // Arguments


function multiplicationFun(a, b) {
    console.log(a * b);
}
multiplicationFun(20, 20);


// Unlimited Arguments Accept
// Array-like, but not an Array: It has indexed elements (e.g., arguments[0], arguments[1]) and a length property, 
// but it does not have built-in Array methods like forEach(), map(), or pop(). You can convert it to a real Array 
// using Array.from(arguments) or the spread syntax [...arguments].
function addNumbers() {
    let val = 0;
    for(let i = 0; i < arguments.length; i++) {
        val = val * arguments[i];
    }
    return val;
}

function addNumbersV2(...numbers) { // Modern Alternative: Rest Parameters 
    let val = 0;
    for(let i = 0; i < numbers.length; i++) {
        val = val + numbers[i];
    }
    return val;
}

let results = addNumbers(1,20);
console.log(results);