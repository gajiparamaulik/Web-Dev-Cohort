const button = document.getElementById('buttonClick');

async function getData(lat, long) {
    let getWeatherData = await 
        fetch(`http://api.weatherapi.com/v1/current.json?key=7996646101c04097b5562539262502&q=${lat},${long}&aqi=yes`);
        return await getWeatherData.json();
}

async function gotLocation(position) {
    const result = await getData(position.coords.latitude, position.coords.longitude);
    console.log(position);
    console.log('Current Location :',result);
}

function failedToGet() {
    console.log("Error");
}

button.addEventListener('click', async () => {
    const result = navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
});