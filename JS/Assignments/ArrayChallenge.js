
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




// 03. JS Arrays
// Easy Hints
// A puppy named Max was playing in the park, but he went to the first position of the queue instead of waiting at the end. You need to add Max at the beginning of the queue.
// Problem Statement: Create a function that adds a puppy to the front of the queue and returns the updated queue.
// Think of a method that adds an item to the beginning of an array.

function addPuppy(queue, puppyName) {
    queue.unshift(puppyName);
    return queue;
}




// 04. JS Arrays
// Easy Hints
// A school bus has students inside, but the first student in line needs to get off at the next stop. Remove the first student from the bus.
// Problem Statement: Create a function that removes the first student from the bus and returns the updated list.