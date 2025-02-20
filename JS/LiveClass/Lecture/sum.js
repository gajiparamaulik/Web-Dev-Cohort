let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
let anotherArray = [];

function sumFactory(nums) {
    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }

    return sum;
}

let result = sumFactory(myArray);
console.log("result", result);