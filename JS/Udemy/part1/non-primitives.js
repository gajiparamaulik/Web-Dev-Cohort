let obj = {};

// console.log(obj);
// console.log(typeof obj);

let username = {
    firstName: "Maulik",
    isLoggedIn: true,
    'company name': "XYZ" 
}

username.firstName = "Mr. M";
username.lastName = "Gajipara";
// console.log(username);
// console.log(username.firstName);
// console.log(username.lastName);
// console.log(username['company name']);


let today = new Date();
// console.log(today.getDate());



// Array

let heros = ['A', 'B', 'C', 'D', 'E', true];
let anotherUser = ['Maulik', 'Gajipara', true, 'abcd'];

// console.log(anotherUser[0]);


console.log("1" + 1);
console.log(2 + '2');
console.log(3 * '3');

let trueVal = true;
let falseVal = false;

console.log("trueVal :", Number(trueVal));
console.log("falseVal :", Number(falseVal));
console.log(trueVal + 1);
console.log(falseVal + 1);
console.log(Number(falseVal) + 1);


let isVal = "2";
console.log('isVal :', Number(isVal));

let mixVal = "12abc";
console.log(Number(mixVal));
console.log(typeof Number(mixVal));


console.log('Check Null ', null);
console.log('Check Null ', Number(null));
console.log('Check undefined ', undefined);
console.log('Check undefined ', Number(undefined));