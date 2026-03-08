// Problem: Create an array containing different types of teas.
const teas = ["Grean Tea", "Black Tea", "Oolang Tea", "White Tea", "Herbal Tea"];
console.log(teas);


// Problem: Add "Ginger Tea" to the existing list of teas.
teas.push("Ginger Tea");


// Problem: Remove "Oolang Tea" from the list of teas.
const index = teas.indexOf("Oolang Tea");
console.log(index);
if(index > -1) {
    teas.splice(index, 1);
}


// Problem: Filter the list to only include teas that are caffeinated.
const filteredTeas = teas.filter((tea) => tea !== 'Herbal Tea');
console.log("filteredTeas :", filteredTeas);


// Problem: Sort the list of teas in alphabetical order.
const sorting = teas.sort();
console.log("sort : ", sorting);


// Problem: use a for loop to print each type of tea in the array
for(let i = 0; i < teas.length; i++) {
    console.log(teas[i]);
}


// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea");
let caffeinatedMyTeas = 0;
for(let i = 0; i < teas.length; i++) {
    if(teas[i] !== "Herbal Tea") {
        caffeinatedMyTeas++;
    }
}
console.log(caffeinatedMyTeas);


// Problem: Use a for loop to create a new array with all tea name in Uppercase.
const uppercaseTeas = [];
for(let i = 0; i < teas.length; i++) {
    uppercaseTeas.push(teas[i].toUpperCase());
} 
console.log(uppercaseTeas);


// Problem: Use a for loop to find the tea name with the most character.
let longestChar = "";
for(let i = 0; i < teas.length; i++) {
    if(teas[i].length > longestChar.length) {
        longestChar = teas[i];
    }
}
console.log(longestChar);


// Problem: Use a for loop to reverse the order of teas in the array.
const reverseArray = [];
for(let i = teas.length - 1; i >= 0; i--) {
    reverseArray.push(teas[i]);
}
console.log(reverseArray);