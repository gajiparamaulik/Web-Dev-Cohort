const inputVal = document.getElementById('userName');
const buttonClick = document.getElementById('clickBtn');

const userName = document.getElementById('storageData');

buttonClick.addEventListener('click', () => {
    const value = inputVal.value;
    localStorage.setItem('name', value);
    location.reload();
});

window.addEventListener('load', () => {
    const value = localStorage.getItem('name');
    userName.innerText = value
});