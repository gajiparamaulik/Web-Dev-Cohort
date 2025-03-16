const timeId = document.getElementById("setTime");
const dateId = document.getElementById("setDate");

function updateTime() {
    const now = new Date();
    let hours = now.getHours() % 12 || 12;
    hours = String(hours).padStart(2, '0');

    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    const timeString = `${hours} : ${minutes} : ${seconds} ${ampm}`;
    timeId.textContent = timeString;
}

function getDate() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yy = today.getFullYear();

    today = day + ',' + ' ' + dd + '-' + mm + '-' + yy;
    dateId.textContent = today;
}

getDate();
  
setInterval(updateTime, 1000);
updateTime();