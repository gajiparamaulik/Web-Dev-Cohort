// 01. JS Objects
// Easy Statement
// Imagine you are building an online school management system. Each student has a profile containing their name, age, and grade. 
// You need to store this information in an object format so that it can be accessed easily when required.
// Challenge :
// Write a function that takes name, age, and grade as parameters and returns a student object containing these properties.
// Constraints
// • name should be a string.
// • age should be a positive integer greater than 5. 
// • grade should be a string like "10th", "12th", etc.
// • return "Invalid input" for wrong inputs.




// 02. JS Objects
// Easy Statement
// You are developing a car rental service. Each car has a brand and model, but some cars don't have a color assigned yet. 
// You need to add a color property dynamically when a customer selects a car.
// Challenge
// Write a function that takes a car object and a color string, then adds the color property to the object.
// Constraints
// ⚫ car should be a valid object with at least brand and model properties.
// ⚫ color should be a non-empty string, otherwise return "Invalid color".




// 03. JS Objects
// Easy Statement
// You are building an online shopping platform. Some products have discounts, and some don't. 
// You need to check whether a product object contains a discount property.
// Challenge
// Write a function that checks if a product object has a discount property and returns true or false.
// Constraints
// product should be a valid object.




// 04. JS Objects
// Easy Statement
// For security reasons, when a user logs out, their password should be removed from the user object before storing it in logs 
// or analytics.
// Challenge
// Write a function that removes the password property from a user object and returns the updated object.
// Constraints
// ⚫ user should be a valid object with at least a username and password.
// • If password does not exist, return the object as it is.



// 05. JS Objects
// Easy Statement
// You are analyzing user data in a database. You need to count how many properties exist in a user's profile to determine if 
// the profile is complete.
// Challenge
// Write a function that returns the number of properties in an object.
// Constraints
// ⚫ user should be a valid object.
// If the object is empty, return 0.




// 06. JS Objects
// Medium Statement
// You are working on a system that stores user profile information from multiple sources. Sometimes, the same user has two different 
// records, and you need to merge them into a single object.
// Challenge
// Write a function that takes two objects and merges them into one. If a key exists in both objects, the value from the second 
// object should overwrite the value from the first object.
// Constraints
// • Both inputs should be valid objects.
// • If an object is empty, return the other object as it is.
// • If both objects are empty, return {}.




// 07. JS Objects
// Medium Statement
// You are working on a system that stores product details in an object. However, for some functionalities, the data needs to 
// be in an array format.
// Challenge
// Write a function that converts an object into an array of key-value pairs. Each element in the array should be an array where 
// the first item is the key and the second item is the value.
// Constraints
// • The input should be a valid object.
// • If the object is empty, return an empty array.




// 08. JS Objects
// Medium Statement
// In your web application, some objects contain unnecessary properties. To optimize performance, you need to remove all 
// properties that have null or undefined values.
// Challenge
// Write a function that removes all properties with null or undefined values from an object.
// Constraints
// • The input should be a valid object.
// • If the object has no valid properties left, return ◊.




// 09. JS Objects
// Hard Statement
// You are working on a web application where objects contain nested properties. JavaScript's built-in assignment (=) creates a 
// shallow copy, meaning changes to the copied object will also affect the original. To prevent this, you need to create a deep copy 
// of an object, ensuring that nested objects are also cloned properly.
// Challenge
// Write a function that takes an object and returns a deep copy of it.
// Constraints
// • The input should be a valid object.
// • The function should work with nested objects and arrays inside objects.
// • The function should not modify the original object




// 10. JS Objects
// Medium Statement
// In many applications, data is stored in deeply nested objects. Accessing a property from a deeply nested object requires 
// multiple checks to avoid errors. Instead of manually checking each level, we need a function that safely retrieves a value from 
// a nested object using a dot-separated key path.
// Challenge
// Write a function that takes a nested object and a key path string (e.g., "user.address.city") and returns the value. If any part 
// of the path is missing, return "Key not found".
// Constraints
// • The input object should be valid.
// • The key path should be a string with dot notation (.) separating keys.
// • If a key is missing, return "Key not found".
// • The function should handle deeply nested objects.
