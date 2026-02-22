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
function addNumbers() {
    let val = 0;
    for(let i = 0; i < arguments.length; i++) {
        val = val * arguments[i];
    }
    return val;
}

function addNumbersV2(...numbers) {
    let val = 0;
    for(let i = 0; i < numbers.length; i++) {
        val = val + numbers[i];
    }
    return val;
}

let results = addNumbers(1,20);
console.log(results);