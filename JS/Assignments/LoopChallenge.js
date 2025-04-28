// 01. JS Loops
// You have a pile of gifts, and you want to give each of your friends one gift at a time. 
// You keep giving them gifts until they all get one.
// Write a function to distribute gifts to your friends one by one. It should stop once all your friends have received a gift.
// Hint 1 : Use if clause with a loop.

function distributeGifts(totalGifts, friends) {
    let giftsGiven = 0;
    for (let i = 0; i < friends; i++) {
        if (totalGifts > 0) {
            giftsGiven++;
            totalGifts--;
        }
    }
    return giftsGiven;
}
    


// 02. JS Loops
// You have a basket full of apples. You need to count how many apples are in the basket, but you don't know the exact number. 
// Each time you pick an apple, you count one. Your task is to count how many apples are in the basket.
// Create a function that counts the number of apples in the basket using a loop.

// You just need to implement the countSteps function 
function countSteps (targetSteps) {
    let stepsTaken = 0;
    while (stepsTaken < targetSteps) { 
        stepsTaken++;
    }
    return stepsTaken;
}



// 03. JS Loops
// You're packing chocolate bars into gift boxes. Each box needs to have the same number of chocolate bars. 
// You need to find out how many boxes of chocolates you'll have after packing the bars.
// Create a function that counts how many boxes you need based on the total number of chocolate bars and the number of chocolate 
// bars per box, using a loop.

function countBoxes(totalBars, barsPerBox) {
    let boxes = 0;
      
    while (totalBars >= barsPerBox) {
        boxes++;
        totalBars -= barsPerBox; 
    }
    return boxes;
}



// 04. JS Loops
// You're preparing for a picnic and need to fill several water bottles. Each bottle requires a different amount of water, 
// but you're going to fill them one by one. How do you track the amount of water you're adding to each bottle?
// Create a function that takes an array of water amounts (in liters) for each bottle and adds them up. 
// The function should return the total amount of water you've filled in all the bottles.
// * Hint 1 : Use a loop to go through each element in the array of water amounts and add each one to the total. 
// Don't forget to initialize the total as 0 at the start.

function totalWater(waterAmounts) {
    let total = 0; // Initialize total to 0

    for (let i = 0; i < waterAmounts.length; i++) {
        total += waterAmounts[i]; // Add each bottle's water amount to total
    }

    return total;
}



// 05. JS Loops
// You're tracking the number of steps you take during a workout. Each time you take a step, you want to count it. You keep 
// stepping until you've reached a certain number of steps.
// Create a function that uses a loop to count the number of steps during a workout. The loop should continue until you reach 
// the target step count.

function countSteps(targetSteps) {
    let steps = 0;
  
    for (let i = 0; i < targetSteps; i++) {
        steps++;
    }
  
    return steps;
}




// 06. JS Loops
// You're planning a week's schedule and need to count the days you are working. You have an array where each element represents 
// a day of the week. How can you calculate how many days you are working?
// Create a function that takes an array of days (e.g., ["Monday", "Tuesday", "Friday"]) and returns the number of days you're working. 
// "Saturday" and "Sunday" are not working days.

function countWorkingDays(days) {
    let workingDays = 0;
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; 
  
    for (let day of days) {
      if (weekdays.includes(day)) {
        workingDays++;
      }
    }
  
    return workingDays;
  }
  
  // Example usage: 
  const workSchedule = ["Monday", "Tuesday", "Friday", "sunday"];
  console.log(countWorkingDays(workSchedule)); // Output: 3



  
// 07. JS Loops
// You have multiple levels of stars to count. Each level contains a certain number of stars. How many total stars are there?
// Problem Statement:
// Create a function that takes an array of arrays (representing the number of stars in each level) and returns the total number 
// of stars.





// 08. JS Loops
// You're shopping for groceries and want to know the total cost of all the items in your cart. You have an array of item prices.
// Problem Statement:
// Create a function that takes an array of item prices and returns the total cost.




// 09. JS Loops
// You've been tasked with designing the perfect shiny diamond rug cursh's room. They love stars, and you've decided to make a 
// sparkling pattern using them. You need to help them create this rug, where the stars are arranged in the shape of a diamond! ✰✰
// Problem Statement:
// Create a function shinyDiamondRug(n) that prints a shiny diamond shape made of stars. The number n represents the size of the 
// diamond, with the middle of the diamond having 2n - 1 stars.
// Important Rules:
// 1 Each line must not have trailing spaces.
// 2 The output must not have an extra newline at the end.
// For example:
// • For n = 4, the output will look like:
// *
// ***
// *****
// *******
// *****
// ***
// *




// 10. JS Loops
// Easy
// You're on a camping trip with your friends, and you all want to set up a starry mountain as a symbol of your adventure. 
// To make things more fun, you decide to use stars to draw an inverted mountain pattern. The challenge: 
// print it so everyone can admire the majestic mountain shape!
// Problem Statement:
// Create a function invertedMountain(n) that prints an inverted mountain made of stars. The number n represents the number of 
// stars at the top, and the pattern should reduce by one star each line until only one star is left at the bottom.
// For example:
// • For n = 4, the output will look like:
// ****
// ***
// **
// *
// Hint 1
// When you want to print multiple lines, you can use '\n' to add a new line after each row of stars. 
// This will help you keep the output organized and align it properly!