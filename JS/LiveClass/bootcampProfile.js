// String - Sequence of char - "", '', ``
let name = "Rohit";

// Number - 
let age = 25;

// Boolean - true / false
let isPaid = true;

// 
let favouriteClass = null;
let homeTown; // unDefined

// Array []
let skills = [1, 2, 3, 4, 5, "A", "B", "C", "D", "E"];


// Object {}
let studentProfile = {
    name: "John",
    age: 26,
    City: "Bangalore",
    skills: ["HTML", "CSS", "Javascript"],
    certificate: null
}


// console.log(typeof(skills));

// console.log(2 < 5);

let numberofGuest = -1;
let pizzaSize;

// small <= 2
// medium <= 5
// large

if(numberofGuest <= 2) {
    pizzaSize = "small";
} else if(numberofGuest <= 5) {
    pizzaSize = "medium";
} else {
    pizzaSize = "large";
}
// console.log("pizzaSize :", pizzaSize);




// 90 >= A
// 80 >= B
// 70 >= C
// 60 >= D
// F 

function calculateGrade(score) {
    if(score >= 90) {
        return "A";
    } else if(score >= 80) {
        return "B";
    } else if(score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "Fail";
    }
}
let grade = calculateGrade(85);
// console.log("score", grade);
console.log(calculateGrade(70));