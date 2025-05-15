// 01. JS Conditionals
// You are organizing a party and have a list of invited guests. But just before the party starts, a new friend decides to join. 
// You need to add them to the guest list.
// Problem Statement: Create a function that adds a new guest to the guest list and returns the updated list.

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}



// 02. JS Conditionals
// You are given three numbers. Determine the largest among them.
// Problem Statement:
// Write a function that takes three numbers and returns the largest using if-else.

function findLargest(a, b, c) { 
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >=c) { 
        return b;
    } else {
        return c;
    }
}



// 03. JS Conditionals
// You need to determine if a person is eligible to vote (age 18 or above).
// Problem Statement:
// Write a function that checks if a person is eligible to vote and returns "Eligible" or "Not Eligible".

function checkVotingEligibility(age) {
    if (age >= 18) {
        return "Eligible";
    } else {
        return "Not Eligible";
    }
}



// 04. JS Conditionals
// Given a student's marks, determine their grade based on this scale:
//  90+ → A
//  80-89 → B
//  70-79 → C
//  60-69 → D
//  Below 60 → F
// Problem Statement:
// Write a function that returns the corresponding grade using if-else.

function calculateGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) { 
        return "B";
    } else if (marks >= 70) { 
        return "C";
    } else if (marks >= 60) { 
        return "D";
    } else {
        return "F";
    }
}



// 05. JS Conditionals
// A leap year is divisible by 4, but not by 100 unless also divisible by 400.
// Problem Statement:
// Write a function to check if a year is a leap year.

function isLeap (year){
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}



// 06. JS Conditionals
// You need to determine what action to take based on traffic light colors:
// "Red" → Stop
// "Yellow" → Slow Down
// "Green" → Go
// "Blue" → Invalid Color
// Problem Statement:
// Write a function that uses switch-case to return the correct action.

function trafficLightAction(color) { 
    switch (color.toLowerCase()) { 
        case "red":
            return "Stop";
        case "yellow":
            return "Slow Down";
        case "green":
            return "Go";
        default:
            return "Invalid Color";
    }
}



// 07. JS Conditionals
// Given a number (1-7), return the corresponding day of the week.
// Problem Statement:
// Write a function that uses switch-case to return the day name for valid inputs otherwise "Invalid Day".

function getDayOfWeek(day) {
    switch (day) { 
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid Day";
    }
}



// 08. JS Conditionals
// Determine if a number is positive, negative, or zero.
// Problem Statement:
// Write a function that uses if-else to classify a number.


function checkNumberType(num) { 
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}




// 09. JS Conditionals
// Given a temperature and a scale ("C" or "F"), convert it to the other scale.
// Problem Statement:
// Write a function that uses switch-case to convert temperature.


function convertTemperature(value, scale) {
    switch (scale) { 
        case "C":
            return (value * 9) / 5+32 + "°F";
        case "F":
            return ((value - 32) * 5) / 9 + "C";
        default:
            return "Invalid Scale";
    }
}


// 10. JS Conditionals
// Create a basic calculator that performs +, -, *, / based on user input.
// Problem Statement:
// Write a function that uses switch-case to perform arithmetic operations. Handle the edge case of "Cannot divide by zero".


function calculator(num1, num2, operator) {
    switch (operator) { 
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 *num2;
        case "/":
            return num2 !== 0 ? num1 / num2: "Cannot divide by zero";
        default:
            return "Invalid Operator";
    }
}

