const inputEle = document.getElementById('')

const ulEle = document.querySelectorAll('ul');

ulEle.forEach(ul => {
    const liEle = ul.querySelectorAll('li');
   
    liEle.forEach(li => {
        console.log(li.textContent);
        
    });
});
