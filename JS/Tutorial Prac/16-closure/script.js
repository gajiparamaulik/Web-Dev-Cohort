function adder(num) {
    function add(b) {
        console.log(num + b);
    }
    return add;
}

const addTo5 = adder(5);
// addTo5(10);
// addTo5(11);


// Excercise 2
const titleId = document.getElementById('titleTag');
const btnClick = document.getElementById('clickBtn');

function makeTextSize(size) {
    function changeSize() {
        titleId.style.fontSize = `${size}px`;
    }
    return changeSize;
}

const size10 = makeTextSize(10);
const size20 = makeTextSize(20);
const size30 = makeTextSize(30);
const size40 = makeTextSize(40);


btnClick.addEventListener('click', size40);




// Excercise 3
function makeCount() {
    let count = 1;

    function increment() {
        console.log(count++);
    }
    return increment;
} 

const count1 = makeCount();

count1();
count1();
count1();
count1();