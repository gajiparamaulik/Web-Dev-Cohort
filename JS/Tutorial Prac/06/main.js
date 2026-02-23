// Arrow Functions

// 1. Syntax
function firstFun() {
    console.log("First Function Console...!");
}
// firstFun();

const helloWorldFun = () => {
    console.log('Hii World...!');
}
// helloWorldFun();

const addNum = (a, b) => {
    return a + b;
}
// console.log(addNum(40, 20));

const addNum2 = (a, b) => a + b; // One Liner Function
// console.log(addNum2(150, 900));


// 2. Arguments Keyword
const addNumbers = (...nums) => {
    console.log(nums);
}
addNumbers(10, 50, 80, 90);


// 3. Hoisting
sayHey(); // Hoisting normal function me available hai
function sayHey() {
    console.log('Hey THere..!');
}

// sayHelloWorld(); // if we use Arrow function then Hoisting is not working getting error
const sayHelloWorld = () => {
    console.log('Second FUnction calling for Hoisting...');
}
sayHelloWorld();


// 4. This Keyword
const obj = {
    value: 20,
    myFunction: function () {
        console.log(this);
    }
}

// Arrow Function
const obj2 = {
    value: 60,
    myFunction2: () => {
        console.log(this);
    }
}

obj.myFunction();
obj2.myFunction2();