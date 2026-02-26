function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    } 
}
console.log(add(2)(3)(5));

// using Arrow Function
const add2 = (a) => (b) => (c) => a + b + c;
console.log(add2(1)(2)(3));

function sendAutoEmail(to) {
    return function(subject) {
        return function(body) {
            console.log(`Sending Email to ${to} with subject ${subject}: ${body}`)
        }
    }
}

// OR Using Arrow function

const sendAutoEmail2 = (to) => (subject) => (body) => 
    `Sending Email to ${to} with subject ${subject}: ${body}`;


let step1 = sendAutoEmail2('admin@gmail.com');
let step2 = step1('New Order');
step2('hey'); // Sending Email to admin@gmail.com with subject New Order: hey
console.log(step2('hey'));