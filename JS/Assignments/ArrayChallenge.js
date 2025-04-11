
// 01. JS Arrays
// Easy
// You are organizing a party and have a list of invited guests. But just before the party starts, a new friend decides to join. 
// You need to add them to the guest list.
// Problem Statement: Create a function that adds a new guest list and returns the updated list.
// Hint 1
// Use the method that allows you to add an item at the end of an array.

function addGuest(guestList, newGuest) {
    guestList.push(newGuest);
    return guestList;
}




// 02. JS Arrays
// Easy
// You have a jar full of candies, but your little sibling keeps eating the last one! Your job is to remove the last candy from the jar.
// Problem Statement: 
// Create a function that removes the last candy from the jar and returns the updated jar.


function eatCandy(candyJar) {
    candyJar.pop();
    return candyJar;
}