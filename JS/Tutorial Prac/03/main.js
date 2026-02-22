// Logical Operator

// AND - All Condition must be true (&&)
// OR  - Atleast one Condition Should be true (||)
// NOT - (!)

const age = 22;
const gender = 'Male';

if(age >= 18 && gender == 'Male') {
    console.log('You Are Adult.!');
}


// OR
const item = 55;
const city = 'Mumbai';

if(item >= 110 || city == 'ss') {
    console.log('Item not Matched.!');
}


// NOT
const number = 3;
if(number %2 == 0) {
    console.log('Even');
} else {
    console.log("ODD");
}