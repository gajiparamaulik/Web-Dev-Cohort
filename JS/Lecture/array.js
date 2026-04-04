let fruits = ["apple", "Cherry", "Banana"];
let intFruits = new Array("Kiwi", "Avacado");

fruits[0] = "Mango";

// fruits.push("Add-New");
// fruits.unshift("Second-item");

fruits.pop();

console.log(fruits);

// console.log(fruits);
// console.log(intFruits);

// console.log(fruits[0]);

// console.log(fruits.length);

// Study Reference - mdn array js

// Assignment: Write a blog on Hashnode about your favorite 10 array methods in story format

const arr = [4, 5, 9, 0, 1, 6, 2];

// sum or max

function findSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// console.log('sum :', findSum(arr));

// Use Reduce function

const reduceFun = arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

// console.log('sum :', reduceFun);


// Find Max number
function findMax(arr) {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
// console.log(findMax(arr));

// use Reduce method
const findMaxReduce = arr.reduce(function (max, curr) {
    if(curr > max) {
        max = curr;
    }
    return max;
}, 0);

// console.log(findMaxReduce);



const users = [
    { firstName: "Maulik", lastName: "Gajipara", age: 27 },
    { firstName: "John", lastName: "Wick", age: 44 },
    { firstName: "Miles", lastName: "Grey", age: 22 },
    { firstName: "Krish", lastName: "Author", age: 20 },
    { firstName: "Delta", lastName: "Duo", age: 22 },
];

const jointName = users.map((data) => data.firstName + " " + data.lastName);
console.log(jointName);

const ageCount = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(ageCount);


const getSameAge = users.filter((x) => x.age > 20).map((x) => x.firstName);
console.log(getSameAge);

const getAgeUseReduce = users.reduce((acc, curr) => {
    if(curr.age > 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log('getAgeUseReduce', getAgeUseReduce);