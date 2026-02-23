// Higher Order Functions and Call backs
// Higher Order Function - Agar ek function ek function ko hi arguments me accept karta hai.


// Higher oder function bcz this function accept as a argument
function addNum(a, b, cb) { // cb - callback
    let result =  a + b;
    cb(result);
}

function showResult(result) {
    console.log(result);
}

addNum(8, 30, showResult);
addNum(70, 56, val => console.log(val)); // short 