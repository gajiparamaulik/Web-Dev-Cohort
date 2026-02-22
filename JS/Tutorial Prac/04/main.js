// Loops

// For loops -> If you know how many times to loop
// for(initialize; condition; increment) {
//     message;
// }

for(let i = 1; i <= 10; i++) {
    console.log(i);
}


// While loop -> 

let ip = 0;
let house = 15;

while(ip != house) {
    ip = ip + 1;
    console.log('Step Taken ' + ip);
}


// Do While loop

let number = 20;
let guess = 8;

do {
    guess = parseInt(prompt('Guess the number?'));
    if(guess == number) {
        alert('Winner');
        break;
    }
} while (guess != 0)