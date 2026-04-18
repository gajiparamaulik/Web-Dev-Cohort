// 1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like 
// `"Making green tea" when called with "green tea"`. Store the result in a variable named 'teaOrder`.

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea('Ginger Tea');
console.log(teaOrder);



// 2. Create a function named orderTea' that takes one parameter, `teaType`. Inside this function, 
// create another function named 'confirmOrder that returns a message like "Order confirmed for chai"`.
// Call confirmOrder from within `orderTea` and return the result.

function orderTea(teaType) {
    function confirmOrder() {
        return "Order confirmed for chai";
    }
    return confirmOrder();
}

let orderConfirmation = orderTea('Chai');
console.log(orderConfirmation);



// 3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The
// function should return the total cost by multiplying the `price` and `quantity`.
// Store the result in a variable named `totalCost`.


function greet() {} // Normal Function

const greetArrow = () => {} // Arrow Function

() => {} // UnNamed Function

const calculateTotal = (price, quantity) => {
    return price * quantity;
}

// OR

// const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(40, 10);
console.log('totalCost : ', totalCost);



// 4. Write a function named 'processTeaOrder that takes another function, `makeTea`, 
// as a parameter and calls it with the argument "earl grey"`.
// Return the result of calling `makeTea`.

function makeTea(typeOfTea) {
    return `makeTea ${typeOfTea}`;
}

function processTeaOrder(teaFunction) {
    return teaFunction("earl grey");
}   

let order = processTeaOrder(makeTea);
console.log("order : ", order);

// 5. Write a function named 'createTeaMaker' that returns another function. The returned function should take one parameter, 
// `teaType`, and return a message like ""Making green tea".
// Store the returned function in a variable named `teaMaker' and call it with ""green tea",

function createTeaMaker(name) {
    let score = 22;
    return function(teaType) {
        return `Making ${teaType} ${name} ${score}`;
    }
}

let teaMaker = createTeaMaker('test');
console.log('teaMaker : ', teaMaker('green tea'));