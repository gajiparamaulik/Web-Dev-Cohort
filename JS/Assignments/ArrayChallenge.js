
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
// Easy
// A school bus has students inside, but the first student in line needs to get off at the next stop. Remove the first student from the bus.
// Problem Statement: Create a function that removes the first student from the bus and returns the updated list.


function removeStudent(bus) {
    bus.shift(); 
    return bus;
}





// 05. JS Arrays
// Easy
// Your bookshelf is a mess! You need to arrange the books in alphabetical order.
// Problem Statement: Create a function that sorts the books alphabetically and returns the updated list.





// 06. JS Arrays
// Easy
// You have a list of food items, but you want to keep only the healthy ones. Remove all items that contain "Burger".
// Problem statement: Create a function that removes unhealthy food items (those containing "Burger") and returns the updated list.




// 07. JS Arrays
// Easy
// You lost your phone in a list of items. Find the index of "Phone".
// Problem Statement: Create a function that finds the index of "Phone" in the list of items and returns the index.



// 08. JS Arrays
// Easy
// You wrote a love letter, but you want to insert your partner's name at the beginning of the message.
// Problem Statement: Create a function that inserts the partner's name at the start of the message and returns the updated message.




// 09. JS Arrays
// Easy
// A new VIP guest arrives at the club and should be at the front of the queue. Add them to the beginning of the list. 
// Problem Statement: Create a function that adds a VIP guest to the front of the queue and returns the updated list.




// 10. JS Arrays
// Easy
// You and your friends are making a list of movies to watch. You want to check how many movies are in the list.
// Problem Statement: Create a function that returns the number of movies in the movie list.