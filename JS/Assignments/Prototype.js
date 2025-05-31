// 01. JS Prototype
// Easy **Hints
// Problem statement
// You need to create a constructor function Animal that takes a name parameter. Add a method makeSound to its prototype, 
// which always returns "Some generic sound". 
// Challenge
// • Implement a constructor function Animal that initializes the name property.
// • Attach a method makeSound to its prototype that returns "Some generic sound".



// 02. JS Prototype
// Easy **Hints
// Problem statement
// You are designing a simple robot system. Each robot has a name and a batteryLevel. The robot should have a method charge() 
// that increases the battery level by 20, but it cannot exceed 100.
// Challenge
// • Implement a constructor function Robot that initializes name and batteryLevel.
// • Attach a method charge() to its prototype that increases batteryLevel by 20, ensuring it does not go above 100.



// 03. JS Prototype
// Easy -Hints
// Problem statement
// You need to create a Counter constructor function that initializes a count property to 0. The counter should have 
// two prototype methods:
// • increment() increases the count by 1.
// • decrement() decreases the count by 1.
// Challenge
// • Implement a constructor function Counter that initializes count to
// • Attach increment () and decrement() methods to the prototype.




// 04. JS Prototype
// Easy Hints
// Problem statement
// Create a playlist constructor that initializes with an empty songs array. Add a method addSong(song) to the prototype 
// that adds a new song to the playlist.
// Challenge
// • Implement a constructor function Playlist that initializes an empty songs array.
// • Attach a method addSong(song) to its prototype that adds the song to the songs array.




// 05. JS Prototype
// Medium -Hints
// Problem statement
// Create a Shopping Cart system where items can be added with a price. Implement a method getTotalPrice() that calculates 
// the total price of all items in the cart.
// Challenge
// Implement a constructor function ShoppingCart that initializes an empty items array.
// • Attach addItem(price) to the prototype to add items.
// • Attach getTotalPrice() to calculate the total price of items.




// 06. JS Prototype
// Medium - Hints
// Problem statement
// Create a BankAccount constructor that initializes:
// • A balance property representing the account balance.
// • A transactions array to log all deposit and withdrawal activities.
// Implement the following methods on the prototype:
// 1. deposit (amount):
// • Increases the balance by the given amount.
// • Adds a transaction log in the format: "Deposited x" (where X is the amount).
// 2. withdraw(amount):
// • Decreases the balance by the given amount.
// • Prevents overdraft (cannot withdraw if balance is insufficient).
// • If withdrawal is successful, log: "withdrew X".
// • If balance is insufficient, log: "Insufficient balance".
// 3. getTransactionHistory():
// • Returns the list of all transactions as an array of strings in the order they occurred.
// Challenge
// • Implement BankAccount constructor with balance and transactions.
// • Attach deposit (amount), withdraw(amount), and getTransactionHistory() methods to the prototype.




// 07. JS Prototype
// Medium -Hints
// Problem statement
// Create an Employee constructor that initializes name, position, and salary. Implement:
// ⚫ applyBonus (percent): Increases the salary by the given percentage.
// Challenge
// • Implement Employee constructor with name, position, and salary
// • Attach applyBonus (percent) to the prototype to increase salary.





// 08. JS Prototype
// Medium - Hints
// Problem statement
// Create a Library constructor that initializes a books array. Implement:
// • addBook(book): Adds a book to the books array.
// • findBook(title): Searches for a book by title and returns "Book found" or "Book not found".
// Challenge
// • Implement Library constructor with a books array.
// • Attach addBook (book) and findBook (title) methods to the prototype.




// 09. JS Prototype
// Hard -Hints
// Problem statement
// You are building a banking system where multiple bank accounts can exist. Each account has an accountNumber, holderName, and balance. 
// Implement the following methods:
// • deposit (amount): Adds money to the balance.
// • withdraw(amount): Deducts money but prevents overdraft.
// • transfer (amount, targetAccount): Transfers money from one account to another if the balance allows it.
// Challenge
// • Implement BankAccount constructor with accountNumber, holderName, and balance.
// • Attach deposit (amount), withdraw(amount), and transfer (amount, targetAccount) methods to the prototype.



