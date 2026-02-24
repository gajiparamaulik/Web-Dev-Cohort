// Arrays

const students = ['a', 'b', 'c', 'd'];
students[0] = 'AA';
students.push('EEE');
// console.log(students);


const myArray = [1, true, false, 'data', '❤️'];
myArray.push({ name: 'john', age: 55 });
// console.log(myArray);
// console.log(myArray.reverse());
// console.log(myArray.indexOf('data'));


// Higher Order Function

const schoolData = ['aa', 'bb', 'cc', 'dd'];


// for(let i = 0; i < schoolData.length; i++) {
//     console.log(schoolData[i]);
// }
 
// schoolData.forEach((val) => console.log(val)); // not return anything
// schoolData.map(val => console.log(val)); // new array return

// Map() -> return new array
const numbers = [1, 2, 3, 4, 5];

function double(n) {
    return n * 2;
}

let newArry = numbers.map(double);
// console.log(newArry);



// Find()
const findNumber = [111, 2234, 433, 64, 6545, 34566, 2347, 2348, 9];
let  findNumGet = findNumber.find((num) => num === 64);
// console.log(findNumGet);


// filter()
let filterData = [1, 2, 3, 4, 5];
const filteredArr = filterData.filter((num) => num %2 == 0);
// console.log(filteredArr);



// Slice
const number3 = [1, 2, 3, 4, 5];
let newSlice = number3.slice(1,3);
console.log(newSlice);